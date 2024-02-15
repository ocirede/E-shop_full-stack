import mongoose from "mongoose";

const { Schema } = mongoose;

const productsSchema = new Schema({
    name: {
        type: String,

    },
    description: {
        type: String,
    },

    price:{
        type:Number,
    },
    image:{
        type: String,
    },
    quantity:{
        type: Number,
        min: 0,
        max: 10,
    },

    category:{
        type: String,
    },
    brand:{
        type: String,
    }
},
{
  timestamps: true,
});

const Products = mongoose.model("Product", productsSchema );

export default Products;