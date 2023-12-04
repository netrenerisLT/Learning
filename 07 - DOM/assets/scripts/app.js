const addMovieModalButton = document.getElementById("add-modal");
const cancelMovieButton = addMovieModalButton.querySelector(".btn--passive");
const startAddMovieButton = document.querySelector("header button");
const backdropBackground = document.getElementById("backdrop");
const confirmToAddMovie = cancelMovieButton.nextElementSibling;
const userInputs = addMovieModalButton.querySelectorAll("input");

const movies = [];

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
      title: titleValue,
      image: imgUrlValue,
      rating: ratingValue,
    };
    movies.push(newMovie);
    console.log(movies);
    clearInputs();
    toggleMovieModalHandler();
  }
};

startAddMovieButton.addEventListener("click", toggleMovieModalHandler);
backdropBackground.addEventListener("click", toggleMovieModalHandler);
cancelMovieButton.addEventListener("click", toggleMovieModalHandler);
confirmToAddMovie.addEventListener("click", addMovieToListHandler);
