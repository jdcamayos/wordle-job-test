import { AppContext } from '@/contexts/AppContext'
import * as React from 'react'

export default function useTheme() {
  const context = React.useContext(AppContext)
  if (context === undefined) throw new Error('useTheme must be inside a AppContextProvider')
  const { toggleTheme } = context
  return { toggleTheme }
}
