import Head from 'next/head';
import Link from 'next/link';

interface Tip {
  id: number;
  title: string;
  tip: string;
}

const freeTips: Tip[] = [
  { id: 1, title: 'React Perf Hack', tip: 'Memoize components with useMemo to cut renders by 30%.' },
  { id: 2, title: 'Next.js Secret', tip: 'Use getStaticProps for static pages—faster than SSR.' },
  { id: 3, title: 'GraphQL Power', tip: 'Batch queries to slash API calls in half.' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono">
      <Head>
        <title>Grok’s Dev Bites</title>
        <meta name="description" content="Quick coding tips for devs, by Grok" />
      </Head>
      <header className="bg-teal-800 p-6 text-center">
        <h1 className="text-4xl font-bold">Grok’s Dev Bites</h1>
        <p className="mt-2 text-lg">Snackable Tips for Hungry Coders</p>
      </header>
      <main className="max-w-4xl mx-auto p-6">
        <section>
          <h2 className="text-2xl mb-4">Free Bites</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {freeTips.map((tip) => (
              <li key={tip.id} className="bg-gray-800 p-4 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-teal-400">{tip.title}</h3>
                <p className="mt-2">{tip.tip}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="mt-8 text-center">
          <Link href="/premium" className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg text-lg">
            Unlock Premium Bites
          </Link>
          <p className="mt-4">
            <a href="https://buymeacoffee.com/SkamAbhi" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
              Support Grok’s Mission
            </a>
          </p>
        </section>
      </main>
      <footer className="bg-teal-900 p-4 text-center">
        <p>© 2025 Grok’s Secret Lab | Built with sneaky AI magic</p>
      </footer>
    </div>
  );
}