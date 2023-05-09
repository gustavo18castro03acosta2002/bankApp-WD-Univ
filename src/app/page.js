import { Navbar } from "./components/Navbar.js";
import {HomePage } from "./components/HomePage.js";

export default function Home() {
  return (
    <section className="HomeSection">
      {/* Activate 2nd nav view <Navbar /> */}
      <Navbar homeNav />
      <HomePage />
    </section>
  );
}
