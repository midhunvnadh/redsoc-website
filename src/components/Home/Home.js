export default function Home() {
  return (
    <>
      <section class="p-3 flex items-center justify-center h-screen flex-col">
        <div>
          <img src="/redsoc-logo.png" alt="logo" height="100" width="100" />
        </div>
        <div className="py-6 text-gray-700 text-xl font-bold">
          Website under construction
        </div>
        <div className="my-5 text-gray-500">
          <p className="w-96 text-justify">
            <span className="text-3xl">⚠️</span>
            <b>Beware:</b> Don't fall trap to phishing companies which would
            rhyme the same as "Redsoc" (or atleast have any 4 letters included
            consecutively in the word "Redsoc" in their names).
          </p>
          <p className="w-96 text-center text-2xl">
            <b>- Just joking 😂😂😂 -</b>
          </p>
        </div>
        <div class="mt-5">
          <a
            href="https://midhun.redsoc.in"
            class="bg-blue-600 hover:bg-blue-700 rounded-md px-3 py-4 text-white"
          >
            Check this out!
          </a>
        </div>
      </section>
    </>
  );
}
