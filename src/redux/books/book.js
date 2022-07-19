import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Book 1", author: "Author 1" },
  { id: 2, title: "Book 2", author: "Author 2" },
];

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    bookAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, author) {
        return {
          payload: {
            id: nanoid(),
            title,
            author,
          },
        };
      },
    },
  },
});
export const { bookAdded } = booksSlice.actions;
export const selectAllBooks = (state) => state.books;

export default booksSlice.reducer;
