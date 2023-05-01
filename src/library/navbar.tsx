import Image from "next/image"
import { Box, Button, IconButton } from '@mui/material';
import { IoMenuOutline, IoCloseOutline, IoChevronDown, IoChevronUp } from 'react-icons/io5'
import Link from "next/link";
import { useState, useEffect } from "react";
// import { IWidget } from "@/types";

export const Navbar1 = () => {

    const [open, setOpen] = useState(false);
    const [article, setArticle] = useState(false);
    const content = '<section>';

    // useEffect(() => {
    //     props.copy(content)
    // });

    return (
        <section>
            <nav className="bg-blue-500 relative py-5  z-50">
                <Box className="lg:px-36 px-2 mx-auto">
                    <div className="flex items-center justify-between">
                        <Link className="" href="/">
                            <Image className="h-14" src="/logo.png" alt="" width={"100"} height={'100'} />
                        </Link>
                        <Box className="lg:hidden ml-auto">
                            <IconButton aria-label="delete" onClick={() => setOpen(true)}>
                                <IoMenuOutline />
                            </IconButton>
                        </Box>
                        <ul className="hidden lg:flex lg:w-auto lg:space-x-12">
                            <li className="group relative">
                                <a className="inline-block text-sm text-white hover:text-orange-900 font-medium" href="#">Article</a>
                                <div className="hidden   group-hover:block absolute top-full mt-1 left-0 min-w-max max-w-xs  px-0 z-50  shadow-md ">
                                    <div className="-mb-2 ml-3 w-3 h-3 rounded-sm  bg-white shadow-[yellow]  shadow-md transform rotate-45 "></div>
                                    <div className="w-full max-w-xs bg-white rounded-md pt-2 pb-2">
                                        <div>
                                            <a className="block py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg" href="#">Web Suite</a>
                                            <a className="block py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg" href="#">Data Science</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><a className="inline-block text-sm text-white hover:text-orange-900 font-medium" href="#">Learn</a></li>
                        </ul>

                    </div>
                </Box>
            </nav>
            <div className={`${open || 'hidden'}  fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50`}>
                <div className=" fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav className="relative flex flex-col py-6 px-4 w-full h-full bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-16">
                        <Link className="mr-auto text-2xl font-medium leading-none" href="#">
                            <Image className="h-14" src="/logo.png" alt="" width={"100"} height={'100'} />
                        </Link>
                        <IconButton aria-label="delete" onClick={() => setOpen(false)}>
                            <IoCloseOutline />
                        </IconButton>
                    </div>
                    <div>
                        <ul className="mb-2">
                            <li>
                                <div onClick={() => setArticle((p) => !p)} className={'px-5  py-4  hover:bg-blue-100 cursor-pointer flex items-center justify-between'}>
                                    <a className="block text-gray-900 rounded-lg" href="#">Article</a>
                                    {!article ? <IoChevronDown /> : <IoChevronUp />}
                                </div>
                                {
                                    article &&
                                    <div className="w-full  bg-red-500s rounded-md pl-9">
                                        <a className="block py-3 text-sm text-gray-900 px-3 hover:bg-blue-100 " href="#">Web Suite</a>
                                        <a className="block py-3  text-sm text-gray-900 px-3 hover:bg-blue-100 " href="#">Data Science</a>
                                    </div>
                                }
                            </li>
                            <li><a className="block py-4 px-5 text-gray-900 hover:bg-blue-100 rounded-lg" href="#">Learn</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>


    )
}

export const Navbar2 = () => {

    const [open, setOpen] = useState(false);
    const [article, setArticle] = useState(false);

    return (
        <section>
            <nav className="bg-gray-700 relative py-5  z-50">
                <Box className="lg:px-36 px-2 mx-auto">
                    <div className="flex items-center justify-between">
                        <Link className="" href="/">
                            <Image className="h-14" src="/logo.png" alt="" width={"100"} height={'100'} />
                        </Link>
                        <Box className="lg:hidden ml-auto">
                            <IconButton aria-label="delete" onClick={() => setOpen(true)}>
                                <IoMenuOutline />
                            </IconButton>
                        </Box>
                        <ul className="hidden lg:flex lg:w-auto lg:space-x-12">
                            <li className="group relative">
                                <a className="inline-block text-sm text-white hover:text-orange-900 font-medium" href="#">Article</a>
                                <div className="hidden   group-hover:block absolute top-full mt-1 left-0 min-w-max max-w-xs  px-0 z-50  shadow-md ">
                                    <div className="-mb-2 ml-3 w-3 h-3 rounded-sm  bg-white shadow-[yellow]  shadow-md transform rotate-45 "></div>
                                    <div className="w-full max-w-xs bg-white rounded-md pt-2 pb-2">
                                        <div>
                                            <a className="block py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg" href="#">Web Suite</a>
                                            <a className="block py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg" href="#">Data Science</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><a className="inline-block text-sm text-white hover:text-orange-900 font-medium" href="#">Learn</a></li>
                        </ul>
                        <Box>
                            <Button className="text-white">Login</Button>
                            <Button variant="outlined" className="text-white hover:bg-blue-500 bg-green-400">Register</Button>
                        </Box>
                    </div>
                </Box>
            </nav>
            <div className={`${open || 'hidden'}  fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50`}>
                <div className=" fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav className="relative flex flex-col py-6 px-4 w-full h-full bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-16">
                        <Link className="mr-auto text-2xl font-medium leading-none" href="#">
                            <Image className="h-14" src="/logo.png" alt="" width={"100"} height={'100'} />
                        </Link>
                        <IconButton aria-label="delete" onClick={() => setOpen(false)}>
                            <IoCloseOutline />
                        </IconButton>
                    </div>
                    <div>
                        <ul className="mb-2">
                            <li>
                                <div onClick={() => setArticle((p) => !p)} className={'px-5  py-4  hover:bg-blue-100 cursor-pointer flex items-center justify-between'}>
                                    <a className="block text-gray-900 rounded-lg" href="#">Article</a>
                                    {!article ? <IoChevronDown /> : <IoChevronUp />}
                                </div>
                                {
                                    article &&
                                    <div className="w-full  bg-red-500s rounded-md pl-9">
                                        <a className="block py-3 text-sm text-gray-900 px-3 hover:bg-blue-100 " href="#">Web Suite</a>
                                        <a className="block py-3  text-sm text-gray-900 px-3 hover:bg-blue-100 " href="#">Data Science</a>
                                    </div>
                                }
                            </li>
                            <li><a className="block py-4 px-5 text-gray-900 hover:bg-blue-100 rounded-lg" href="#">Learn</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>


    )
}


export const Navbar3 = () => (
    <header className="bg-black border-b border-gray-700">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* <!-- lg+ --> */}
        <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
                <a href="#" title="" className="flex">
                    <img className="w-auto h-8 lg:h-10" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo-alt.svg" alt="" />
                </a>
            </div>

            <button type="button" className="inline-flex p-2 text-white transition-all duration-200 rounded-md md:hidden focus:bg-gray-800 hover:bg-gray-800">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>

            <div className="hidden md:flex md:items-center md:space-x-10">
                <a href="#" title="" className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> Features </a>

                <a href="#" title="" className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> Solutions </a>

                <a href="#" title="" className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> Resources </a>

                <a href="#" title="" className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> Pricing </a>
            </div>
        </nav>

        {/* <!-- xs to lg --> */}
        <nav className="min-h-screen px-4 py-10 text-center bg-black md:hidden">
            <button type="button" className="inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <nav className="flex flex-col items-center mt-10 space-y-2">
                <a href="#" title="" className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"> Features </a>

                <a href="#" title="" className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"> Solutions </a>

                <a href="#" title="" className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"> Resources </a>

                <a href="#" title="" className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"> Pricing </a>
            </nav>
        </nav>
    </div>
</header>

)
