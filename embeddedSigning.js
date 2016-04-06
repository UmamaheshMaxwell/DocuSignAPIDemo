
var DocuSign = require('docusign-api');
var config = {
  email: 'laxmi.vaddipati@valuelabs.com',
  password: 'Latu@123',
  integratorKey: 'INTE-f9ec417d-1ab8-4b4d-a6d8-9d5bbc25505d'
};

// Then we instantiate a client with DocuSign auth tokens

var docuSign = new DocuSign(config);

var envelopeRequest = {
  emailSubject: 'API Call that uses a Template',
  templateId: '4318a47e-7e49-40aa-81a4-e3c3087be978',
  templateRoles: [{
    roleName: 'EE', 
    name: 'Laxmi',
    email: 'maheshmeka16@gmail.com',
    clientUserId: '12345',
     "textCustomFields": [{
    "name":"primary|nameFirst",  
    "value":"Tulasi"
  },
  {
    "name":"primay|nameLast",    
    "value":"Datti"
  }]

  }],
  transformPdfFields: true,
  status: 'sent'
};

docuSign
  .requestSignature(envelopeRequest)
  .then(function(envelopeId){
    console.log('Envelope ID', envelopeId);
  });