import '@/styles/globals.css'
import { INavitem } from '@/types'
import { Box } from '@mui/material'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Sidebar />
      <div className='ml-[16.67%]'>
        <Component {...pageProps} />
      </div>

    </main>
  )
}

const Sidebar = () => {
  return (
    <div className='w-2/12 border fixed top-0 bottom-0 p-2 px-4 bg-slate-800'>
      <p className='font-bold text-3xl text-white'>Lacrose</p>
      <Box className='my-8 overflow-y-auto h-full'>
        <NavItem count={'1'} name={'Navbar'} link={'/navbar'} />
        <NavItem count={'12'} name={'Call To Action'} link={'/call-to-action'} />
        <NavItem count={'11'} name={'Feature'} link={'/feature'} />
        <NavItem count={'9'} name={'Testimony'} link={'/testimony'} />
        <NavItem count={'4'} name={'Blog'} link={'/blog'} />
        <NavItem count={'6'} name={'Price'} link={'/price'} />
        <NavItem count={'2'} name={'Hero'} link={'/hero'} />
        <NavItem count={'6'} name={'Footer'} link={'/footer'} />
        <NavItem count={'6'} name={'Team'} link={'/team'} />
        <NavItem count={'6'} name={'Faq'} link={'/faq'} />
        <NavItem count={'6'} name={'Stat'} link={'/stat'} />
        <NavItem count={'6'} name={'Step'} link={'/step'} />
        <NavItem count={'6'} name={'Login'} link={'/login'} />
        <NavItem count={'6'} name={'Signup'} link={'/signup'} />
        <NavItem count={'6'} name={'Collaboration'} link={'/collaboration'} />
        <NavItem count={'6'} name={'Contact'} link={'/contact'} />
        <NavItem count={'6'} name={'Integration'} link={'/integration'} />
        <NavItem count={'6'} name={'Content'} link={'/content'} />
        {/* <NavItem count={'6'} name={'Contact'} link={'/contact'} />
        <NavItem count={'6'} name={'Contact'} link={'/contact'} />
        <NavItem count={'6'} name={'Contact'} link={'/contact'} />
        <NavItem count={'6'} name={'Contact'} link={'/contact'} />
        <NavItem count={'6'} name={'Contact'} link={'/contact'} />
        <NavItem count={'6'} name={'Contact'} link={'/contact'} /> */}
      </Box>
    </div>
  )
}

const NavItem = ({ count, link, name }: INavitem) => {
  const { pathname } = useRouter();

   
  return (
    <Link href={link} className={`p-2 text-white w-full flex justify-between hover:bg-slate-600 rounded-md ${pathname === link && 'bg-slate-900'}`}>
      <span className='px-2'>{name}</span>
      <span className='px-2'>{count}</span>
    </Link>
  )
}

