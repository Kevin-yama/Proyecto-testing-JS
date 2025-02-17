const MongoLib = require('../lib/mongo.lib');

class BooksService {
  constructor() {
    this.collection = 'books';
    // aqui tenemos una dependencia con mongo
    this.mongoDB = new MongoLib();
  }

  getBooks(query) {
    return this.mongoDB.getAll(this.collection, query);
  }

  createBook(newBook) {
    return this.mongoDB.create(this.collection, newBook);
  }
}

module.exports = BooksService;
