let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let x = 1;
const myPromise = new Promise((resolve, reject) => {
  if (x === 8) {
    resolve();
  } else {
    reject();
  }
});

myPromise
  .then(() => console.log("Resolvintas")).catch(() => console.log("Rejectintas")).finally(() => console.log("FINALAS"));
