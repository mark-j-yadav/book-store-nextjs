import Link from "next/link";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">BookStore</h1>
      <Link href="/books" className="text-blue-500">
        View Books →
      </Link>
    </main>
  );
}
