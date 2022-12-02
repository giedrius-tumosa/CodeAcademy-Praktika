function sudetis(sk1, sk2) {
  return sk1 + sk2;
}

function atimtis(sk1, sk2) {
  return sk1 - sk2;
}

function daugyba(sk1, sk2) {
  return sk1 * sk2;
}

function dalyba(sk1, sk2) {
  return sk1 / sk2;
}

function liekana(sk1, sk2) {
  return sk1 % sk2;
}

function laipsnis(sk1, sk2) {
  return sk1 ** sk2;
}

// 2 ********************************
let array = [1, 2, 3, 4, "laba diena", true];

function outputArray(array) {
  array.forEach(element => {
    console.log(element);
  });
  return "*******END";
}

function outputArrayReverse(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
  return "*******END";
}
