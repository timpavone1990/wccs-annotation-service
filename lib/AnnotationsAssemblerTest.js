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
            while (pathElements.length > 0) {
                const pathElement = pathElements.shift();
                object = object[pathElement];
            }

            expect(annotation.type).to.eql(object.type);
            expect(annotation.ranges[0].start).to.eql(object.selector.startSelector.value);
            expect(annotation.ranges[0].startOffset).to.eql(object.selector.startSelector.offset);
            expect(annotation.ranges[0].end).to.eql(object.selector.endSelector.value);
            expect(annotation.ranges[0].endOffset).to.eql(object.selector.endSelector.offset);
        });
    });
});