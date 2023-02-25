import Head from 'next/head'

export default function Home() {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <Head>
        <title>Jose Cervino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex flex-row">
          <div>
            <img src="/logo.png" alt="Cervino Enterprises Logo" className="w-[80px] h-[80px] mr-[15px] rounded-sm"/>
          </div>
          <div>
            <h1 className="text-3xl pb-2">Cervino Enterprises</h1>
            <h2>Business & Tech Consultations + Private Equity</h2>
          </div>
        </div>
        <div className="mt-[8%] px-[50px] py-[20px] flex-col justify-center border rounded-lg border-gray-400">
          <h3 className="font-semibold mb-[10px]">
            Half-Day Consults Available:
          </h3>
          <ul>
            <li>- Business Operator to Owner</li>
            <li>- M&A Strategic Plan</li>
            <li className="text-gray-400">- (Coming Soon) Start & Manage a Sales & Development Team</li>
            <li className="text-gray-400">- (Coming Soon) Exit for Maximum Value</li>
            <li className="text-gray-400">- (Coming Soon) Grow Profit</li>
            <li className="text-gray-400">- (Coming Soon) Grow Sales</li>
            <li className="text-gray-400">- (Coming Soon) Business Structure</li>
            <li className="text-gray-400">- (Coming Soon) Business Model</li>
            <li className="text-gray-400">- (Coming Soon) Customer Experience</li>
            <li className="text-gray-400">- (Coming Soon) AI Strategy</li>
          </ul>
        </div>
        <a className="mt-[30%] hover:text-slate-500 underline" href="mailto:contact@josecervino.com">Schedule a consult</a>
      </main>

      <footer className="w-full h-[100px] border-t-2 border-[#eaeaea] flex justify-center items-center">
        All rights reserved.
      </footer>
    </div>
  )
}
