export const getUniqueValues = (arr: string[], qty: number = 100) => {
  let uniqueValues: Set<string> = new Set();
  let result: string[] = []
  while (result.length < qty && uniqueValues.size < arr.length) {
    let randomIndex = Math.floor(Math.random() * arr.length)
    let randomValue = arr[randomIndex]
    if (!uniqueValues.has(randomValue)) {
      uniqueValues.add(randomValue)
      result.push(randomValue)
    }
  }
  return result
}