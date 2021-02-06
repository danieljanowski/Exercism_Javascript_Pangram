const alphabet = "abcdefghijklmnopqrstuvwxyz";

export const isPangram = (sentence) => {
  let allLetters = [...alphabet];
  for (let letter of sentence) {
    allLetters = allLetters.filter(
      (currentLetter) => letter.toLowerCase() !== currentLetter
    );
  }
  return allLetters == 0 ? true : false;
};
