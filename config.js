const mongoose = require('mongoose')
try{
    mongoose.connect(process.env.mongoUrl)
}catch(err){
    console.log("err while conntecting...")
}