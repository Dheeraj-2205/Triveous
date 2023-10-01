const app = require('./app');
const {config} = require('dotenv');
const connectDb = require('./config/database.js');
config({
    path : "backend/config/config.env"
});

process.on("uncaughtException", (err) =>{
    console.log(`Error ${err.message}`);
    console.log(`server is shut down`);
    process.exit(1);
})

connectDb();

const server = app.listen(process.env.PORT,()=>{
    console.log(`server is running on PORT NO ${process.env.PORT}`);
})

process.on("unhandledRejection", (err)=>{
    console.log(`Error ${err.message}`);
    console.log(`server shut down due  to unhandler rejection`);
    server.close(()=>{
        process.exit(1)
    });
    
})