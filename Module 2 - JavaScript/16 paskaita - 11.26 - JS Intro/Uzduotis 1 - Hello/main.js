const helloPhrase = "Labas! Kaip gyveni? Įvesk savo gimtąjį miestą";

let city = prompt(helloPhrase).toLowerCase();

if (city === "vilnius") {
  alert(
    "Vilnius yra vandenvardinis vietovardis – jam vardą bus davusi Vilnios upė, tekanti pro miestą."
  );
} else if (city === "kaunas") {
  alert(
    "Miestas yra beveik pačiame Lietuvos centre, Lietuvos Vidurio žemumoje, išsidėstęs didžiausių šalies upių Nemuno ir Neries santakoje. Prieš miestą, užtvenkus Nemuną, suformuotos Kauno marios. Kitoje miesto pusėje telkšo Lampėdžio ežeras."
  );
} else if (city === "klaipeda" || city === "klaipėda") {
  alert(
    "Klaipėdoje vyrauja vidutinių platumų jūrinis, pereinantis į žemyninį, klimatas, kuriam didelę įtaką daro Baltijos jūra."
  );
} else {
  alert(city.toUpperCase() + "... " + " Šito miesto dar nepažįstu.");
}
