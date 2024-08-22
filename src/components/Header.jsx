import recipe from "../assets/image-omelette.jpeg";
export default function Header() {
  return (
    <header>
      <img src={recipe} alt="recipe Image" />
      <h1 style={{ color: "var(--darkCharcoal)" }}>Simple Omelette Recipe</h1>
      <p>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
    </header>
  );
}
