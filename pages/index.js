import Head from 'next/head';
import Image from 'next/image';


export default function Home() {
  return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>EssentailERP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to EssentailERP
        </h1>

        <p className="mt-3 text-2xl">
          The all-in-one solution for managing your business
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <div className="p-6 mt-6 text-left border w-96 rounded-xl hover:shadow-xl">
            <Image
              src="/finance.svg"
              alt="finance"
              width={120}
              height={120}
            />
            <h3 className="mt-2 text-2xl font-bold">Finance Management</h3>
            <p className="mt-2 text-xl">
              Keep track of your finances with ease and precision.
            </p>
          </div>

          <div className="p-6 mt-6 text-left border w-96 rounded-xl hover:shadow-xl">
            <Image
              src="/inventory.svg"
              alt="inventory"
              width={120}
              height={120}
            />
            <h3 className="mt-2 text-2xl font-bold">Inventory Management</h3>
            <p className="mt-2 text-xl">
              Manage your inventory and supply chain like a pro.
            </p>
          </div>

          <div className="p-6 mt-6 text-left border w-96 rounded-xl hover:shadow-xl">
            <Image
              src="/crm.svg"
              alt="crm"
              width={120}
              height={120}
            />
            <h3 className="mt-2 text-2xl font-bold">Customer Relationship Management</h3>
            <p className="mt-2 text-xl">
              Build strong relationships with your customers and boost sales.
            </p>
          </div>

          <div className="p-6 mt-6 text-left border w-96 rounded-xl hover:shadow-xl">
            <Image
              src="/hr.svg"
              alt="hr"
              width={120}
              height={120}
            />
            <h3 className="mt-2 text-2xl font-bold">HR Management</h3>
            <p className="mt-2 text-xl">
              Streamline your HR processes and maximize employee productivity.
            </p>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="h-4 ml-2">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
