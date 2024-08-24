import { recipeInfo } from "../util";
export default function Ingredients() {
  return (
    <>
      <h2>Ingredients</h2>
      <ul>
        {recipeInfo.ingredient.map((index) => (
          <li key={index}>{index || "loading"}</li>
        ))}
      </ul>
    </>
  );
}
