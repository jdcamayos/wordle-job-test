import { BoardCard } from "@/types";

export const findArrayWithNull = (arr: Array<Array<BoardCard | null>>) => {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === null) {
          return i;
      }
  }
  return -1;
}