import { recipeInfo } from "../util";
export default function Instruction() {
  return (
    <>
      <h2>Instruction</h2>
      <ol>
        {recipeInfo.instruction.map((index) => (
          <li key={index.title}>
            <strong>{index.title}</strong>
            {index.content}
          </li>
        ))}
      </ol>
    </>
  );
}
