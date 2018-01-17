"use strict";

const AnnotationServiceError = require("./AnnotationServiceError");
const logger = require("./Logger");

const STORAGE_API_HOST = "classification-storage-api";

module.exports = class AnnotationRepository {
    constructor(httpRequestExecutor, annotationsAssembler) {
        this.httpRequestExecutor = httpRequestExecutor;
        this.annotationsAssembler = annotationsAssembler;
    }

    async getAnnotationsForPage(pageId, format) {
        if (format && format !== "annotatorjs") {
            throw new AnnotationServiceError(400, `Annotation format '${format}' unknown.`);
        } else if (!format) {
            logger.debug("Annotation format not specified. Will use AnnotatorJS format.");
        }

        const encodedPageId = encodeURIComponent(pageId);
        const page = await this.httpRequestExecutor.get(`http://${STORAGE_API_HOST}:52629/pages/${encodedPageId}`);
        return this.annotationsAssembler.assembleFromPage(page);
    }

    async storeAnnotation(pageId, annotation) {
        const encodedPageId = encodeURIComponent(pageId);
        const page = await this.httpRequestExecutor.get(`http://${STORAGE_API_HOST}:52629/pages/${encodedPageId}`);

        const path = Buffer.from(annotation.id, "base64").toString();
        const pathElements = path.split(":");
        let object = page;

        while (pathElements.length > 0) {
            const pathElement = pathElements.shift();
            object = object[pathElement];
        }

        object.class = annotation.wccs.class;
        await this.httpRequestExecutor.put(`http://${STORAGE_API_HOST}:52629/pages/${encodedPageId}`, page);
    }
};