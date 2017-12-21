"use strict";

const expect = require("chai").expect;
const annotationsAssembler = require("./AnnotationsAssembler");

describe("#assembleFromPage", () => {
    it("should assemble correctly", () => {
        const page = require("../resources/ServicePageObject");
        const annotations = annotationsAssembler.assembleFromPage(page);
        expect(annotations.length).to.eql(89);

        annotations.forEach(annotation => {
            const path = Buffer.from(annotation.id, "base64").toString();
            const pathElements = path.split(":");

            let object = page;
            let featureKind = "";
            while (pathElements.length > 0) {
                const pathElement = pathElements.shift();
                object = object[pathElement];
                if (pathElement === "references") {
                    featureKind = "reference";
                } else if (pathElement === "properties") {
                    featureKind = "property";
                }
            }

            expect(annotation.wccs.class).to.eql(object.type);
            expect(annotation.wccs.featureKind).to.eql(featureKind);
            expect(annotation.user).to.eql("wccs");
            expect(annotation.permissions).to.eql({ "admin": ["wccs"] });
            expect(annotation.ranges[0].start).to.eql(object.selector.startSelector.value.replace("/html[1]/body[1]", ""));
            expect(annotation.ranges[0].startOffset).to.eql(object.selector.startSelector.offset);
            expect(annotation.ranges[0].end).to.eql(object.selector.endSelector.value.replace("/html[1]/body[1]", ""));
            expect(annotation.ranges[0].endOffset).to.eql(object.selector.endSelector.offset);
        });
    });

    it("should assemble teachers annotations correctly", () => {
        const page = require("../resources/LehrendePageObject");
        const annotations = annotationsAssembler.assembleFromPage(page);
        const expectedAnnotations = require("../resources/LehrendeAnnotations");
        expect(annotations).to.eql(expectedAnnotations);
    });

    it("should create no annotation for contents, if no features and no text", () => {
        const page = {
            "properties":{
                "heading":{
                    "properties":{},
                    "references":{},
                    "selector":{},
                    "type":"Text"
                }
            }
        };
        const annotations = annotationsAssembler.assembleFromPage(page);
        expect(annotations.length).to.eql(0);
    });

    it("should create an annotation for references, if no features and no text", () => {
        const page = {
            "references":{
                "heading":{
                    "properties":{},
                    "references":{},
                    "selector":{
                        "endSelector": { "offset": 259, "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]" },
                        "startSelector": { "offset": 207, "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]" },
                    },
                    "type":"Text"
                }
            }
        };
        const annotations = annotationsAssembler.assembleFromPage(page);
        expect(annotations.length).to.eql(1);
    });

    it("should create an annotation for contents, if no features but text", () => {
        const page = {
            "properties":{
                "heading":{
                    "properties":{},
                    "references":{},
                    "selector":{
                        "endSelector": { "offset": 259, "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]" },
                        "startSelector": { "offset": 207, "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]" },
                    },
                    "type":"Text",
                    "content": "Test 123"
                }
            }
        };
        const annotations = annotationsAssembler.assembleFromPage(page);
        expect(annotations.length).to.eql(1);
    });

    it("should create no annotation for contents, if reference feature but no text", () => {
        const page = {
            "properties":{
                "heading":{
                    "properties":{},
                    "references":{
                        "test":{
                            "properties":{},
                            "references":{},
                            "selector":{
                                "endSelector": { "offset": 259, "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]" },
                                "startSelector": { "offset": 207, "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]" },
                            },
                            "type":"Text",
                        }
                    },
                    "selector":{},
                    "type":"Text"
                }
            }
        };
        const annotations = annotationsAssembler.assembleFromPage(page);
        // Check that only annotation for reference was created
        expect(annotations.length).to.eql(1);
    });

    it("should create no annotation for contents, if content feature but no text", () => {
        const page = {
            "properties":{
                "heading":{
                    "properties":{
                        "test":{
                            "properties":{},
                            "references":{},
                            "selector":{
                                "endSelector": { "offset": 259, "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]" },
                                "startSelector": { "offset": 207, "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]" },
                            },
                            "type":"Text",
                            "content": "Test 123"
                        }
                    },
                    "references":{},
                    "selector":{},
                    "type":"Text"
                }
            }
        };
        const annotations = annotationsAssembler.assembleFromPage(page);
        // Check that only annotation for reference was created
        expect(annotations.length).to.eql(1);
    });

    it("should create an annotation for contents, if content feature and text", () => {
        const page = {
            "properties":{
                "heading":{
                    "properties":{
                        "test":{
                            "properties":{},
                            "references":{},
                            "selector":{
                                "endSelector": { "offset": 259, "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]" },
                                "startSelector": { "offset": 207, "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]" },
                            },
                            "type":"Text",
                            "content": "Test 123b"
                        }
                    },
                    "references":{},
                    "selector":{
                        "endSelector": { "offset": 259, "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]" },
                        "startSelector": { "offset": 207, "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]" },
                    },
                    "type":"Text",
                    "content": "test abc"
                }
            }
        };
        const annotations = annotationsAssembler.assembleFromPage(page);
        // Check that only annotation for reference was created
        expect(annotations.length).to.eql(2);
    });

    it("should create no annotation for contents, if content and reference feature but no text", () => {
        const page = {
            "properties":{
                "heading":{
                    "properties":{
                        "test":{
                            "properties":{},
                            "references":{},
                            "selector":{
                                "endSelector": { "offset": 259, "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]" },
                                "startSelector": { "offset": 207, "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]" },
                            },
                            "type":"Text",
                            "content": "Test 123b"
                        }
                    },
                    "references":{
                        "test_ref":{
                            "properties":{},
                            "references":{},
                            "selector":{
                                "endSelector": { "offset": 259, "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]" },
                                "startSelector": { "offset": 207, "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]" },
                            },
                            "type":"Text"
                        }
                    },
                    "selector":{},
                    "type":"Text",
                }
            }
        };
        const annotations = annotationsAssembler.assembleFromPage(page);
        // Check that only annotation for reference was created
        expect(annotations.length).to.eql(2);
    });

    it("should create an annotation for contents, if content and reference feature and text", () => {
        const page = {
            "properties":{
                "heading":{
                    "properties":{
                        "test":{
                            "properties":{},
                            "references":{},
                            "selector":{
                                "endSelector": { "offset": 259, "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]" },
                                "startSelector": { "offset": 207, "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]" },
                            },
                            "type":"Text",
                            "content": "Test 123b"
                        }
                    },
                    "references":{
                        "test_ref":{
                            "properties":{},
                            "references":{},
                            "selector":{
                                "endSelector": { "offset": 259, "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]" },
                                "startSelector": { "offset": 207, "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]" },
                            },
                            "type":"Text"
                        }
                    },
                    "selector":{
                        "endSelector": { "offset": 259, "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]" },
                        "startSelector": { "offset": 207, "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]" },
                    },
                    "type":"Text",
                    "content": "Test abc"
                }
            }
        };
        const annotations = annotationsAssembler.assembleFromPage(page);
        // Check that only annotation for reference was created
        expect(annotations.length).to.eql(3);
    });
});