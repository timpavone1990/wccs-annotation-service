"use strict";

const winston = require("winston");
const logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            level: (process.env.NODE_ENV === "development" ? "debug" : "info"),
            timestamp: function() {
                return new Date().toISOString();
            },
            formatter: function(options) {
                return `${options.timestamp()} - ${options.level.toUpperCase()} - ${options.message}`;
            }
        })
    ]
});

module.exports = logger;