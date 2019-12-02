const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeFavoriSchema = new Schema(
    {
        recipe : JSON
    });

module.exports = mongoose.model('FavoriRecipe',RecipeFavoriSchema);