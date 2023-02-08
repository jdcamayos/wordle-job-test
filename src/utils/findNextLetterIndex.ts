import { BoardCard } from "@/types";

export const findNextLetterIndex = (arrays: Array<Array<BoardCard>>) => {
  return arrays.reduce((acc, array, i) => {
    const nullIndex = array.indexOf(null);
    if (acc[0] === -1 && acc[1] === -1 && nullIndex !== -1) {
      acc = [i, nullIndex]
    }
    return acc
  }, [-1, -1]);
};