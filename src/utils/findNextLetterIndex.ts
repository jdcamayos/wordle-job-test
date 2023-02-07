import { BoardCard } from "@/types";

export const findNextLetterIndex = (arr: Array<Array<BoardCard>>) => {
  for (let rowIndex = 0; rowIndex < arr.length; rowIndex++) {
    const row = arr[rowIndex]
      for (let colIndex =0; colIndex < row.length; colIndex++) {
        const colValue = row[colIndex]
          if (colValue === null) {
              return [rowIndex, colIndex];
          }
      }
  }
  return [-1, -1];
};