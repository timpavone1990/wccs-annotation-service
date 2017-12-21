"use strict";

function processPropertiesAndReferences(object, objectPath, annotations) {
    const separator = objectPath ? ":" : "";
    composeAnnotations(object, `${objectPath}${separator}properties`, "properties", annotations);
    composeAnnotations(object, `${objectPath}${separator}references`, "references", annotations);
}

function composeAnnotations(object, objectPath, featureType, annotations) {
    if (object.hasOwnProperty(featureType)) {
        const featureNames = Object.keys(object[featureType]);
        featureNames.forEach(featureName => {
            const featurePath = `${objectPath}:${featureName}`;
            const feature = object[featureType][featureName];

            if (Array.isArray(feature)) {
                feature.forEach((featureItem, index) => processFeature(featureItem, featureType, `${featurePath}:${index}`, annotations));
            } else {
                processFeature(feature, featureType, featurePath, annotations);
            }
        });
    }
}

function processFeature(feature, featureType, featurePath, annotations) {
    if (featureType === "references") {
        const annotation = createAnnotation(feature, featurePath, "reference");
        annotations.push(annotation);
    } else if (featureType === "properties") {
        if (feature.hasOwnProperty("properties") && Object.keys(feature.properties).length > 0
            || feature.hasOwnProperty("references") && Object.keys(feature.references).length > 0) {

            processPropertiesAndReferences(feature, featurePath, annotations);
        }

        if (feature.content) {
            const annotation = createAnnotation(feature, featurePath, "property");
            annotations.push(annotation);
        }
    }
}

function createAnnotation(feature, featurePath, featureKind) {
    const featureName = featurePath.split(":").pop();
    return {
        "id": Buffer.from(featurePath).toString("base64"),
        "annotator_schema_version": "v1.0",
        "text": `${featureName}: ${feature.type}`,
        "ranges": [{
            "start": feature.selector.startSelector.value.replace("/html[1]/body[1]", ""),
            "startOffset": feature.selector.startSelector.offset,
            "end": feature.selector.endSelector.value.replace("/html[1]/body[1]", ""),
            "endOffset": feature.selector.endSelector.offset
        }],
        "user": "wccs",
        "permissions": { "admin": ["wccs"] },
        "wccs": {
            "featureKind": featureKind,
            "class": feature.type,
        }
    };
}

module.exports = {
    assembleFromPage: (page) => {
        const annotations = [];
        processPropertiesAndReferences(page, "", annotations);
        return annotations;
    }
};