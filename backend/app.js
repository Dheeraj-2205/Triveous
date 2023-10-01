const express = require('express');
const app = express();
const product = require('./routes/productRoute.js');
const errorHandler = require('./middleware/Error.js');
const user = require('./routes/userRoute.js');

app.use(express.json());
app.use("/api", product);
app.use("/api", user)

app.use(errorHandler);


module.exports = app;
