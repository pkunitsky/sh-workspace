module.exports = {
  getKey(str) {
    str = str.toLowerCase();
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
      return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '').replace(/[^\w\s]/gi, '');
  },

  getColumns(cells, colCount) {
    const columns = [];

    for (let i = 0; i < colCount; i++) {
      columns.push([]);
    }
    cells.forEach((cell, index) => {
      const columnNumber = ((index + 1) % colCount === 0) ? colCount
        : (index + 1) % colCount;
      columns[columnNumber - 1].push(cell);
    });

    return columns;
  },

  waitFor(time) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve();
      }, time);
    });
  }
};
