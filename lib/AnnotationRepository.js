"use strict";

module.exports = class AnnotationRepository {
    constructor(httpRequestExecutor, annotationsAssembler) {
        this.httpRequestExecutor = httpRequestExecutor;
        this.annotationsAssembler = annotationsAssembler;
    }

    async getAnnotationsForPage(pageId) {
        const encodedPageId = encodeURIComponent(pageId);
        const page = await this.httpRequestExecutor.get(`http://storage-api:52629/pages/${encodedPageId}`);
        return this.annotationsAssembler.assembleFromPage(page);
    }
};