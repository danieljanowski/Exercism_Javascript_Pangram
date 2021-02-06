const alphabet = "abcdefghijklmnopqrstuvwxyz";

export const isPangram = (sentence) => {
  let allLetters = [...alphabet];
  for (const letter of sentence) {
    allLetters = allLetters.filter((l) => l !== letter.toLowerCase());
  }
  return allLetters.length === 0 ? true : false;
};
