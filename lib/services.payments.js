/*
 * Payment services.
 *
 * Copyright (c) 2016 Digital Bazaar, Inc. All rights reserved.
 */
var bedrock = require('bedrock');
var cors = require('cors');

var corsOptions = {
  exposedHeaders: ['Date', 'Location', 'Content-Length']
};

bedrock.events.on('bedrock-express.configure.routes', function(app) {

  // payment response endpoint
  app.options('/apps/:appId', cors(corsOptions));
  app.post('/apps/:appId', cors(corsOptions),
    function(req, res, next) {
      res.status(200);
      res.json({
        type: 'PaymentResponse',
        description: 'Payment for Dr. Strangelove',
        selectedScheme: {
          type: 'VisaLegacy',
          cardholderName: 'J. DOE',
          cardNumber: '4111111111111111',
          expiryMonth: '01',
          expiryYear: '2018',
          cardSecurityCode: '123',
          billingAddress: {
            type: 'PostalAddress',
            addressLocality: 'Mexico Beach',
            addressRegion: 'FL',
            streetAddress: '3102 Highway 98'
          }
        }
      });
      res.end();
      return;
  });

});
