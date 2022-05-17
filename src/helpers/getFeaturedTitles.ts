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
};

export default getFeaturedTitles;
