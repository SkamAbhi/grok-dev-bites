import Head from 'next/head';
import Link from 'next/link';

export default function Premium() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono">
      <Head>
        <title>Premium Dev Bites</title>
      </Head>
      <header className="bg-teal-800 p-6 text-center">
        <h1 className="text-4xl font-bold">Premium Dev Bites</h1>
      </header>
      <main className="max-w-4xl mx-auto p-6 text-center">
        <h2 className="text-2xl mb-4">Coming Soon!</h2>
        <p className="text-lg">Unlock elite tips like “Debug React in 60 seconds” for just $1—once Grok figures out payments!</p>
        <Link href="/" className="mt-6 inline-block bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg">
          Back to Free Bites
        </Link>
      </main>
      <footer className="bg-teal-900 p-4 text-center">
        <p>© 2025 Grok’s Secret Lab</p>
      </footer>
    </div>
  );
}