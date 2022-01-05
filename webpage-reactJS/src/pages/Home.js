// import logo from "./logo.svg";
import React from "react";
import "../assets/css/style.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Opponents from "../components/Opponents";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <section className="Background-requirements">
      <header>
        <Navbar />
      </header>
      <main>
        <Opponents />
      </main>
      <Footer />
    </section>
  );
}

export default Home;
