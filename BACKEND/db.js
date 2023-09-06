const mongoose = require('mongoose');


const mongoURI = "mongodb://localhost:27017/inotebook?directConnection=true&readPreference=primary";


const connectToMongo=()=>{
    mongoose.connect(mongoURI);
    console.log("connected to mongo");
}
module.exports = connectToMongo;
