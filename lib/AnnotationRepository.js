"use strict";

module.exports = class AnnotationRepository {
    constructor(httpRequestExecutor, Annotations) {
        this.httpRequestExecutor = httpRequestExecutor;
        this.Annotations = Annotations;
    }

    async getAnnotationsForPage(pageId) {
        const encodedPageId = encodeURIComponent(pageId);
        const page = await this.httpRequestExecutor.get(`http://storage-api:52629/pages/${encodedPageId}`);
        const annotations = this.Annotations.createFromPage(page);
        return annotations;
    }
};