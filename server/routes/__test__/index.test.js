const app = require("../../app");
const request = require('supertest');

describe('register', () => {
  it('return status code 400 if username is missing', async () => {
    const response = await request(app).post('/user/register').send({
      password: 'password'
    });

    expect(response.statusCode).toEqual(400);
  });

  it('return status code 400 if password is missing', async () => {
    const response = await request(app).post('/user/register').send({
      username: 'username'
    });

    expect(response.statusCode).toEqual(400);
  });
});
