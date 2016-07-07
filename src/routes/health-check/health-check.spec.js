import supertest from 'supertest-as-promised';
import { app } from '../../app';

const request = supertest.agent(app.listen());

describe('Health check', () => {
  describe('GET /health/shallow', () => {
    it('should result in JSON success document', () => {
      return request.get('/health/shallow')
        .expect(200, { ok: 'OK' });
    });
  });

  describe('GET /health/deep', () => {
    it('should result in JSON success document', () => {
      return request.get('/health/deep')
        .expect(200, { ok: 'OK' });
    });
  });
});
