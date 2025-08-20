import Image from "next/image";

export default function Home() {
  const proxies = [
    { name: "Utopia", ip: "104.218.50.66" },
    { name: "Shadow", ip: "104.243.38.18" },
    { name: "Falcon", ip: "104.243.43.17" },
    { name: "Interstellar", ip: "66.23.193.126" },
    { name: "Froggys", ip: "152.53.81.196" },
    { name: "Vapor", ip: "199.180.255.67" },
    { name: "Lunar", ip: "66.23.198.228" },
    { name: "UniUB", ip: "104.243.42.228" },
    { name: "Bolt", ip: "104.36.85.232" },
    { name: "Szvy", ip: "152.53.38.100" },
    { name: "55gms", ip: "152.53.37.155" },
    { name: "Void", ip: "152.53.80.168" },
    { name: "Vyper", ip: "152.53.53.8" },
    { name: "Meximath", ip: "152.53.80.107" },
    { name: "Obscura", ip: "151.101.65.194" },
    { name: "Waves", ip: "172.96.142.25" },
    { name: "Ocular", ip: "172.93.100.82" },
    { name: "BordomV2", ip: "152.53.36.42" },
    { name: "VPLAZA", ip: "213.136.73.63" },
    { name: "Night", ip: "104.243.45.193" },
    { name: "Velera", ip: "152.53.83.13" },
  ];

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gray-900 text-white">
      {/* Main Content */}
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-purple-500 mb-6">
          Proxy List
        </h1>

        <div className="overflow-x-auto w-full">
          <table className="table-auto w-full border-collapse border border-purple-500">
            <thead>
              <tr className="bg-purple-700">
                <th className="border border-purple-500 px-4 py-2">Name</th>
                <th className="border border-purple-500 px-4 py-2">IP</th>
              </tr>
            </thead>
            <tbody>
              {proxies.map((p, i) => (
                <tr key={i} className="hover:bg-purple-800">
                  <td className="border border-purple-500 px-4 py-2">{p.name}</td>
                  <td className="border border-purple-500 px-4 py-2">{p.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Footer */}
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Docs
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/vercel.svg"
            alt="Vercel icon"
            width={16}
            height={16}
          />
          Vercel
        </a>
      </footer>
    </div>
  );
}
