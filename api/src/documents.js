"use strict";
exports.__esModule = true;
exports.DocumentRoute = void 0;
var documentsController = require("../controllers/documents");
var auth0_1 = require("../utilities/auth0");
var multer = require("multer");
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });
// Export a class that has a property for request handlers. 
var DocumentRoute = /** @class */ (function () {
    function DocumentRoute() {
    }
    DocumentRoute.prototype.routes = function (app) {
        // Here the request is a GET request, but can be expanded to include other request types.
        app.route('/v1/documents').post(documentsController.postDocuments);
        app.route('/v1/documents').get(documentsController.getDocuments);
        app.route('/v1/documents/:id').patch(auth0_1.authMiddleware, documentsController.updateDocuments);
        app.route('/v1/documents/:id')["delete"](auth0_1.authMiddleware, documentsController.deleteDocuments);
        app.route('/v1/documents/:id/status').get(auth0_1.authMiddleware, documentsController.getDocumentStatus);
        app.route('/v1/documents/url').post(documentsController.postUrl);
        app.route('/v1/documents/storage').post(upload.single('file'), documentsController.postFile);
        app.route('/v1/documents/knowledgebase').post(documentsController.addFileToKB);
        app.route('/v1/documents/qnas').get(documentsController.getQnas);
    };
    return DocumentRoute;
}());
exports.DocumentRoute = DocumentRoute;
