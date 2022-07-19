import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../redux/books/book";
export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});
