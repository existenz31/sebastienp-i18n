"use strict";
const { translates } = require('../models');

const DEFAULT_LANGUAGE = 'enUs'


class I18nService {
  constructor(user) {
    this.user = user;
  } 

  async translate (record, field) {
    let languageColumn = DEFAULT_LANGUAGE; // default value
    switch(this.user.team) {
      case 'Team FR':
        languageColumn = 'frFr';
        break;
      case 'Team ES':
        languageColumn = 'esEs';
        break;
      case 'Team EN':
        languageColumn = 'enUs';
        break;
    }
    const fieldIdKey = record[field];   
    let result =  await translates.findByPk(fieldIdKey);
    let label = result[languageColumn];
    if (!label) {
      // Column not translated => set default language value
      label = '*** '.concat(result[DEFAULT_LANGUAGE]).concat(' ***');
    }
    return label;
  }
}

module.exports = I18nService;
