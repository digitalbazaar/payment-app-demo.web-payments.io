/*
 * Payment App services.
 *
 * Copyright (c) 2016 Digital Bazaar, Inc. All rights reserved.
 */
var bedrock = require('bedrock');
var config = bedrock.config;
var crypto = require('crypto');

bedrock.events.on('bedrock-express.configure.routes', function(app) {

  // payment apps endpoint
  app.get('/apps',
    function(req, res, next) {

      // create the payment request
      var appId = crypto.randomBytes(4).toString('hex');
      var paymentRequestService =
        config.server.baseUri + '/apps/' + appId;
      var paymentApp = {
        type: 'PaymentApp',
        paymentMethod: 'VisaLegacy',
        label: 'ExampleBank Visa Card',
        paymentRequestService: paymentRequestService
      };

      res.status(200);
      res.json(paymentApp);
      return;
  });

});
