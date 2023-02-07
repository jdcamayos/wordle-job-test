export const getWords = async () => {
  const response = await fetch('/api/words')
  return await response.json()
}