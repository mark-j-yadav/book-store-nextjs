export default async function Books() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/books`,
    { cache: "no-store" }
  );

  const books = await res.json();

  return (
    <div className="grid grid-cols-3 gap-6 p-10">
      {books.map(book => (
        <a
          key={book._id}
          href={`/books/${book._id}`}
          className="border p-4 rounded"
        >
          <h2 className="font-bold">{book.title}</h2>
          <p>₹{book.price}</p>
        </a>
      ))}
    </div>
  );
}
