import { Navbar } from "./components/Navbar.js";
import { HomePage } from "./components/HomePage.js";

export default function Home() {
  return (
    <>
      <section className="HomeSection">
        {/* Activate 2nd nav view <Navbar /> 1st->homeNav */}
        <Navbar homeNav />
        <HomePage />
      </section>
    </>
  );
}
