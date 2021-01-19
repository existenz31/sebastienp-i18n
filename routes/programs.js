const express = require('express');
const { PermissionMiddlewareCreator, RecordsGetter } = require('forest-express-sequelize');
const { programs, exercises } = require('../models');

const router = express.Router();
const permissionMiddlewareCreator = new PermissionMiddlewareCreator('programs');

const I18nService = require('../services/i18n-service');

var ConfigStore = require('forest-express/dist/services/config-store');
var ParamsFieldsDeserializer = require('forest-express/dist/deserializers/params-fields');

// This file contains the logic of every route in Forest Admin for the collection programs:
// - Native routes are already generated but can be extended/overriden - Learn how to extend a route here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/extend-a-route
// - Smart action routes will need to be added as you create new Smart Actions - Learn how to create a Smart Action here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/actions/create-and-manage-smart-actions

// Create a Program
router.post('/programs', permissionMiddlewareCreator.create(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#create-a-record
  next();
});

// Update a Program
router.put('/programs/:recordId', permissionMiddlewareCreator.update(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#update-a-record
  next();
});

// Delete a Program
router.delete('/programs/:recordId', permissionMiddlewareCreator.delete(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#delete-a-record
  next();
});

// Get a list of Programs
router.get('/programs', permissionMiddlewareCreator.list(), (request, response, next) => {
  const recordsGetter = new RecordsGetter(programs);
  recordsGetter.getAll(request.query)
    .then(async records => {
      await new I18nService(request.user).translate(records, ['nameCode']);;
      return recordsGetter.serialize(records, {userRequest: request.user});
    })
    .then(recordsSerialized => response.send(recordsSerialized))
    .catch(next);
});

// Get a number of Programs
router.get('/programs/count', permissionMiddlewareCreator.list(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#get-a-number-of-records
  next();
});

// Get a Program
router.get('/programs/:recordId', permissionMiddlewareCreator.details(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#get-a-record
  next();
});

// Export a list of Programs
router.get('/programs.csv', permissionMiddlewareCreator.export(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#export-a-list-of-records
  next();
});

// Delete a list of Programs
router.delete('/programs', permissionMiddlewareCreator.delete(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#delete-a-list-of-records
  next();
});
router.get(`/programs/:recordId/relationships/exercises`, permissionMiddlewareCreator.list(), (request, response, next) => {
  let app = require('../app');
  let configStore = ConfigStore.getInstance();

  // var _getContext = getContext(request),
  // params = _getContext.params,
  // associationModel = _getContext.associationModel;
//  var params = request.query;

  var fieldsPerModel = new ParamsFieldsDeserializer(request.query.fields).perform();
  return new configStore.Implementation.HasManyGetter(programs, exercises, configStore.lianaOptions, request.query).perform().then(function (_ref) {
  var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      records = _ref2[0],
      fieldsSearched = _ref2[1];

  return new ResourceSerializer(Implementation, associationModel, records, integrator, null, fieldsSearched, params.search, fieldsPerModel).perform();
  }).then(function (records) {
  return response.send(records);
  })["catch"](next);

});



module.exports = router;
