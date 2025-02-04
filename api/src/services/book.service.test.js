const { generateManyBook } = require('../fakes/book.fake');

const BooksService = require('./books.service');

const mockGetAll = jest.fn();

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => [],
})));

describe('test for BooksService ', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('test for getBooks', () => {
    test('should return a list book', async () => {
      // arrange (preparacion)
      const fakeBooks = generateManyBook(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      // actuo ()

      const books = await service.getBooks({});
      console.log(books);

      // assert (entonces)
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
      expect(mockGetAll).toHaveBeenCalledTimes(1);
    });

    test('should return a name book', async () => {
      // arrange (preparacion)
      const fakeBooks = generateManyBook(4);
      mockGetAll.mockResolvedValue(fakeBooks);
      // actuo ()

      const books = await service.getBooks({});
      console.log(books);

      // assert (entonces)
      expect(books[0].name).toEqual(fakeBooks[0].name);
    });
  });
});
