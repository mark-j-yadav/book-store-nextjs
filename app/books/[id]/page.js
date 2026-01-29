export default async function BookDetail({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/books/${params.id}`,
    { cache: "no-store" }
  );

  const book = await res.json();

  return (
    <div className="p-10">
      <h1 className="text-3xl">{book.title}</h1>
      <p>{book.description}</p>
      <p className="font-bold">₹{book.price}</p>
    </div>
  );
}
