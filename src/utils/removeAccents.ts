export const removeAccents = (inputStr: string) =>  {
  const nfkdForm = inputStr.normalize('NFKD');
  return Array.from(nfkdForm)
    .filter(c => !c.normalize('NFD')[1])
    .join('');
}