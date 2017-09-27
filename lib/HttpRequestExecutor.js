"use strict";

// TODO Duplicated in storage-api and typing-engine

const logger = require("./Logger");

module.exports = class HttpRequestExecutor {
    constructor(httpClient) {
        this.httpClient = httpClient
    }

    async get(url) {
        logger.debug("Executing GET request to %s", url);
        return new Promise((resolve, reject) => {
            this.httpClient
                .get(url)
                .headers({"Accept": "application/json;charset=utf-8"})
                .end(response => {
                    if (response.ok) {
                        resolve(response.body);
                    } else {
                        reject(new Error(`GET request to ${url} failed: ${response.error}`));
                    }
                });
        });
    }
};
