let month = "rugsėjis";

switch (month) {
  case "gruodis":
  case "sausis":
  case "vasaris":
    console.log("Dabar yra žiema.");
    break;
  case "kovas":
  case "balandis":
  case "gegužė":
    console.log("Dabar yra pavasaris.");
    break;
  case "birželis":
  case "liepa":
  case "rugpjūtis":
    console.log("Dabar yra vasara.");
    break;
  case "rugsėjis":
  case "spalis":
  case "lapkritis":
    console.log("Dabar yra ruduo.");
    break;
  default:
    console.log("Tai ne mėnuo.");
}
