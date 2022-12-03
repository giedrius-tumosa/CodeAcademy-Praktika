// let paragraph = document.querySelector('p');

// paragraph.addEventListener("click",
//   function () {
//     console.log("Paspaudei");
//   }
// );

// let viskas = document.querySelector('html');
// viskas.addEventListener("keyup", function () {
//   console.log("hello");
// });

let article = document.querySelector("article");
article.style.backgroundColor = " beige";

let lastArticle = document.querySelector("article:last-of-type");
lastArticle.style.backgroundColor = "violet";

let paragraph = document.querySelector("p");
paragraph.style.textTransform = "capitalize";

let thirdArticle = document.querySelector(".third_art");
thirdArticle.style.border = "1px solid blue";

let heading = document.querySelector("h3");
heading.style.textTransform = "uppercase";

let span = document.querySelector("span");
span.style.fontWeight = "bold";

let greenText = document.querySelector("#green_text");
greenText.style.color = "green";

// let type = document.querySelector('[type=button]');
// type.style.backgroundColor = "red"; //??????????????????

let afterDiv = document.querySelector("div+h3");
afterDiv.style.color = "blue";

let button = document.querySelector("button");
button.style.width = "200px";

let hidden = document.querySelector(".hidden");

let htmlElement = document.querySelector("html");


button.addEventListener('mouseover', function () {
  button.style.fontWeight = "bold";
});
button.addEventListener('mouseout', function () {
  button.style.fontWeight = "unset";
});

thirdArticle.addEventListener('click', function () {
  hidden.style.display = "block";
});

button.addEventListener('click', function () {
  hidden.style.display = "none";
});

htmlElement.addEventListener("keydown", function (e) {

})



