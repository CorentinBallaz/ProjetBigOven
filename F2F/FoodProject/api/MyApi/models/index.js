const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RecipeSchema = new Schema(
    {
        // title : String,
        // description :String,
        // done :{
        //     type : Boolean,
        //     default:false
        // },
        // createdAt: {
        //     type : Date,
        //     default: Date.now
        // }

        // recipe : String
        recipe : JSON
    });
module.exports = mongoose.model('Recipe',RecipeSchema);