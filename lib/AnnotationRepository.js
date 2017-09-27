"use strict";

const AnnotationServiceError = require("./AnnotationServiceError");
const logger = require("./Logger");

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
        const page = await this.httpRequestExecutor.get(`http://storage-api:52629/pages/${encodedPageId}`);
        return this.annotationsAssembler.assembleFromPage(page);
    }
};