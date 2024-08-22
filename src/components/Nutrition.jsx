export default function Nutrition() {
  const tableRow = [
    { tableHead: "Calories", tableData: "277kcal" },
    { tableHead: "Carbs", tableData: "0g" },
    { tableHead: "Protein", tableData: "20g" },
    { tableHead: "Fat", tableData: "22g" },
  ];

  return (
    <>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table>
        {tableRow.map((row) => (
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
