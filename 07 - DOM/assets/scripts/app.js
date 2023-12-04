const addMovieModalButton = document.getElementById("add-modal");
const cancelMovieButton = addMovieModalButton.querySelector(".btn--passive");
const startAddMovieButton = document.querySelector("header button");
const backdropBackground = document.getElementById("backdrop");

const toggleBackdrop = () => {
  backdropBackground.classList.toggle("visible");
};

const hideAddMovie = () => {
  toggleMovieModal();
};

const toggleMovieModal = () => {
  addMovieModalButton.classList.toggle("visible");
  toggleBackdrop();
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdropBackground.addEventListener("click", hideAddMovie);
cancelMovieButton.addEventListener("click", hideAddMovie);
