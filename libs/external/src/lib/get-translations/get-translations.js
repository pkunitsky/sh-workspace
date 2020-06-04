// fill the translations here
// https://docs.google.com/spreadsheets/d/1zLeMUFrzkdxl0iOYz9qsL1UGvBYuEbUe7G2YIdVaBuU/edit#gid=0

const axios = require('axios');
const fs = require('bluebird').promisifyAll(require('fs'));
const GoogleSpreadsheet = require('google-spreadsheet');
const google = new GoogleSpreadsheet('1zLeMUFrzkdxl0iOYz9qsL1UGvBYuEbUe7G2YIdVaBuU');
const {getColumns} = require('./get-translations.utils');

let spreadsheet;

google.useServiceAccountAuth(require('./origami2019-6f655e115594'), () => {
  google.getInfo((error, info) => {
    spreadsheet = info.worksheets[0];
    spreadsheet.getCells({
      'min-row': 1,
      'max-row': spreadsheet.rowCount,
      'return-empty': true
    }, async (error, cells) => {
      const columns = getColumns(cells, spreadsheet.colCount);


      for (let columnIndex = 1; columnIndex < columns.length; columnIndex++) {

        const translations = {};
        for (let cellIndex = 1; cellIndex < columns[columnIndex].length; cellIndex++) {
          if (columns[0][cellIndex].value !== '') {
            translations[columns[0][cellIndex].value] = columns[columnIndex][cellIndex].value;
          }
        }

        try {
          await fs.mkdirAsync('./assets/translations', {recursive: true});
          await fs.writeFileAsync(`./assets/translations/${columns[columnIndex][0].value}.json`, JSON.stringify(translations, null, 2));
        } catch (error) {
          console.log(error.toString());
        }
      }


    });
  });
});
