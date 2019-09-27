

exports.handler = async (event) => {
    // TODO implement
  var AWS = require('aws-sdk');
  var workspaces = new AWS.WorkSpaces();
    


var params = {
  WorkspaceIds: [
    'ws-5n920kbkv'
  ]
};
workspaces.describeWorkspacesConnectionStatus(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
  

    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
    
    
};
