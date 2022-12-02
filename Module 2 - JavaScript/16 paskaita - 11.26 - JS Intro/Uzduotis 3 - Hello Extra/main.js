// let userName = prompt('Kuo jūs vardu?');
let userName = prompt("Koks jūsų vardas?");
let nameRoot;
let newName;

if (userName.endsWith("us")) {
  nameRoot = userName.slice(0, userName.length - 2);
  newName = nameRoot + "au";
} else if (userName.endsWith("as")) {
  nameRoot = userName.slice(0, userName.length - 2);
  newName = nameRoot + "ai";
} else if (userName.endsWith("ė")) {
  nameRoot = userName.slice(0, userName.length - 1);
  newName = nameRoot + "e";
} else if (userName.endsWith("a")) {
  newName = userName;
} else if (userName.endsWith("is")) {
  nameRoot = userName.slice(0, userName.length - 2);
  newName = nameRoot + "i";
} else {
  newName = userName;
}

alert("Labas, " + newName + "!");
