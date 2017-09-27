"use strict";

const express = require("express");
const router = express.Router();

const logger = require("../lib/Logger");

const unirest = require("unirest");
const httpRequestExecutor = new (require("../lib/HttpRequestExecutor"))(unirest);
const annotationsAssembler = require("../lib/AnnotationsAssembler");
const annotationRepository = new (require("../lib/AnnotationRepository"))(httpRequestExecutor, annotationsAssembler);

router.get("/:pageId", (request, response) => {
    response.json({ "name": "Annotator Store API", "version": "2.0.0" });
});

router.get("/:pageId/annotations", async (request, response, next) => {
    try {
        const annotations = await annotationRepository.getAnnotationsForPage(request.params.pageId);
        response.json(annotations);
    } catch (e) {
        next(e);
    }
});

module.exports = router;
