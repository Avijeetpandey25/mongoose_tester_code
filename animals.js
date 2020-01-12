const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/animalsDB",{useNewUrlParser:true,useUnifiedTopology:true});

console.log("Connection to database established");

const animalSchema=new mongoose.Schema({
    _id:Number,
    type:String,
    name:String,
    canSwim:Boolean,
    hasWings:Boolean,
});

//creating new model based on the schema

const Animal=new mongoose.model("animal",animalSchema);

//adding animal to the collection

const animal=new Animal({
    _id:1,
    type:'mammal',
    name:'Blue whale',
    canSwim:true,
    hasWings:false
});

animal.save();