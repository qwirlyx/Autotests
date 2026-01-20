const axios = require('axios');

describe('Yandex Taxi Fare API', () => {

  test('should return price and currency fields', async () => {
    const response = await axios.post('https://api.yandextaxi.example/v1/fare', {
      from: { lat: 55.751244, lon: 37.618423 },
      to: { lat: 55.761244, lon: 37.628423 }
    });

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('price');
    expect(response.data).toHaveProperty('currency', 'RUB');
    expect(typeof response.data.price).toBe('number');
  });

});
