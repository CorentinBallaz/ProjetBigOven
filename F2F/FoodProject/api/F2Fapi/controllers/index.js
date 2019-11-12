const apiKey = "91d2b2b099e5b421ee30ce2eeb65b270";
const getUrl = "https://www.food2fork.com/api/get?key="+apiKey;
const searchUrl = "https://www.food2fork.com/api/search?key="+apiKey;

function getRecipesList(req,res){

    // A voir le reste AVEC MRT
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
    request.open('GET', searchUrl, true)

    request.onload = function() {
        // Begin accessing JSON data here
        if (request.status >= 200 && request.status < 400) {
           res.json(request.responseText);
        } else {
            // console.log('error')
            res.json({"fdsfsf":"sdds"})
        }
    };

// Send request
    request.send()
}
function getRecipeById(req,res){
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var request = new XMLHttpRequest();
    request.open('GET', getUrl+"&rId="+req.params.id, true);
    request.onload = function() {
        // Begin accessing JSON data here
        if (request.status >= 200 && request.status < 400) {
            res.json(request.responseText);
        } else {
            // console.log('error')
            res.json({"fdsfsf":"sdds"})
        }
    };

// Send request
    request.send()

}

function getRecipesResearchList(req,res){

    // A voir le reste AVEC MRT
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
    request.open('GET', searchUrl+"&q="+req.params.query, true)

    request.onload = function() {
        // Begin accessing JSON data here
        if (request.status >= 200 && request.status < 400) {
            res.json(request.responseText);
        } else {
            // console.log('error')
            res.json({"fdsfsf":"sdds"})
        }
    };

// Send request
    request.send()
}
module.exports.getRecipesResearchList=getRecipesResearchList;
module.exports.getRecipesList=getRecipesList;
module.exports.getRecipeById=getRecipeById;



