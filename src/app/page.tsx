import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-4xl text-center py-20">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-slate-100">
          Spurly
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 mb-10">
          spurly helps you find your own words, just faster. spurly is a contextually informed AI messaging assistant, primarily designed to suggest messages for text conversations. Here, "contextually informed" includes a wide range of information. Examples include:
          <ul>
            <li>a screenshot of a conversation (spurly can suggest responses)</li>
            <li>profile pics (spurly can infer personality traits to customize responses)</li>
            <li>profile bio (spurly can incorporate relevant info in suggested responses)</li>
            <li>info about you (spurly can personalize suggest responses to you)</li>
          </ul>
        </p>
        <div className="mb-10">
          <Image
            src="/spurlyMainView.png"
            alt="App screenshot"
            width={800}
            height={450}
            className="rounded-xl border border-slate-700 shadow-md"
          />
        </div>
        <a
          href="https://testflight.apple.com/join/1ZkXa9s6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-lg transition"
        >
          Join the TestFlight Beta
        </a>
      </div>
      <footer className="text-sm text-slate-500 pt-10">
        &copy; {new Date().getFullYear()} phaethon order llc. all rights reserved.
      </footer>
    </main>
  );
}
