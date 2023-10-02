const express = require('express');
const app = express();
const product = require('./routes/productRoute.js');
const errorHandler = require('./middleware/Error.js');
const user = require('./routes/userRoute.js');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());

app.use("/api", product);
app.use("/api", user)

app.use(errorHandler);


module.exports = app;
