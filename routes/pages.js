"use strict";

const express = require("express");
const router = express.Router();

const logger = require("../lib/Logger");

const unirest = require("unirest");

router.get("/:pageId", (request, response) => {
    response.json({ "name": "Annotator Store API", "version": "2.0.0" });
});

module.exports = router;
