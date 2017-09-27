"use strict";

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const logger = require("./lib/Logger");

const express = require("express");
const app = express();

const index = require("./routes/pages");
const PORT = 16612;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use((request, response, next) => {
    response.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Allow-Methods": "DELETE, GET, POST, PUT"
    });
    next();
});

app.use("/pages", index);
app.use((error, request, response, next) => {
    response
        .status(500)
        .json({ "error": error.message });
});

app.listen(PORT, () => {
    logger.info(`Annotation service started and listening on port ${PORT}.`);
});
