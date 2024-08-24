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
      <Preparation />
      <Ingredients />
      <hr />
      <Instruction />
      <hr />
      <Nutrition />
    </>
  );
}
