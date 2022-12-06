let articeSection = document.querySelector("#article_section");
let articles = [
  {
    heading: "Heading 1",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minus laborum amet impedit reiciendis cupiditate aut sint deserunt ullam temporibus."
  },
  {
    heading: "Heading 2",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minus laborum amet impedit reiciendis cupiditate aut sint deserunt ullam temporibus."
  },
  {
    heading: "Heading 3",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minus laborum amet impedit reiciendis cupiditate aut sint deserunt ullam temporibus."
  },
  {
    heading: "Heading 4",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minus laborum amet impedit reiciendis cupiditate aut sint deserunt ullam temporibus."
  }
];


articeSection.innerHTML += `
<header>
<button type="button"></button>
</header>
`;


for (let i = 0; i < articles.length; i++) {
  articeSection.innerHTML += `
<article>
  <h3>${articles[i].heading}</h3>
  <p>${articles[i].paragraph}</p>
</article>
`;
}

let articleAll = document.querySelectorAll("article");

let buttonExpand = document.querySelector("button");
buttonExpand.innerHTML = "Expand";

buttonExpand.addEventListener("click", function () {
  if (buttonExpand.textContent === "Expand") {
    articleAll.forEach(element => {
      element.classList.add("hide");
    });
    buttonExpand.textContent = "Hide";

  } else if (buttonExpand.textContent === "Hide") {
    articleAll.forEach(element => {
      element.classList.remove("hide");
    });
    buttonExpand.textContent = "Expand";
  }
});


