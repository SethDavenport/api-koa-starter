import supertest from 'supertest-as-promised';
import { app } from '../../app';

const request = supertest.agent(app.listen());

describe('Health check', () => {
  describe('GET /', () => {
    it('should result in JSON success document', () => {
      return request.get('/')
        .expect(200, { ok: 'OK' });
    });
  });

  describe('GET /deep', () => {
    it('should result in JSON success document', () => {
      return request.get('/')
        .expect(200, { ok: 'OK' });
    });
  });
});
