export const metadata = {
  title: 'Book List',
};
type Book = {
  id: number;
  title: string;
  stock: number;
};

async function getBookList() {
  const res = await fetch('http://localhost:5000/books', { cache: 'no-store' });
  return res.json();
}

export default async function BookList() {
  const books: Book[] = await getBookList();

  return (
    <div className='p-10 bg-indigo-200 text-indigo-900'>
      <table className='table w-full'>
        <thead className='text-lg'>
          <tr>
            <td>No</td>
            <td>Id</td>
            <td>Book Title</td>
            <td>Stock</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody className='text-lg'>
          {books.map((book, index) => (
            <tr key={book.id}>
              <td>{index + 1}</td>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.stock}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
