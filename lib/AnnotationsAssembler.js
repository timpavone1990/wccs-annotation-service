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
        const annotation = createAnnotation(feature, featurePath);
        annotations.push(annotation);
    } else if (featureType === "properties") {
        if (feature.hasOwnProperty("properties") && Object.keys(feature.properties).length > 0) {
            processPropertiesAndReferences(feature, featurePath, annotations);
        } else {
            // TODO Properties can have no content but e.g. only references. Should we create an annotation for those properties?
            const annotation = createAnnotation(feature, featurePath);
            annotations.push(annotation);
        }

        if (feature.hasOwnProperty("references") && Object.keys(feature.references).length > 0) {
            processPropertiesAndReferences(feature, featurePath, annotations);
        }
    }
}

function createAnnotation(feature, featurePath) {
    return {
        "id": Buffer.from(featurePath).toString("base64"),
        "path": featurePath,
        "annotator_schema_version": "v1.0",
        "type": feature.type,
        "ranges": [{
            "start": feature.selector.startSelector.value,
            "startOffset": feature.selector.startSelector.offset,
            "end": feature.selector.endSelector.value,
            "endOffset": feature.selector.endSelector.offset
        }]
    };
}

module.exports = {
    assembleFromPage: (page) => {
        const annotations = [];
        processPropertiesAndReferences(page, "", annotations);
        return annotations;
    }
};