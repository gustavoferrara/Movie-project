/* eslint-disable prefer-const */
const getFeaturedMovies = () => {
  const firstMovie = Math.floor(Math.random() * (19 + 1));
  let secondMovie = Math.floor(Math.random() * (19 + 1));
  let thirdMovie = Math.floor(Math.random() * (19 + 1));
  let fourthMovie = Math.floor(Math.random() * (19 + 1));

  const reassignMovie = (movieIndex: number) => {
    movieIndex = Math.floor(Math.random() * (19 + 1));
  };

  if (secondMovie === firstMovie)
    while (secondMovie === firstMovie) reassignMovie(secondMovie);

  if (thirdMovie === firstMovie || thirdMovie === secondMovie)
    while (thirdMovie === firstMovie || thirdMovie === secondMovie)
      reassignMovie(thirdMovie);

  if (
    fourthMovie === firstMovie ||
    fourthMovie === secondMovie ||
    fourthMovie === thirdMovie
  )
    while (
      fourthMovie === firstMovie ||
      fourthMovie === secondMovie ||
      fourthMovie === thirdMovie
    )
      reassignMovie(fourthMovie);

  return [firstMovie, secondMovie, thirdMovie, fourthMovie];
};

export default getFeaturedMovies;
