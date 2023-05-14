import { Navbar } from "../components/Navbar";
import FormComponent from "../components/FormComponent";
import "./style.css";

export default function Registrate() {
  return (
    <main className="SessionSection">
      <div className="ElementsPositions">
        <div className="NavBarSessionConfg">
          <Navbar />
        </div>
        <div className="SessionContentConfig">
          <FormComponent type="" />
        </div>
      </div>
    </main>
  );
}
