export const isPangram = (sentence) =>
  [..."abcdefghijklmnopqrstuvwxyz"].every((letter) =>
    sentence.toLowerCase().includes(letter)
  );
