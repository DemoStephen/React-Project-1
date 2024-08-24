import { recipeInfo } from "../util";
export default function Nutrition() {
  return (
    <>
      <h2>Nutrition</h2>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table>
        {recipeInfo.tableRow.map((row) => (
          <tbody key={row.tableHead}>
            <tr>
              <th>{row.tableHead}</th>
              <td>{row.tableData}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
}
