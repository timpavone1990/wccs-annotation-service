"use strict";

module.exports = class AnnotationServiceError {
    constructor(status, message) {
        this.status = status;
        this.message = message;
    }
};