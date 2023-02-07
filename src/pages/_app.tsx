import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from '@next/font/google'
import AppContextProvider from '@/contexts/AppContext'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --roboto-font: ${roboto.style.fontFamily}
          }
        
        `}
      </style>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </>
  )
}
