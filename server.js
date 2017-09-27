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

app.use("/pages", index);
app.use((error, request, response, next) => {
    response
        .status(500)
        .json({ "error": error.message });
});

app.listen(PORT, () => {
    logger.info(`Annotation service started and listening on port ${PORT}.`);
});
