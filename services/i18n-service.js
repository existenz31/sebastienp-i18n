"use strict";
const DEFAULT_LANGUAGE = 'enUs'

class I18nService {
  constructor(user) {
    this.user = user;
  } 

  translate (records, fields) {
    let languageColumn = DEFAULT_LANGUAGE; // default value
    switch(this.user.team) {
      case 'Team FR':
        languageColumn = 'frFr';
        break;
      case 'Operations':
        languageColumn = 'esEs';
        break;
    }
    for (let record of records) {
      for (let field of fields) {
        record[field].label = record[field][languageColumn];
        if (!record[field].label) {
          // Column not translated => set default language value
          record[field].label = '*** '.concat(record[field][DEFAULT_LANGUAGE]).concat(' ***');
        }

      }
    }
  }
}

module.exports = I18nService;
