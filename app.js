const mongoose =require('mongoose');

//connection url
const url = 'mongodb://localhost:27017';

mongoose.connect('mongodb://localhost:27017/fruitsDb',{useNewUrlParser:true});

//create a new schema or blueprint for the database

const fruitSchema = new mongoose.Schema({
    name : String,
    rating:Number,
    review:String
});

//after schema we are going to create a model based on the schema
const Fruit=mongoose.model("fruit",fruitSchema);

const fruit=new Fruit({
    name:'Apple',
    rating :7,
    review:"Woohooo"
});

fruit.save();

