"use strict";

const expect = require("chai").expect;
const annotationsAssembler = require("./AnnotationsAssembler");

describe("#assembleFromPage", () => {
    it("should assemble correctly", () => {
        const page = require("../resources/ServicePageObject");
        const annotations = annotationsAssembler.assembleFromPage(page);
        expect(annotations.length).to.eql(90);

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
});