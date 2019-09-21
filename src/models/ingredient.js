const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var IngredientSchema = new Schema(
    {
        name: {type: String, required: true, max: 40},
        calories: {type: Number, required: true, max: 9999 },
        serving_size: {type: Number, required: true, max: 10000 },
        unit_of_measurement: {type: String, required: true, enum: ['cup', 'Tbsp', 'tsp', 'kg', 'g', 'ml', 'L', 'Oz', 'Lb'], default: 'g' }
    }
) 

module.exports = mongoose.model('ingredient', IngredientSchema);
