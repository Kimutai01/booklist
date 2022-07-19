import { useState } from "react";
import { useDispatch } from "react-redux";
import { bookAdded } from "../redux/books/book";
const AddBookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const onTitleChange = (e) => setTitle(e.target.value);
  const onAuthorChange = (e) => setAuthor(e.target.value);
  const onSave = () => {
    if (title && author) {
      dispatch(bookAdded(title, author));
      setTitle("");
      setAuthor("");
    }
  };
  return (
    <div>
      <h2>Add a book</h2>
      <form>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={onTitleChange}
        />
        <input
          type="text"
          placeholder="author"
          value={author}
          onChange={onAuthorChange}
        />
        <button onClick={onSave} type="button">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
