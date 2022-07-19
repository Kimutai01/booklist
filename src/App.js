import "./App.css";
import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";

function App() {
  return (
    <div className="App">
      <BookList />
      <AddBookForm />
    </div>
  );
}

export default App;
