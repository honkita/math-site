import "katex/dist/katex.min.css";
import Latex from "react-latex-next";

export default function MathTable(props) {
  var file = require("/public/formulas/" + props.filename + ".json");
  const formulasJSON = JSON.parse(JSON.stringify(file));
  return (
    <table style={{ marginLeft: "auto", marginRight: "auto" }}>
      <tbody>
        {formulasJSON.map((formula) => (
          <tr key={formula.name}>
            <th style={{ width: "20vw" }}>{formula.name}</th>
            <th style={{ width: "60vw" }}>
              <Latex>{"\\(" + formula.text + "\\)"}</Latex>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
