
var DocuSign = require('docusign-api');
var config = {
  email: 'laxmi.vaddipati@valuelabs.com',
  password: 'Latu@123',
  integratorKey: 'INTE-f9ec417d-1ab8-4b4d-a6d8-9d5bbc25505d'
};

// Then we instantiate a client with DocuSign auth tokens

var docuSign = new DocuSign(config);
 
var envelopeId = '214f7ec1-bc67-4d80-aa1d-d98fa5a72f55';
 
var recipientRequest = {
  returnUrl: 'http://www.docusign.com/devcenter',
  authenticationMethod: 'email',
  userName: 'Laxmi',
  email: 'maheshmeka16@gmail.com',
  clientUserId: '12345'  
};

docuSign
  .getRecipientView(envelopeId, recipientRequest)
  .then(function(response){ console.log(response);
    console.log('Embedded signing workflow Url', response.url);
  }) .catch(function(err){
        //catch error
        console.log(err);
    });