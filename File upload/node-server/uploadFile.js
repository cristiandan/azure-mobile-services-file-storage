exports.post = function(request, response) {
    // Use "request.service" to access features of your mobile service, e.g.:
    //   var tables = request.service.tables;
    //   var push = request.service.push;
    
    var azure = require('azure-storage');
    
    var blobService = azure.createBlobService();
 
    var startDate = new Date();
    var expiryDate = new Date(startDate);
    expiryDate.setMinutes(startDate.getMinutes() + 100);
    startDate.setMinutes(startDate.getMinutes() - 100);
     
    var sharedAccessPolicy = {
      AccessPolicy: {
        Permissions: azure.BlobUtilities.SharedAccessPermissions.WRITE,
        Start: startDate,
        Expiry: expiryDate
      },
    };
    
    //console.log(request.body.location, request.body.filename);
    //request.body.location is the container name (must be created!)
    //request.body.filename is the blob name 
    //you can change these, or let the client send them to you 
     
    var token = blobService.generateSharedAccessSignature(request.body.location, request.body.filename, sharedAccessPolicy);
    var sasUrl = blobService.getUrl(request.body.location, request.body.filename, token);

    response.send(statusCodes.OK, { message : 'Ok!', token: token, sasUrl:sasUrl });
    //token is the token the user has to use to start upload to azure blob storage
};

exports.get = function(request, response) {
    response.send(statusCodes.OK, { message : 'Hello World!' });
};