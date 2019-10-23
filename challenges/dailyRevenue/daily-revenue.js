const moment = require('moment');

function revenue(transactions) {
  return transactions.reduce((revenueObj, transaction) => {
    const dateString = moment.utc(transaction.timestamp).format('ddd MMM DD YYYY');
    if(revenueObj[dateString]) {
      revenueObj[dateString] += transaction.price;
    }
    else {
      revenueObj[dateString] = transaction.price;
    }
    return revenueObj;

  }, {});
}

module.exports = { revenue };