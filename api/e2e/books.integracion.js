const mockGetAll = jest.fn();
require('express');
const request = require('supertest');

const createApp = require('../src/app');
const { generateManyBook } = require('../src/fakes/book.fake');

jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => [],
})));

describe('test for books', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET]/ /api/v1/books', () => {
    test('should return list book', () => {
      // arrange (preparacion)
      const fakeBooks = generateManyBook(3);
      mockGetAll.mockResolvedValue(fakeBooks);
      // actuo ()
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          expect(body.length).toEqual(fakeBooks.length);
        });
    });
  });
});
