const addMovieModalButton = document.getElementById("add-modal");
const cancelMovieButton = addMovieModalButton.querySelector(".btn--passive");
const startAddMovieButton = document.querySelector("header button");
const backdropBackground = document.getElementById("backdrop");
const confirmToAddMovie = cancelMovieButton.nextElementSibling;
const userInputs = addMovieModalButton.querySelectorAll("input");
const entryTextSectino = document.getElementById("entry-text");

const movies = [];

const deleteMovieHandler = (movieId) => {
  let identifiedId = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    identifiedId++;
  }
  movies.splice(identifiedId, 1);
  const listRoot = document.getElementById("movie-list");
  listRoot.children[identifiedId].remove();
};

const updateUI = () => {
  movies.length >= 1 ? (entryTextSectino.style.display = "none") : null;
};

const addNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
  <img src="${imageUrl}" alt="${title}" />
  </div>
  <div class="movie-element__info">
  <h2>${title}</h2>
  <p>${rating}/5 stars</p> 
  </div>
  `;

  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
};

const toggleBackdropHandler = () => {
  backdropBackground.classList.toggle("visible");
};

const clearInputs = () => {
  for (const input of userInputs) {
    input.value = "";
  }
};

const toggleMovieModalHandler = () => {
  addMovieModalButton.classList.toggle("visible");
  clearInputs();
  toggleBackdropHandler();
};

const addMovieToListHandler = () => {
  const titleValue = userInputs[0].value;
  const imgUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imgUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter a valid values.");
  } else {
    const newMovie = {
      id: Math.random().toString(),
      title: titleValue,
      image: imgUrlValue,
      rating: ratingValue,
    };
    movies.push(newMovie);
    console.log(movies);
    clearInputs();
    toggleMovieModalHandler();
    addNewMovieElement(
      newMovie.id,
      newMovie.title,
      newMovie.image,
      newMovie.rating
    );
    updateUI();
  }
};

startAddMovieButton.addEventListener("click", toggleMovieModalHandler);
backdropBackground.addEventListener("click", toggleMovieModalHandler);
cancelMovieButton.addEventListener("click", toggleMovieModalHandler);
confirmToAddMovie.addEventListener("click", addMovieToListHandler);
