const request = require('supertest');
const createApp = require('../src/app');
const { config } = require('../src/config');
const { MongoClient } = require('mongodb')

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('test for books', () => {
  let app = null;
  let server = null;
  let database = null;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME)
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET]/ /api/v1/books', () => {
    test('should return list book', () => {
      // arrange (preparacion)
      console.log('');
      // actuo ()
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          expect(body.length).toEqual(2);
        });
    });
  });
});
