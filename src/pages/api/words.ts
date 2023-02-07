import { getUniqueValues } from "@/utils/getUniqueValues"
import { NextApiRequest, NextApiResponse } from "next"
import { promises as fs } from 'fs'
import path from 'path'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const wordsPath = path.join(process.cwd(), 'public', 'words.txt')
  const fileContents = await fs.readFile(wordsPath, 'utf-8')
  const wordsArray = fileContents.split('\n').filter(word => word.length === 5)
  const wordsRandom = getUniqueValues(wordsArray)
  res.status(200).json(wordsRandom)
}