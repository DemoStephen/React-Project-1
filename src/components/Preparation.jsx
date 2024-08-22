export default function Preparation() {
  const preparation = [
    { name: "Total", text: "Approximately 10 minutes" },
    { name: "Preparation", text: "5 minutes" },
    { name: "Cooking", text: "5 minutes" },
  ];
  return (
    <ul>
      {preparation.map((index) => (
        <li key={index.name}>
          <strong>{index.name}:</strong> {index.text}
        </li>
      ))}
    </ul>
  );
}
