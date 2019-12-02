const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema(
    {
        recipe : JSON
    });

const CartSchema = new Schema(
    {
        ingredient : String
    });

module.exports = mongoose.model('Recipe',RecipeSchema);
module.exports = mongoose.model('Cart',CartSchema);