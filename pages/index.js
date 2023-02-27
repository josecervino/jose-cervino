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
            <h2>Private Equity, Business & Tech Consultations</h2>
          </div>
        </div>
        <div className="mt-[8%] w-[500px] px-[50px] py-[20px] flex-col justify-center border rounded-lg border-gray-400">
          <h3 className="font-semibold mb-[10px]">
            Half-Day Consults Available:
          </h3>
          <ul>
            <li>- Business Operator to Owner</li>
            <li>- M&A Strategic Plan</li>
            <li>- Exit for Maximum Value</li>
            <li>- Growth</li>
            <li>- Grow Profit</li>
            <li>- Grow Sales</li>
            <li>- Business Structure</li>
            <li>- Business Model</li>
            <li>- Customer Experience</li>
            <li className="text-gray-400">- (Coming Soon) Digital Strategy, CTO Consultation</li>
            <li className="text-gray-400">- (Coming Soon) SMB AI Strategy, CTO Consultation</li>
          </ul>
        </div>
        <div className="mt-[8%] w-[500px] px-[50px] py-[20px] flex-col justify-center border rounded-lg border-gray-400">
          <h3 className="font-semibold mb-[10px]">
            Acquisition Criteria:
          </h3>
          <ul>
            <li>- $350k-$2M ARR, maximum $8M ARR</li>
            <li>- 15% profit</li>
            <li>- 5+ years in operation</li>
            <li>- 5+ employees</li>
            <li>- Business Type #1: Digital Business, online coaching & consulting</li>
            <li>- Business Type #2: Retiring owner</li>
          </ul>
        </div>
        <a className="mt-[30%] hover:text-slate-500 underline" href="mailto:contact@josecervino.com">Contact the Founder</a>
      </main>

      <footer className="w-full h-[100px] border-t-2 border-[#eaeaea] flex justify-center items-center">
        All rights reserved.
      </footer>
    </div>
  )
}
