const apis = require('./apis')

test('GET THE DEFAULT CITY', async () => {
  const defaultCity = await (await apis.getDefaultCity()).json();
  expect(defaultCity.status).toEqual(true);
  expect(defaultCity.data.name).toEqual('Mumbai');

  const city = await (await apis.getCity()).json();
  expect(city.data.name).toEqual('Delhi');
  expect(city.status).toEqual(true);
});

test('GET AND ADD THE PARTICULAR ', async () => {
  const city = await (await apis.getCity()).json();
  expect(city.data.name).toEqual('Delhi');
  expect(city.status).toEqual(true);
});