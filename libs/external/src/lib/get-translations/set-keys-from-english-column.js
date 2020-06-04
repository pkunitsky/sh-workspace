const axios = require('axios');
const fs = require('bluebird').promisifyAll(require('fs'));
const GoogleSpreadsheet = require('google-spreadsheet');
const google = new GoogleSpreadsheet('1zLeMUFrzkdxl0iOYz9qsL1UGvBYuEbUe7G2YIdVaBuU');
const {waitFor, getKey, getColumns} = require('./utils');

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

      for (let index = 1927; index < columns[1].length; index++) {
        columns[0][index].value = getKey(columns[1][index].value);
        await columns[0][index].save();
        await waitFor(300);
      }


    });
  });
});



