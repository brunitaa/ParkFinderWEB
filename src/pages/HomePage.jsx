import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section
      className="bg-red-900 flex justify-center items-center  h-screen"
      style={{
        backgroundImage: "url('/banner.png')",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div style={{ opacity: 0.8 }}>
        <header className="bg-zinc-800 p-10">
          <h1 className="text-5xl py-2 font-bold">PARK FINDER</h1>
          <p className="text-md text-slate-400"></p>

          <Link
            className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
            to="/login"
          >
            Get Started
          </Link>
        </header>
      </div>
    </section>
  );
}

export default HomePage;
