const mongoose = require('mongoose');
//username - divyanshukumar1980
//pass - divyanshu940

const mongoURI = "mongodb+srv://divyanshukumar1980:divyanshu940@cluster0.fjlqfpk.mongodb.net/inotebookgit?retryWrites=true&w=majority";


const connectToMongo=()=>{
    mongoose.connect(mongoURI);git 
    console.log("connected to mongo");
}
module.exports = connectToMongo;
