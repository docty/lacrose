import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Sidebar />
      <div className='sm:ml-[320px]'>
        <Component {...pageProps} />
      </div>
    </main>
  )
}

 
 
