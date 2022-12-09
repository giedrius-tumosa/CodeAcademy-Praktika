document
  .querySelector("#tableGenerator")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    document.querySelector("#tableArea").innerHTML = "";

    const [rowNumber, colNumber] = [
      e.target.elements.rowNumber.value,
      e.target.elements.colNumber.value
    ];

    let generateCols = (colNumber) => {
      let colString = "";
      for (let i = 0; i < colNumber; i++) {
        colString += `<td></td>`;
      }
      return colString;
    };

    let generateRows = (rowNumber, colString) => {
      let rowString = "";
      for (let i = 0; i < rowNumber; i++) {
        rowString += `<tr>${colString}</tr>`;

      }
      return rowString;
    };

    document.querySelector("#tableArea").innerHTML += `
    <table>
    <tbody>
      ${generateRows(rowNumber, generateCols(colNumber))}
    </tbody>
    </table>
    `;
  });