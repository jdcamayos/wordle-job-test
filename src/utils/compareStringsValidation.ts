import { BoardCard } from "@/types";

export const compareStringsValidation = (wordAInput: string, wordBInput: string): BoardCard[] => {
  const [wordA, wordB] = [wordAInput.toUpperCase(), wordBInput.toUpperCase()]
  if (wordA.length !== wordB.length) {
      return wordA.split("").map((char) => ({
          value: char,
          color: "grey",
      }));
  }

  return wordA.split("").map((char1, index) => {
      if (char1 === wordB[index]) {
          return {
              value: char1,
              color: "green",
          };
      } else if (wordB.includes(char1)) {
          return {
              value: char1,
              color: "gold",
          };
      } else {
          return {
              value: char1,
              color: "grey",
          };
      }
  });
};