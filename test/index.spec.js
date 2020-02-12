const expect = require('chai').expect;
const { describe } = require('node-tdd');
const { getExchangeRate, getChurchHoliday } = require('../src/index');

describe('Showcasing node-tdd', {
  useNock: true,
  timestamp: 1581485903,
  cryptoSeed: '0ae8cd8e-84e3-483b-a64a-d169980b4e4a'
}, () => {
  it('External exchange rate', async () => {
    const r = await getExchangeRate();
    expect(r).to.deep.contain({ base: 'USD' });
  });

  it('Get Church Holiday', async () => {
    const r = await getChurchHoliday();
    expect(r).to.deep.contain({ date: '2020-02-12' });
  });
});
