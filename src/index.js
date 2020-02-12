const request = require('request-promise');

module.exports.getExchangeRate = () => request({
  url: `https://api.exchangerate-api.com/v4/latest/${process.env.CURRENCY}`,
  json: true
});

module.exports.getChurchHoliday = () => request({
  url: `http://calapi.inadiutorium.cz/api/v0/en/calendars/default/${
    new Date().toISOString().split('T')[0].replace(/-/g, '/')
  }`,
  json: true
});
