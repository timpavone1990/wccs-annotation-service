"use strict";

const express = require("express");
const router = express.Router();

const logger = require("../lib/Logger");

const unirest = require("unirest");
const httpRequestExecutor = new (require("../lib/HttpRequestExecutor"))(unirest);
const annotationsAssembler = require("../lib/AnnotationsAssembler");
const annotationRepository = new (require("../lib/AnnotationRepository"))(httpRequestExecutor, annotationsAssembler);

const AnnotationServiceError = require("../lib/AnnotationServiceError");

router.get("/:pageId", (request, response) => {
    response.json({ "name": "Annotator Store API", "version": "2.0.0" });
});

router.get("/:pageId/annotations", async (request, response, next) => {
    try {
        const annotations = await annotationRepository.getAnnotationsForPage(request.params.pageId, request.query.format);
        response.json(annotations);
    } catch (e) {
        logger.error("Getting annotations failed: " + e.message);

        if (e instanceof AnnotationServiceError) {
            response.status(e.status).send(e.message);
        } else {
            next(e);
        }
    }
});

router.put("/:pageId/annotations/:annotationId", async (request, response, next) => {
    try {
        await annotationRepository.storeAnnotation(request.params.pageId, request.body);
        const encodedPageId = encodeURIComponent(request.params.pageId);
        const encodedAnnotationId = encodeURIComponent(request.params.annotationId);
        response.set("Location", `/pages/${encodedPageId}/annotations/${encodedAnnotationId}`);
        response.status(303).end();
    } catch (e) {
        logger.error("Updating annotation failed: " + e.message);
        if (e instanceof AnnotationServiceError) {
            response.status(e.status).send(e.message);
        } else {
            next(e);
        }
    }
});

module.exports = router;
