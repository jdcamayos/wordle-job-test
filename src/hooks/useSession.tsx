import { AppContext } from '@/contexts/AppContext'
import * as React from 'react'

export default function useSession() {
  const context = React.useContext(AppContext)
  if (context === undefined) throw new Error('useSession must be inside a AppContextProvider')
  const { firstVisit, saveFirstVisit, loading } = context
  return { firstVisit, saveFirstVisit, loading }
}
