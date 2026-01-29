export default async function CartPage() {
  const userId = "demo-user-id";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/${userId}`,
    { cache: "no-store" }
  );

  const cart = await res.json();

  return (
    <div className="p-10">
      <h1 className="text-2xl mb-4">Your Cart</h1>
      {cart?.items?.map(i => (
        <div key={i._id} className="border p-3 mb-2">
          <h2>{i.bookId.title}</h2>
          <p>Qty: {i.qty}</p>
        </div>
      ))}
    </div>
  );
}
