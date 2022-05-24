const request = require('supertest');
const app = require('../app');

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});

describe('Test search path', () => {
  test('It should response the GET method with a 200', async () => {
    const response = await request(app).get('/getItemByName/room');
    expect(response.statusCode).toBe(200);
  });
  test('It should response the GET method with data', async () => {
    const query = 'Kitchen';
    const response = await request(app).get(`/getItemByName/${query}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(
      expect.arrayContaining([expect.objectContaining({ name: query })]),
    );
  });

  test('It should response the GET method with empty array if query not found', async () => {
    const query = 'random string';
    const response = await request(app).get(`/getItemByName/${query}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([]);
  });
});
