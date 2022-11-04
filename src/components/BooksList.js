import BookItem from './BookData';

const BooksList = () => {
  const books = [
    {
      Id: 1,
      Title: 'A good Book',
      Author: 'Mudasir',
      Category: 'Social',
    },
  ];
  return (
    <>
      <div className="book-list">
        <ul>
          {books.map((book) => (
            <BookItem
              Title={book.Title}
              Author={book.Author}
              Category={book.Category}
              key={book.Id}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default BooksList;
