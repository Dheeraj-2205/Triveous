const mongoose = require('mongoose');

const connectDb = ()=>{
    mongoose.connect(process.env.URL , {useNewUrlParser : true , useUnifiedTopology : true})
    .then((data)=>{
        console.log(`Data is connected successfully ${data.connection.host}`);
    })
    
}

module.exports = connectDb;