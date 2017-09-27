"use strict";

const AnnotationServiceError = require("./AnnotationServiceError");

module.exports = class AnnotationRepository {
    constructor(httpRequestExecutor, annotationsAssembler) {
        this.httpRequestExecutor = httpRequestExecutor;
        this.annotationsAssembler = annotationsAssembler;
    }

    async getAnnotationsForPage(pageId, format) {
        if (format !== "annotatorjs") {
            throw new AnnotationServiceError(400, "Annotation format not specified or unknown.");
        }

        const encodedPageId = encodeURIComponent(pageId);
        const page = await this.httpRequestExecutor.get(`http://storage-api:52629/pages/${encodedPageId}`);
        return this.annotationsAssembler.assembleFromPage(page);
    }
};