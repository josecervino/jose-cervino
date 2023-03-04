import Head from 'next/head'

export default function Home() {
  const Header = (
    <div className="flex flex-col justify-center border-b-2 border-gray-800 pb-[3%] mb-[4%]">
      <h1 className="text-center text-4xl pb-2">José Cerviño IV</h1>
      <h2 className="text-center pb-2">Growth & Sales Consultant, Entrepreneur, Fractional CTO</h2>
      <div className="flex flex-row justify-center items-center gap-x-4">
        <a className="text-center hover:text-slate-500 underline" href="mailto:contact@josecervino.com">Contact</a>
        <a className="text-center hover:text-slate-500 underline" href="https://www.linkedin.com/in/jose-cervino/">LinkedIn</a>
      </div>
    </div>
  );

  const CE = (
    <div className="flex-col">
      <div className="flex-col">
        <div className="flex flex-row">
          <div>
            <img src="/ce-logo.png" alt="Cervino Enterprises Logo" className="w-[80px] h-[80px] mr-[15px] rounded-sm"/>
          </div>
          <div>
            <h1>
              <a className="text-3xl pb-2 hover:text-slate-500 hover:underline" href="https://cervinoenterprises.com/">Cervino Enterprises</a>
            </h1>
            <h2>Private Equity, Business & Tech Consultations</h2>
            <h2 className="text-sm text-gray-400">Founder & CEO</h2>
          </div>
        </div>
        <div className="mt-[8%] w-[500px] px-[50px] py-[20px] flex-col justify-center border rounded-lg border-gray-400">
          <h3 className="font-semibold mb-[10px]">
            Half-Day Consults Available:
          </h3>
          <ul className="mb-3">
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
          <a className="text-center hover:text-slate-500 underline" href="mailto:jose@cervinoenterprises.com">&gt; Contact for a potential half-day consult</a>
        </div>
        <div className="mt-[8%] w-[500px] px-[50px] py-[20px] flex-col justify-center border rounded-lg border-gray-400">
          <h3 className="font-semibold mb-[10px]">
            Acquisition Criteria:
          </h3>
          <ul className="mb-3">
            <li>- $350k-$2M ARR, maximum $8M ARR</li>
            <li>- 15% profit</li>
            <li>- 5+ years in operation</li>
            <li>- 5+ employees</li>
            <li>- Business Type #1: Digital Business, online coaching & consulting</li>
            <li>- Business Type #2: Retiring owner</li>
          </ul>
          <a className="text-center hover:text-slate-500 underline" href="mailto:jose@cervinoenterprises.com">&gt; Contact for a potential acquisition</a>
        </div>
    </div>
    </div>
  );

  const TES = (
    <div className="flex-col">
      <div className="flex-col">
        <div className="flex flex-row">
          <div>
            <img src="/tes-logo.png" alt="The Extension School Logo" className="w-[80px] h-[80px] mr-[15px] rounded-sm"/>
          </div>
          <div>
            <h1>
              <a className="text-3xl pb-2 hover:text-slate-500 hover:underline" href="https://theextensionschool.com/">The Extension School</a>
            </h1>
            <h2>Pro-Bono Career Coaching</h2>
            <h2 className="text-sm text-gray-400">CEO, Technical Instructor</h2>
          </div>
        </div>
      </div>
      <div className="mt-[8%] w-[500px] px-[50px] py-[20px] flex-col justify-center border rounded-lg border-gray-400">
        <h3 className="font-semibold mb-[10px]">
          Under Development:
        </h3>
        <ul className="mb-3">
          <li>- AI-Assisted Learning</li>
          <li>- Future-proof extended curriculum</li>
          <li>- Results-First Reverse Engineered Incentive Strategy</li>
          <li>- Aggregate Incremental Improvements System</li>
          <li>- & more</li>
        </ul>
        <a className="text-center hover:text-slate-500 underline" href="mailto:jose@theextensionschool.com">&gt; Contact to become a Software Engineer</a>
      </div>
    </div>
  );

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <Head>
        <title>Jose Cervino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="w-full m-4">
          {Header}
          <div className="w-[80vw] flex flex-row justify-center flex-nowrap gap-x-4">
            {CE}
            {TES}
          </div>
        </div>
      </main>

      <footer className="w-full h-[100px] border-t-2 border-[#eaeaea] flex justify-center items-center">
        All rights reserved.
      </footer>
    </div>
  )
}
