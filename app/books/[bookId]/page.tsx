export const metadata = {
  title: 'Book Details',
};
export default function BookDetail({ params }: { params: { bookId: number } }) {
  return (
    <>
      <h2 className='text-4xl'>Book #{params.bookId}</h2>
    </>
  );
}
