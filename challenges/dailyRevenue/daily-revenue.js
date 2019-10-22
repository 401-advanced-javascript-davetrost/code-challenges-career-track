const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function revenue(transactions) {

  return transactions.reduce((revenueObj, transaction) => {
    const newDate = new Date(transaction.timestamp);
    const dateString = `${days[newDate.getUTCDay()]} ${months[newDate.getUTCMonth()]} ${('0' + newDate.getUTCDate()).slice(-2)} ${newDate.getUTCFullYear()}`;
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