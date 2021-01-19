"use strict";
const { translates } = require('../models');

const DEFAULT_LANGUAGE = 'enUs'

class I18nService {
  constructor(user) {
    this.user = user;
  } 

  async translateField (fieldCode) {
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
     let translate = await translates.findByPk(fieldCode);
     let label = translate[languageColumn];
     if (!label) {
       // Column not translated => set default language value
       label = '*** '.concat(recordField[DEFAULT_LANGUAGE]).concat(' ***');
     }
     return label;

  }    

  async translate (records, fields) {
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
    for (let record of records) {
      for (let field of fields) {
        let recordField;
        let tmp = field.split('.');
        if (tmp.length == 2) {
          recordField = record[tmp[0]][tmp[1]];
        }
        else {
          recordField = record[field];
        }
        if(!recordField) {
          let fieldIdKey;
          if (tmp.length == 2) {
            fieldIdKey = record[tmp[0]][tmp[1] + 'Key'];
            recordField = record[tmp[0]][tmp[1]] = await translates.findByPk(fieldIdKey);
            
          }
          else {
            fieldIdKey = record[field + 'Key'];            
            recordField = record[field] = await translates.findByPk(fieldIdKey);
          }
        };
        recordField.label = recordField[languageColumn];
        if (!recordField.label) {
          // Column not translated => set default language value
          recordField.label = '*** '.concat(recordField[DEFAULT_LANGUAGE]).concat(' ***');
        }

      }
    }
  }
}

module.exports = I18nService;
