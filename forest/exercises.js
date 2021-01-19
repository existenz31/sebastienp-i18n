const { collection } = require('forest-express-sequelize');

const I18nService = require('../services/i18n-service');

collection('exercises', {
  actions: [],
  fields: [{
    field: 'label',
    type: 'String',
    get: (exercise, userRequest) => {
      return new I18nService(userRequest).translate(exercise, 'nameCode');
//      return program.nameCode?program.nameCode.label:null;
    }
  }],
  segments: [],
});
