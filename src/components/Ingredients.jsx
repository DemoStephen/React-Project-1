export default function Ingredients() {
  const ingredient = [
    "2-3 large eggs",
    "Salt, to taste",
    "Pepper, to taste",
    "1 tablespoon of butter or oil",
    "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
  ];
  return (
    <ul>
      {ingredient.map((index) => (
        <li key={index}>{index}</li>
      ))}
    </ul>
  );
}
