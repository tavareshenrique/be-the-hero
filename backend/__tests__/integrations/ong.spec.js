const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app).post('/ongs').send({
      name: 'NEW ONG',
      email: 'contact@newong.com',
      whatsapp: '5524988174627',
      city: 'Três Rios',
      uf: 'RJ',
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
