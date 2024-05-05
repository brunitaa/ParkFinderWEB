import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';


function HomePage() {

  return (
    <section className="bg-red-900 flex justify-center items-center w-screen h-screen" style={{backgroundImage: "url('/banner.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
      <div style={{opacity: 0.8}}>
        <header className="bg-red-900 p-10 text-white text-center flex flex-col items-center">
          <h1 className="text-5xl py-2 font-bold">PARKFIND</h1>
          <p className="text-md text-white-600">
            Plataforma Administrativa para ParkFind
          </p>

          <Link
            className="bg-gray-800 text-white px-6 py-3 rounded-md mt-4 inline-block hover:bg-gray-600"
            to="/loginPage"
          >
            Get Started
          </Link>
        </header>
      </div>
    </section>
  );
}

export default HomePage;
