const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var RecipeSchema = new Schema({
    name: {type: String, required: true, max:50},
    ingredients: [{type: Schema.Types.ObjectId, ref: 'Ingredient'}],
    calories: {type: Number},
    kilojoules: {type: Number} 
})

var Story  = mongoose.model('Ingredient', IngredientSchema);