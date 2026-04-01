import request from 'supertest';
import app from '../src/app';

describe('Program API', () => {
  it('returns program list', async () => {
    const response = await request(app).get('/api/programs');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
