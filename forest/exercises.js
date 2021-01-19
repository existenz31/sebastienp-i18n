const { collection } = require('forest-express-sequelize');

const I18nService = require('../services/i18n-service');

collection('exercises', {
  actions: [],
  fields: [{
    field: 'label',
    type: 'String',
    get: (record, userRequest)  => {
      return new I18nService(userRequest).translateField(record.nameCodeKey);
    },
  }],
  segments: [],
});
