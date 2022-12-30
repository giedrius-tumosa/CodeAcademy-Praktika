fetch("./data.txt")
  .then(resp => resp.text())
  .then(data => {
    processStrings(data);

  });

function processStrings(data) {
  const stringArrays = [];

  data
    .split("\n")  //atskiriam teksto eilutes i atskirus stringus
    .forEach(stringLine => {//suskaidom eilutes i atskirus zodzius
      stringArrays.push(stringLine.trim().split(" "));
    });

  stringArrays.forEach(el => { //sujungiam atskirus skirybos zenklus su zodziais
    el.forEach((word, i) => {
      const regex = /[^A-Za-z0-9]/g;
      if (word.split("").every(char => regex.test(char))) { //testuotjam ar zodis yra skyrybos zenklas
        el.splice(i - 1, 2, `${el[i - 1]} ${el[i]}`);
      }
    });
  });

  // SKaiciuojame kuri eilute turi daugiausiai zodziu
  const mostWordsInLine = Math.max(...stringArrays.map(el => el.length));

  // Skaiciuojame ilgiausia tos pacios pozicijos zodi
  let longestCycleWord;
  for (let i = 0; i < mostWordsInLine; i++) {
    const cycleWordLengths = [];
    stringArrays.forEach(el => {
      if (el[i]) {
        cycleWordLengths.push(el[i].length);
      }
    });
    longestCycleWord = Math.max(...cycleWordLengths);

    // Skaiciuojam, kiek reikia tarpeliu;
    const whiteSpaceNeeded = (longestCycleWord, el) => {
      let whiteSpace = "";
      for (let k = 0; k < (longestCycleWord + 1 - el.length); k++) {
        whiteSpace += " ";
      }
      return whiteSpace;
    };

    // Pridedam tarpus prie zodziu
    stringArrays.forEach(el => {
      if (el[i]) {
        el[i] += whiteSpaceNeeded(longestCycleWord, el[i]);
      }
    });
  }

  // Printinam
  stringArrays.forEach(el => {
    console.log(el.join(""));
  });
}


