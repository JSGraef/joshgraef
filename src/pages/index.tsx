import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Josh Graef</title>
        <meta name="description" content="Personal website of Josh Graef" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="h-screen flex overflow-hidden bg-gray-200">
          {/* Static sidebar for desktop */}

          <div className="flex flex-col min-w-0 flex-1 overflow-hidden">

            <div className="flex-1 relative z-0 flex overflow-hidden">
              <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
                {/* Start main area*/}
                <div className="absolute inset-0 p-5">
                  <div className="h-full b bg-gray-800 rounded-sm" >
                    <h1 className="text-white">Josh Graef</h1>
                  </div>
                </div>
                {/* End main area */}
              </main>
            </div>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
