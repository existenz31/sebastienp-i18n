const { collection } = require('forest-express-sequelize');

const I18nService = require('../services/i18n-service');

collection('programs', {
  actions: [{
    name: 'Test',
    type: 'single',
    endpoint: '/forest/actions/test/:appCommoId',
    fields: [
      {
        field: 'A field',
        type: 'String',
        isRequired: true
      }
    ],
    hooks: {
      load: ({ fields, record }) => {
        return fields;
      },
      change: {
      },
    },     
  }],
  fields: [{
    field: 'label',
    type: 'String',
    get: (program, userRequest) => {
      return new I18nService(userRequest).translate(program, 'nameCode');
//      return program.nameCode?program.nameCode.label:null;
    }
  }],
  segments: [],
});
