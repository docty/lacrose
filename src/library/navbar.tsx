import Image from "next/image"
import { Box, Button, IconButton } from '@mui/material';
import { IoMenuOutline, IoCloseOutline, IoChevronDown, IoChevronUp } from 'react-icons/io5'
import Link from "next/link";
import { useState, useEffect } from "react";
// import { IWidget } from "@/types";
 
 

export const Navbar1 = () => {

    const [open, setOpen] = useState(false);
    return (
        <header className="bg-slate-800 border-b border-gray-800">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {/* <!-- lg+ --> */}
                <nav className="flex items-center justify-between h-16 lg:h-20">
                    <div className="flex-shrink-0">
                        <Link href={"#"} title="" className="flex">
                            <Image className="w-auto h-8 lg:h-10" width={'0'} height={'0'} src="/logo.png" alt="" sizes="md" />
                        </Link>
                    </div>

                    <Box className="lg:hidden">
                        <IconButton aria-label="delete" onClick={() => setOpen(true)}>
                            <IoMenuOutline className="text-white text-3xl" />
                        </IconButton>
                    </Box>

                    <div className="hidden md:flex md:items-center md:space-x-10">
                        <Link href="#" title="" className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> Features </Link>

                        <Link href="#" title="" className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> Services </Link>

                        <Link href="#" title="" className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> About </Link>

                        <Link href="#" title="" className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> Contact </Link>
                    </div>
                </nav>

                {/* <!-- xs to lg --> */}
                <nav className={`min-h-screen px-4 py-10 text-center bg-black ${open || 'hidden'} `}>

                    <Box className="">
                        <IconButton aria-label="delete" onClick={() => setOpen(false)}>
                            <IoCloseOutline className="text-white text-3xl" />
                        </IconButton>
                    </Box>
                    <nav className="flex flex-col items-center mt-10 space-y-2">
                        <Link href="#" title="" className="py-2 text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> Features </Link>

                        <Link href="#" title="" className="py-2 text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> Services </Link>

                        <Link href="#" title="" className="py-2text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> About </Link>

                        <Link href="#" title="" className="py-2 text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> Contact </Link>

                    </nav>
                </nav>
            </div>
        </header>

    )

}
