const express = require('express');
const app = express();
const product = require('./routes/productRoute.js');
const errorHandler = require('./middleware/Error.js');
const user = require('./routes/userRoute.js');
const cookieParser = require('cookie-parser');
const cart = require('./routes/cartRoute.js');
const cors = require('cors');

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin : [process.env.FRONTEND_URI],
    methods : ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials : true
}));

app.use("/api", product);
app.use("/api", user)
app.use("/api", cart)

app.use(errorHandler);


module.exports = app;
