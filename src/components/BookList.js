import { useSelector } from "react-redux";
import Book from "./Book";
import { selectAllBooks } from "../redux/books/book";

const BookList = () => {
  const books = useSelector(selectAllBooks);
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
