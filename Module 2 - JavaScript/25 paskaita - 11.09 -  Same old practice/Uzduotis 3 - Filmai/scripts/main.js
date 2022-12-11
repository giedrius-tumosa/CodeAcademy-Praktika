let main = document.querySelector("main");
let header = document.querySelector(".header");

// GENERATE MOVIE CARDS
let addMovies = (movieData) => {
  // movieData.movies.forEach(el => {
  movieData.forEach(el => {
    let [cast, imdbScore, releaseYear, movieTitle, director, movieType, duration, posterLink, synopsis] = [
      el.aktoriai.join(", "),
      el.IMDB,
      el.leidimoMetai,
      el.pavadinimas,
      el.rezisierius,
      el.tipas.join(" / "),
      el.trukme,
      el.paveiksliukas,
      el.aprasymas
    ];

    main.innerHTML += `
    <article class="movie_card">
        <figure class="movie_card-poster">
          <img
            src="${posterLink}"
            alt="${movieTitle} poster."
            width="200"
            height="auto"
          />
        </figure>
        <section class="movie_card-info">
          <header class="movie_card-header">
            <h3 class="movie_title">${movieTitle}</h3>
            <p class="movie_director">by ${director}</p>
            <p class="movie_more-info">
              <span class="movie_type">${movieType}</span>
              <span class="movie_year">/ ${releaseYear} </span>
              <span class="movie_duration">/ ${duration} min </span>
              <span class="movie_IMDB-score">/ IMDB ${imdbScore}</span>
            </p>
          </header>
          <div class="synopis_wrap">
            <h5 class="movie_card-subtitle">SYNOPSIS</h5>
            <p class="movie_synopsis">${synopsis}</p>
          </div>
          <div class="cast_wrap">
            <h5 class="movie_card-subtitle">CAST</h5>
            <p class="movie_cast">${cast}</p>
          </div>
        </section>
      </article>
    `;
  });
};

addMovies(data.movies);



// FORM
let addFilterOptions = () => {
  let str = "";
  data.selector.forEach(el => {
    str += `<option value="${el}">${el}</option>`;
  });
  return str;
};

header.innerHTML = `
<form action="" class="form_movie_filter">
  <label for="filterSelection">Select filter:</label>
  <select name="filterSelection" id="filterSelection">
${addFilterOptions()}
  </select>
  <input type="text" id="search_criteria" name="search_criteria" />
  <button type="submit" id="btn-filter">Filter</button>
</form>
`;

let filterOptions = document.querySelector("#filterSelection");
let btnFilter = document.querySelector("#btn-filter");

let filterForm = document.querySelector(".form_movie_filter");

filterForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let searchResult = [];
  main.innerHTML = "";
  let [selectedFilter, searchCriteria] = [
    e.target.elements.filterSelection.value,
    e.target.elements.search_criteria.value.toLowerCase()
  ];


  if (!searchCriteria) {
    addMovies(data.movies);
  } else {
    switch (selectedFilter) {
      case 'IMDB is higher than':
        searchResult = data.movies
          .filter(el => el.IMDB > searchCriteria);
        break;
      case 'IMDB is lower than':
        searchResult = data.movies
          .filter(el => el.IMDB < searchCriteria);
        break;
      case 'Actor':
        searchResult = data.movies
          .filter(el => el.aktoriai
            .map(el => el.split(" "))
            .flat().map(el => el.toLowerCase())
            .includes(searchCriteria));
        break;
      case 'Director':
        searchResult = data.movies
          .filter(el => el.rezisierius.toLowerCase().split(" ")
            .includes(searchCriteria));
        break;
      case 'Title':
        searchResult = data.movies
          .filter(el => el.pavadinimas.toLowerCase().split(" ")
            .includes(searchCriteria));
        break;
      case 'Released before year':
        searchResult = data.movies
          .filter(el => el.leidimoMetai < searchCriteria);
        break;
      case 'Released after year':
        searchResult = data.movies
          .filter(el => el.leidimoMetai > searchCriteria);
        break;
      case 'Type':
        searchResult = data.movies
          .filter(el => el.tipas
            .map(el => el.split(" "))
            .flat().map(el => el.toLowerCase())
            .includes(searchCriteria));
        break;
      default:
        alert("Some error ocurred. Contact Giedrius for assistance.");
        break;
    }

    searchResult.length ? addMovies(searchResult) : main.innerHTML = `Sorry, we didn't find any movies matching your search input.`;


  }


})








