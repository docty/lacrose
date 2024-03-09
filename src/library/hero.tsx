import React from "react";
import { useState, useEffect } from "react";
import Link from 'next/link'
import { Button } from 'primereact/button'
import { IoArrowForwardCircleOutline, IoMenuOutline, IoArrowForwardOutline, IoPlayCircleOutline, IoStarOutline, IoCloseOutline } from "react-icons/io5";

export const Hero1 = () => (
    <div className="">
        <header className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
                <div className="flex-shrink-0">
                    <Link href={"/"} title="">
                        <img className="w-auto h-8" src="/logo.png" alt="Lacrose" />
                    </Link>
                </div>

                <Button className="inline-flex p-2 transition-all duration-200 rounded-md lg:hidden focus:bg-neutral hover:bg-neutral">
                    <IoMenuOutline className="text-2xl" />
                </Button>

                <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                    <Link href="#" title="" className="text-base transition-all duration-200 hover:text-opacity-80"> Features </Link>

                    <Link href="#" title="" className="text-base transition-all duration-200 hover:text-opacity-80"> Solutions </Link>

                    <Link href="#" title="" className="text-base   transition-all duration-200 hover:text-opacity-80"> Resources </Link>

                    <Link href="#" title="" className="text-base  transition-all duration-200 hover:text-opacity-80"> Pricing </Link>
                </div>

                <Link href="#" title="" className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-primary_lite focus:bg-primary_lite font-semibold text-white bg-primary rounded-full" role="button"> Join Now </Link>
            </div>
        </header>

        <section className="py-10 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                    <div>
                        <p className="text-base font-semibold tracking-wider text-secondary uppercase">A social media for learners</p>
                        <h1 className="mt-4 text-4xl font-bold  lg:mt-8 sm:text-6xl xl:text-8xl">Connect & learn from the experts</h1>
                        <p className="mt-4 text-base  lg:mt-8 sm:text-xl">Grow your career fast with right mentor.</p>

                        <Link href="#" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-primary rounded-full lg:mt-16 hover:bg-primary_lite focus:bg-primary_lite" role="button">
                            Join for free
                            <IoArrowForwardCircleOutline className="ml-4 text-2xl" />
                        </Link>

                        <p className="mt-5 text-gray-600">Already joined us? <a href="#" title="" className="text-black transition-all duration-200 hover:underline">Log in</a></p>
                    </div>

                    <div>
                        <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    </div>
)


export const Hero2 = () => (
    <div className="bg-gradient-to-b from-green-50 to-green-100">
        <header className="">
            <div className="px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    <div className="flex-shrink-0">
                        <Link href="/" title="" className="flex">
                            <img className="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/logo.svg" alt="" />
                        </Link>
                    </div>

                    <Button className="inline-flex p-2 transition-all duration-200 rounded-md lg:hidden focus:bg-neutral hover:bg-neutral">
                        <IoMenuOutline className="text-2xl" />
                    </Button>

                    <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
                        <Link href="#" title="" className="text-base font-semibold  first-line:transition-all duration-200 hover:text-opacity-80"> Features </Link>

                        <Link href="#" title="" className="text-base font-semibold   transition-all duration-200 hover:text-opacity-80"> Solutions </Link>

                        <Link href="#" title="" className="text-base font-semibold   transition-all duration-200 hover:text-opacity-80"> Resources </Link>

                        <Link href="#" title="" className="text-base font-semibold  transition-all duration-200 hover:text-opacity-80"> Pricing </Link>

                        <div className="w-px h-5 bg-black/20"></div>

                        <Link href="#" title="" className="text-base font-semibold   transition-all duration-200 hover:text-opacity-80"> Log in </Link>

                        <Link href="#" title="" className="inline-flex items-center border-black justify-center px-5 py-2.5 text-base font-semibold  border-2   hover:bg-primary hover:border-primary hover:text-white transition-all duration-200 focus:bg-primary focus:text-white" role="button"> Try for free </Link>
                    </div>
                </div>
            </div>
        </header>

        <section className="py-10 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                    <div>
                        <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                            Collaborate remotely, with
                            <div className="relative inline-flex">
                                <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-primary"></span>
                                <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">Postcrafts.</h1>
                            </div>
                        </h1>

                        <p className="mt-8 text-base text-black sm:text-xl">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>

                        <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                            <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-secondary hover:bg-secondary_lite focus:bg-secondary_lite" role="button"> Start exploring </a>

                            <a href="#" title="" className="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80">
                                <IoPlayCircleOutline className="text-2xl mr-3 text-secondary" />
                                Watch video
                            </a>
                        </div>
                    </div>

                    <div>
                        <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    </div>

)

export const Hero3 = () => (
    <div className="relative">
        <header className="absolute inset-x-0 top-0 z-10 w-full">
            <div className="px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    <div className="flex-shrink-0">
                        <Link href="#" title="" className="flex">
                            <img className="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/logo.svg" alt="" />
                        </Link>
                    </div>

                    <Button className="inline-flex p-2 transition-all duration-200 rounded-md lg:hidden focus:bg-neutral hover:bg-neutral">
                        <IoMenuOutline className="text-2xl" />
                    </Button>

                    <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
                        <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Features </a>

                        <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Solutions </a>

                        <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Resources </a>

                        <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Pricing </a>

                        <a href="#" title="" className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold transition-all duration-200 rounded-full bg-primary text-white hover:bg-primary_lite focus:bg-primary_lite" role="button"> Try for free </a>
                    </div>
                </div>
            </div>
        </header>

        <section className="  overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
                <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
                    <div className="absolute bottom-0 right-0 hidden lg:block">
                        <img className="object-contain w-auto h-48" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png" alt="" />
                    </div>

                    <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
                        <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-8xl">
                            Get it done.<br />
                            Fast, Easy.
                        </h1>
                        <p className="mt-8 text-xl text-black">We help you to make your remote work life easier. Build a distruction free working experience.</p>

                        <form action="#" method="POST" className="max-w-xl mx-auto mt-8 bg-white lg:mx-0 sm:bg-transparent lg:mt-12 rounded-xl">
                            <div className="p-4 sm:p-2 sm:bg-white sm:border-2 sm:border-transparent sm:rounded-full sm:focus-within:border-primary sm:focus-within:ring-1 sm:focus-within:ring-primary">
                                <div className="flex flex-col items-start sm:flex-row">
                                    <div className="flex-1 w-full min-w-0">
                                        <div className="relative text-gray-400 focus-within:text-gray-600">
                                            <label htmlFor="email" className="sr-only"></label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Enter email to get started"
                                                className="block w-full px-4 py-4 text-base text-center text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-full sm:text-left focus:border-transparent focus:ring-0 caret-primary"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-primary border border-transparent rounded-full sm:w-auto sm:ml-4 sm:mt-0 hover:bg-primary_lite focus:bg-primary_lite">
                                        Try 14 days free
                                    </button>
                                </div>
                            </div>
                        </form>
                        <p className="mt-5 text-base text-black">Instant access . No credit card required</p>
                    </div>

                    <div className="absolute right-0 z-10 -bottom-16 lg:top-24 lg:-left-20">
                        <img className="w-32 h-32 md:w-40 md:h-40" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/circular-text.png" alt="" />
                    </div>
                </div>

                <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
                    <div className="absolute inset-0">
                        <img className="object-cover w-full h-full scale-150" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/man-working-on-laptop.jpg" alt="" />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                    <div className="absolute bottom-0 left-0">
                        <div className="p-4 sm:p-6 lg:p-8">
                            <div className="flex items-center">
                                <svg className="w-10 h-10 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
                                </svg>
                                <h2 className="font-bold text-white text-7xl ml-2.5">395</h2>
                            </div>
                            <p className="max-w-xs mt-1.5 text-xl text-white">Professionals have organized their desk via PostCra</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

)

export const Hero4 = () => (
    <div className={'bg-white'}>
        <header className={''}>
            <div className="px-4 mx-auto sm:px-6 lg:px-8">
                <div className='flex items-center justify-between h-16 lg:h-20'>
                    <div className="flex-shrink-0">
                        <a href="#" title="" className="flex">
                            <img className="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/logo.svg" alt="" />
                        </a>
                    </div>
                    <Button className="inline-flex p-2 transition-all duration-200 rounded-md lg:hidden focus:bg-neutral hover:bg-neutral">
                        <IoMenuOutline className="text-2xl" />
                    </Button>

                    <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
                        <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Features </a>

                        <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Servies </a>

                        <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Contact </a>

                        <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> About </a>

                        <a href="#" title="" className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold transition-all duration-200 rounded-xl bg-primary text-white hover:bg-primary_lite focus:bg-primary_lite" role="button"> Join Now </a>
                    </div>
                </div>
            </div>
        </header>
        <section className="py-10 sm:py-16 lg:py-24">
            <div className={'px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'}>
                <div className='grid items-center grid-cols-1 gap-12 lg:grid-cols-2'>
                    <div>
                        <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                            Get meaningful feedbacks on your code
                        </h1>
                        <p className="mt-8 text-base text-black sm:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem, suscipit asperiores eum placeat natus facere atque quae commodi voluptatum reprehenderit, numquam neque impedit minima ratione! Excepturi modi quia at.</p>
                        <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                            <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-primary hover:bg-primary_lite focus:bg-primary_lite" role="button"> Learn More </a>


                        </div>
                    </div>
                    <div>
                        <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    </div>
)



export const Hero5 = () => {

    const [state, setState] = useState(false)

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Features", path: "javascript:void(0)" },
        { title: "Integrations", path: "javascript:void(0)" },
        { title: "Customers", path: "javascript:void(0)" },
        { title: "Pricing", path: "javascript:void(0)" }
    ]

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            // if (!target.closest(".menu-btn")) setState(false);
        };
    }, [])


    const Brand = () => (
        <div className="flex items-center justify-between py-5 md:block">
            <Link href="/">
                <img
                    src="https://www.floatui.com/logo-dark.svg"
                    width={120}
                    height={50}
                    alt="Lacrose UI logo"
                />
            </Link>
            <div className="md:hidden">
                <Button className="menu-btn text-neutral hover:text-neutral_lite"
                    onClick={() => setState(!state)}
                >
                    {
                        state ? (
                            <IoCloseOutline  />
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )
                    }
                </Button>
            </div>
        </div>
    )

    return (
        <div className="bg-gray-900">
            <header>
                <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
                    <Brand />
                </div>
                <nav className={`pb-5 md:text-sm ${state ? "absolute z-20 top-0 inset-x-0 bg-gray-800 rounded-xl mx-2 mt-2 md:mx-0 md:mt-0 md:relative md:bg-transparent" : ""}`}>
                    <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                        <Brand />
                        <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                            <ul className="flex-1 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                                {
                                    navigation.map((item, idx) => {
                                        return (
                                            <li key={idx} className="text-neutral hover:neutral_lite">
                                                <Link href={item.path} className="block">
                                                    {item.title}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                                <li>
                                    <Link href="javascript:void(0)" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-primary hover:bg-primary_lite active:bg-primary_lite duration-150 rounded-full md:inline-flex">
                                        Get started
                                        <IoArrowForwardOutline className='text-xl mr-2' />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <section className="relative">
                <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
                    <div className="space-y-5 max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl text-white font-extrabold mx-auto md:text-5xl">
                            Build and scale up your startup with the best tools
                        </h2>
                        <p className="max-w-2xl mx-auto text-neutral">
                            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                        </p>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="justify-center items-center gap-x-3 sm:flex">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2.5 text-gray-400 bg-neutral focus:bg-neural_lite duration-150 outline-none rounded-lg shadow sm:max-w-sm sm:w-auto"
                            />
                            <Button className="flex items-center justify-center gap-x-2 py-2.5 px-4 mt-3 w-full text-sm text-white font-medium bg-primary hover:bg-primary_lite active:bg-primary_lite duration-150 rounded-lg sm:mt-0 sm:w-auto">
                                Get started
                                <IoArrowForwardOutline className='text-xl mr-2' />
                            </Button>
                        </form>
                        <div className="flex justify-center items-center gap-x-4 text-gray-400 text-sm">
                            <div className="flex">
                                <IoStarOutline className="text-xl" />
                                <IoStarOutline className="text-xl" />
                                <IoStarOutline className="text-xl" />
                                <IoStarOutline className="text-xl" />
                                <IoStarOutline className="text-xl" />
                            </div>
                            <p><span className="text-gray-100">5.0</span> by over 200 users</p>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
            </section>
        </div>
    )
}