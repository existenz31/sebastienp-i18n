"use strict";
const { translates } = require('../models');

const DEFAULT_LANGUAGE = 'enUs'

class I18nService {
  constructor(user) {
    this.user = user;
  } 

  async translateField (fieldCode) {
    let languageColumn = DEFAULT_LANGUAGE; // default value
    if (!this.user) return null;
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
     let translate = await translates.findByPk(fieldCode);
     let label = translate[languageColumn];
     if (!label) {
       // Column not translated => set default language value
       label = '*** '.concat(recordField[DEFAULT_LANGUAGE]).concat(' ***');
     }
     return label;

  }
  
}

module.exports = I18nService;
