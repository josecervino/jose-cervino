import Head from 'next/head'

export default function Home() {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <Head>
        <title>Jose Cervino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <>
          <h1 className="text-3xl pb-2">José Cerviño IV</h1>
          <h2>Fractional CTO, SMB Investor & CEO</h2>
        </>
        <a className="mt-[30%] hover:text-slate-500 underline" href="mailto:contact@josecervino.com">Schedule an AI & Tech consult</a>
      </main>

      <footer className="w-full h-[100px] border-t-2 border-[#eaeaea] flex justify-center items-center">
        All rights reserved.
      </footer>
    </div>
  )
}
