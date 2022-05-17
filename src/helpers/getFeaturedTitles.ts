/* eslint-disable prefer-const */
const getFeaturedTitles = (
  titlesRequested: number,
  minNumber: number,
  maxNumber: number,
) => {
  const titles: number[] = [];

  for (let i = 0; i < titlesRequested; i++) {
    let newTitle = Math.floor(
      Math.random() * (maxNumber - minNumber + 1) + minNumber,
    );

    if (titles.length !== 0) {
      if (titles.some(otherTitle => newTitle === otherTitle)) {
        while (titles.some(otherTitle => newTitle === otherTitle)) {
          newTitle = Math.floor(
            Math.random() * (maxNumber - minNumber + 1) + minNumber,
          );
        }
        titles.push(newTitle);
      } else {
        titles.push(newTitle);
      }
    } else {
      titles.push(newTitle);
    }
  }

  return titles;

  // const checkMoviesAreEqual = (newMovie: number) => {
  //   for (let otherMovie of movies) {
  //     if (newMovie === otherMovie) {
  //       newMovie = Math.floor(
  //         Math.random() * (maxNumber - minNumber + 1) + minNumber,
  //       );
  //     } else {
  //       return true;
  //     }
  //   }
  // };

  // if (secondMovie === firstMovie)
  //   while (secondMovie === firstMovie) reassignMovie(secondMovie);

  // if (thirdMovie === firstMovie || thirdMovie === secondMovie)
  //   while (thirdMovie === firstMovie || thirdMovie === secondMovie)
  //     reassignMovie(thirdMovie);

  // // prettier-ignore
  // if (fourthMovie === firstMovie || fourthMovie === secondMovie || fourthMovie === thirdMovie)
  //   // prettier-ignore
  //   while (fourthMovie === firstMovie || fourthMovie === secondMovie || fourthMovie === thirdMovie)
  //     reassignMovie(fourthMovie);

  // return [firstMovie, secondMovie, thirdMovie, fourthMovie];
};

export default getFeaturedTitles;

// const getFeaturedMovies = (iterations: number, minNumber: number, maxNumber: number) => {
//   const firstMovie = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
//   let secondMovie = Math.floor(Math.random() * (19 + 1));
//   let thirdMovie = Math.floor(Math.random() * (19 + 1));
//   let fourthMovie = Math.floor(Math.random() * (19 + 1));

//   const reassignMovie = (movieIndex: number) => {
//     movieIndex = Math.floor(Math.random() * (19 + 1));
//   };

//   if (secondMovie === firstMovie)
//     while (secondMovie === firstMovie) reassignMovie(secondMovie);

//   if (thirdMovie === firstMovie || thirdMovie === secondMovie)
//     while (thirdMovie === firstMovie || thirdMovie === secondMovie)
//       reassignMovie(thirdMovie);

//   // prettier-ignore
//   if (fourthMovie === firstMovie || fourthMovie === secondMovie || fourthMovie === thirdMovie)
//     // prettier-ignore
//     while (fourthMovie === firstMovie || fourthMovie === secondMovie || fourthMovie === thirdMovie)
//       reassignMovie(fourthMovie);

//   return [firstMovie, secondMovie, thirdMovie, fourthMovie];
// };

// export default getFeaturedMovies;
