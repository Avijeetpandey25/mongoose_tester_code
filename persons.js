const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/personDB',{useNewUrlParser:true,useUnifiedTopology:true});

const personSchema=new mongoose.Schema({
    _id:Number,
    name:String,
    stream:String,
    number:Number
});

//new model based on the schema
const Person = new mongoose.model("person",personSchema);


const person=new Person({
    _id:11711584,
    name:'Avijeet Pandey',
    stream:'CSE',
    number:8318123598
});

person.save();