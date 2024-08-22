import Header from "./components/Header";
import Ingredients from "./components/Ingredients";
import Instruction from "./components/Instruction";
import Nutrition from "./components/Nutrition";
import Preparation from "./components/Preparation";
import "./App.css";
export default function App() {
  return (
    <>
      <Header />
      <section className="preparation">
        <h3 style={{ color: "var(--darkRaspberry)" }}>Preparation time</h3>
        <Preparation />
      </section>
      <h2>Ingredients</h2>
      <Ingredients />
      <hr />
      <h2>Instruction</h2>
      <Instruction />
      <hr />
      <h2>Nutrition</h2>
      <Nutrition />
    </>
  );
}
