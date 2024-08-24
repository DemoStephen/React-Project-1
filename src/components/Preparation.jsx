import { recipeInfo } from "../util";
export default function Preparation() {
  return (
    <section className="preparation">
      <h3 style={{ color: "var(--darkRaspberry)" }}>Preparation time</h3>
      <ul>
        {recipeInfo.preparation.map((index) => (
          <li key={index.name}>
            <strong>{index.name}:</strong> {index.text}
          </li>
        ))}
      </ul>
    </section>
  );
}
