import './AddBookForm.css';

const AddBook = () => (
  <div className="add-book">
    <h2>ADD NEW BOOK</h2>
    <div>
      <form>
        <input type="text" name="title" placeholder="Add Title" />
        <input type="text" name="author" placeholder="Add Author" />
        <input type="text" name="category" placeholder="Add Category" />
        <button type="submit">ADD BOOK </button>
      </form>
    </div>
  </div>
);

export default AddBook;
