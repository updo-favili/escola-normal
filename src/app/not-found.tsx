import Link from 'next/link';

const page = () => {
  return (
    <main className="bg-grid-paper flex min-h-screen items-center justify-center px-5 py-20">
      <div className="text-center">
        <h1 className="font-display text-primary-500 text-[96px] leading-none font-bold md:text-[140px]">404</h1>
        <p className="text-secondary mt-4 mb-8 text-lg">Ops! Esta página não existe.</p>
        <Link
          href="/"
          className="bg-primary-500 hover:bg-secondary inline-block rounded-full px-9 py-4 text-lg font-semibold text-white transition-colors duration-300">
          Voltar para o início
        </Link>
      </div>
    </main>
  );
};

export default page;
