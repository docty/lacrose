import Image from "next/image"

export const CallToAction1 = () => {

    return (
        <section className="bg-blue-600 2xl:py-24 2xl:bg-white">
            <div className="px-4 mx-auto overflow-hidden bg-blue-600 max-w-7xl sm:px-6 lg:px-8">
                <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
                    <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
                        <div>
                            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">Use mobile app for better performance</h2>
                            <p className="mt-4 text-base text-gray-50">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                            <div className="flex flex-row items-center mt-8 space-x-4 lg:mt-12">
                                <a href="#" title="" className="flex" role="button">
                                    <img className="w-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-app-store.svg" alt="" />
                                </a>

                                <a href="#" title="" className="flex" role="button">
                                    <img className="w-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-play-store.svg" alt="" />
                                </a>
                            </div>
                        </div>

                        <div className="relative px-12">
                            <svg className="absolute inset-x-0 bottom-0 left-1/2 -translate-x-1/2 -mb-48 lg:-mb-72 text-yellow-300 w-[460px] h-[460px] sm:w-[600px] sm:h-[600px]" fill="currentColor" viewBox="0 0 8 8">
                                <circle cx="4" cy="4" r="3" />
                            </svg>
                            <img className="relative w-full max-w-xs mx-auto -mb-60 lg:-mb-64" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/iphone-mockup.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )

}


export const CallToAction2 = () => {

    return (
        <section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
            <div className="absolute inset-0">
                <img className="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/5/girl-working-on-laptop.jpg" alt="" />
            </div>

            <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

            <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

            <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
                    <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Get full access to Celebration</h2>
                    <p className="mt-4 text-base text-gray-200">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam.</p>

                    <form action="#" method="POST" className="mt-8 lg:mt-12">
                        <div className="flex flex-col items-center sm:flex-row sm:justify-center">
                            <div className="flex-1 w-full min-w-0 px-4 sm:px-0">
                                <div className="relative text-gray-400 focus-within:text-gray-600">
                                    <label htmlFor="email" className="sr-only"></label>
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" stroke-width="1.5" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                        </svg>
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter email address"
                                        className="block w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-gray-200 rounded-md sm:rounded-r-none caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                                        required
                                    />
                                </div>
                            </div>

                            <button type="submit" className="inline-flex items-center justify-center flex-shrink-0 w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md sm:mt-0 sm:rounded-l-none sm:w-auto hover:bg-blue-700 focus:bg-blue-700">
                                Get instant access
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    )

}


export const CallToAction3 = () => {

    return (

        <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-left sm:text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Get full access to Celebration</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>

                <div className="mt-8 space-y-8 sm:space-x-12 sm:mt-12 sm:flex sm:items-start sm:justify-center sm:space-y-0 md:space-x-20 lg:mt-20">
                    <div className="flex items-start">
                        <svg className="flex-shrink-0 text-orange-400 w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <div className="ml-4">
                            <h3 className="text-xl font-semibold text-black">130+ Blocks</h3>
                            <p className="mt-1.5 text-base text-gray-600">Ready to use</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <svg className="flex-shrink-0 text-orange-400 w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <div className="ml-4">
                            <h3 className="text-xl font-semibold text-black">14 Pages</h3>
                            <p className="mt-1.5 text-base text-gray-600">Make it live</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <svg className="flex-shrink-0 text-orange-400 w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <div className="ml-4">
                            <h3 className="text-xl font-semibold text-black">Easy Access</h3>
                            <p className="mt-1.5 text-base text-gray-600">Anyone can use</p>
                        </div>
                    </div>
                </div>

                <form action="#" method="POST" className="max-w-xl mx-auto mt-12">
                    <div className="sm:p-2 sm:bg-white sm:border-2 sm:border-transparent sm:rounded-full sm:focus-within:border-blue-600 sm:focus-within:ring-1 sm:focus-within:ring-blue-600">
                        <div className="flex flex-col items-start sm:flex-row sm:justify-center">
                            <div className="flex-1 w-full min-w-0">
                                <div className="relative text-gray-400 focus-within:text-gray-600">
                                    <label htmlFor="email" className="sr-only"></label>
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                                        </svg>
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter email address"
                                        className="block w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-full focus:border-transparent focus:ring-0 caret-blue-600"

                                    />
                                </div>
                            </div>

                            <button type="submit" className="inline-flex items-center justify-center w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full sm:ml-4 sm:mt-0 sm:w-auto hover:bg-blue-700 focus:bg-blue-700">
                                Get instant access
                                <svg className="w-5 h-5 ml-3 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>

                <div className="flex items-center justify-start mt-8 sm:justify-center sm:px-0">
                    <svg className="flex-shrink-0 w-5 h-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                    <span className="ml-2 text-sm text-gray-600"> Your data is complely secured with us. We don’t share with anyone. </span>
                </div>
            </div>
        </section>

    )

}

export const CallToAction4 = () => (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Get full access to Celebration</h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>

            <form action="#" method="POST" className="max-w-xl mx-auto mt-12">
                <div className="flex flex-col items-center sm:flex-row sm:justify-center">
                    <div className="flex-1 w-full min-w-0 px-4 sm:px-0">
                        <label htmlFor="email" className="sr-only"></label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter email to get started"
                            className="block w-full px-4 py-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-md caret-indigo-600 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                            required
                        />
                    </div>

                    <button type="submit" className="inline-flex items-center justify-center w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md sm:ml-4 sm:mt-0 sm:w-auto hover:bg-indigo-700 focus:bg-indigo-700">
                        Get instant access
                        <svg className="w-5 h-5 ml-3 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </form>

            <div className="flex items-center justify-center px-8 mt-8 sm:px-0">
                <svg className="flex-shrink-0 w-5 h-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="ml-2 text-sm text-gray-600"> Your data is complely secured with us. We don’t share with anyone. </span>
            </div>
        </div>
    </section>

)

export const CallToAction5 = () => (
    <section className="pt-10 bg-amber-400 2xl:py-24 2xl:bg-white sm:pt-16 md:pt-0">
        <div className="px-4 mx-auto rounded-md bg-amber-400 max-w-7xl sm:px-6 lg:px-8">
            <div className="2xl:pl-24">
                <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 2xl:gap-x-20">
                    <div className="text-center md:py-16 xl:py-24 md:text-left">
                        <blockquote>
                            <p className="text-2xl font-semibold leading-relaxed text-gray-900">“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.”</p>
                        </blockquote>
                        <div className="mt-6 sm:flex sm:items-baseline sm:justify-center md:justify-start">
                            <p className="text-base font-semibold text-gray-900">Jenny Wilson</p>
                            <p className="mt-2 text-base text-gray-700 sm:mt-0 sm:ml-2">Project Manager at Microsoft</p>
                        </div>
                        <p className="mt-12 text-base text-gray-900 lg:mt-20">Want to see Celebration in action?</p>
                        <a href="#" title="" className="inline-flex items-center justify-center px-8 py-4 mt-4 text-base font-semibold text-white transition-all duration-200 bg-black rounded-md hover:opacity-80 focus:opacity-80" role="button"> Create your first website </a>
                    </div>

                    <div className="relative">
                        <img className="md:absolute md:bottom-0 md:scale-110 md:origin-bottom-right lg:scale-75 2xl:scale-100 2xl:-mt-20" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/11/smiling-man.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>

)

export const CallToAction6 = () => (
    <section className="bg-black 2xl:py-24 2xl:bg-gray-50">
        <div className="px-4 mx-auto bg-black max-w-7xl sm:px-6 lg:px-8 2xl:rounded-xl">
            <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
                <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
                    <div className="lg:order-2 2xl:-mr-24">
                        <img className="w-full shadow-xl rounded-xl" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/6/dashboard-screenshot.png" alt="" />
                    </div>

                    <div className="lg:order-1">
                        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-snug">Are you ready to <br className="hidden xl:block" />join Celebration?</h2>

                        <ul className="grid grid-cols-1 mt-4 sm:mt-10 sm:grid-cols-2 gap-x-10 xl:gap-x-16 gap-y-4 xl:gap-y-6">
                            <li className="flex items-center">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                <span className="ml-3 font-medium text-white"> 120+ Coded Blocks </span>
                            </li>

                            <li className="flex items-center">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                <span className="ml-3 font-medium text-white"> Free Icons Included </span>
                            </li>

                            <li className="flex items-center">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                <span className="ml-3 font-medium text-white"> Made with TailwindCSS </span>
                            </li>

                            <li className="flex items-center">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                <span className="ml-3 font-medium text-white"> Dark & Light Mode </span>
                            </li>

                            <li className="flex items-center">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                <span className="ml-3 font-medium text-white"> Edit & Customize Easily </span>
                            </li>

                            <li className="flex items-center">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                <span className="ml-3 font-medium text-white"> Get Free Support </span>
                            </li>
                        </ul>

                        <div className="flex flex-col items-start mt-8 sm:space-x-4 sm:flex-row sm:items-center lg:mt-12">
                            <a href="#" title="" className="inline-flex items-center justify-center px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700" role="button">
                                <svg className="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download Now
                            </a>

                            <a href="#" title="" className="inline-flex items-center justify-center px-4 py-4 mt-5 text-base font-semibold text-white transition-all duration-200 bg-transparent border border-white rounded-md sm:mt-0 hover:bg-white hover:text-black" role="button"> Explore UI Blocks </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

)

export const CallToAction7 = () => (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Get full access to Celebration</h2>
                <p className="mt-4 text-2xl font-medium">130+ Hand Crafted Coded Blocks</p>

                <div className="flex flex-col items-center justify-center px-16 mt-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row lg:mt-12 sm:px-0">
                    <a href="#" title="" className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md sm:w-auto hover:bg-blue-700 focus:bg-blue-700" role="button"> Try For Free </a>

                    <a href="#" title="" className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-black transition-all duration-200 bg-transparent border border-black rounded-md sm:w-auto hover:bg-black hover:text-white focus:bg-black focus:text-white" role="button">
                        <svg className="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Contact Sales
                    </a>
                </div>

                <p className="mt-6 text-base text-black">Already have an account? <a href="#" title="" className="text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Log in</a></p>
            </div>
        </div>
    </section>

)

export const CallToAction8 = () => (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center">
                <div className="flex items-center justify-center">
                    <div className="w-20 h-20 -mr-6 overflow-hidden bg-gray-300 rounded-full">
                        <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-1.jpg" alt="" />
                    </div>

                    <div className="relative overflow-hidden bg-gray-300 border-8 border-white rounded-full w-28 h-28">
                        <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/male-avatar-1.jpg" alt="" />
                    </div>

                    <div className="w-20 h-20 -ml-6 overflow-hidden bg-gray-300 rounded-full">
                        <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-2.jpg" alt="" />
                    </div>
                </div>

                <h2 className="mt-8 text-3xl font-bold leading-tight text-black lg:mt-12 sm:text-4xl lg:text-5xl">Join <span className="border-b-8 border-yellow-300">5,482</span> other developers</h2>
                <p className="max-w-xl mx-auto mt-6 text-xl text-gray-600 md:mt-10">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>

                <a href="#" title="" className="inline-flex items-center justify-center px-4 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:mt-12 hover:bg-blue-700 focus:bg-blue-700" role="button">
                    <svg className="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Get instant access
                </a>
            </div>
        </div>
    </section>

)

export const CallToAction9 = () => (
    <section className="py-10 bg-white sm:py-16 lg:py-20">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="text-center lg:flex lg:items-center lg:justify-between lg:text-left">
                <h2 className="text-4xl font-bold text-black lg:max-w-md">Get full access to Celebration kit</h2>

                <form action="#" method="POST" className="px-10 mt-8 lg:mt-0 lg:px-0">
                    <div className="sm:flex sm:justify-center lg:justify-end">
                        <div>
                            <label htmlFor="email" className="sr-only"></label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter email to get started"
                                className="block w-full px-4 py-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-gray-200 rounded-md sm:rounded-r-none caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                                required
                            />
                        </div>
                        <button type="submit" className="inline-flex items-center justify-center flex-shrink-0 w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md sm:mt-0 sm:rounded-l-none sm:w-auto hover:bg-blue-700 focus:bg-blue-700">
                            Get Started Free
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>

)

export const CallToAction10 = () => (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 gap-y-10">
                <div>
                    <img className="object-cover w-16 h-16 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/9/female-avatar-1.png" alt="" />
                    <blockquote>
                        <p className="mt-6 text-xl leading-relaxed text-black">“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.”</p>
                    </blockquote>
                    <p className="mt-6 text-base font-semibold text-black">Jenny Wilson</p>
                    <p className="mt-1 text-base text-gray-600">Project Manager at Microsoft</p>
                </div>

                <div>
                    <div className="overflow-hidden bg-white">
                        <div className="p-8 lg:px-12 lg:py-10">
                            <h3 className="text-2xl font-semibold text-black">Join 5,482 other developers</h3>
                            <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>

                            <a href="#" title="" className="flex items-center justify-center w-full px-4 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border-2 border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700" role="button">
                                Create your first website
                            </a>

                            <a href="#" title="" className="flex items-center justify-center w-full px-4 py-4 mt-4 text-base font-semibold text-black transition-all duration-200 bg-transparent border-2 border-black rounded-md hover:bg-black focus:bg-black hover:text-white focus:text-white" role="button">
                                Talk to sales
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

)

export const CallToAction11 = () => (
    <section className="py-10 bg-gradient-to-r from-fuchsia-600 to-blue-600 sm:py-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center sm:flex sm:items-center sm:justify-center sm:text-left">
                <h2 className="text-4xl font-bold text-white">Get full access to Celebration</h2>

                <a href="#" title="" className="inline-flex items-center justify-center flex-shrink-0 px-4 py-4 mt-8 text-base font-semibold text-gray-900 transition-all duration-200 bg-yellow-300 rounded-md sm:mt-0 sm:ml-8 lg:ml-16 hover:bg-yellow-400 focus:bg-yellow-400" role="button">
                    Get instant access
                </a>
            </div>
        </div>
    </section>

)

export const CallToAction12 = () => (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center">
                <svg className="mx-auto w-14 h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                </svg>
                <h2 className="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Download Celebration</h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
            </div>

            <div className="flex flex-col items-center justify-center mt-8 space-y-4 md:space-y-0 md:space-x-4 md:flex-row lg:mt-12">
                <a href="#" title="" className="inline-flex items-center justify-center px-4 py-4 text-black transition-all duration-200 border-2 border-black rounded-md hover:bg-black hover:text-white focus:bg-black focus:text-white" role="button">
                    <svg className="w-6 h-6 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z"
                        ></path>
                    </svg>
                    Download for Mac
                </a>

                <a href="#" title="" className="inline-flex items-center justify-center px-4 py-4 text-black transition-all duration-200 border-2 border-black rounded-md hover:bg-black hover:text-white focus:bg-black focus:text-white" role="button">
                    <svg className="w-6 h-6 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="m3 5.557 7.357-1.002.004 7.097-7.354.042L3 5.557zm7.354 6.913.006 7.103-7.354-1.011v-6.14l7.348.048zm.892-8.046L21.001 3v8.562l-9.755.077V4.424zm9.758 8.113-.003 8.523-9.755-1.378-.014-7.161 9.772.016z"></path>
                    </svg>
                    Download for Windows
                </a>

                <a href="#" title="" className="inline-flex items-center justify-center px-4 py-4 text-black transition-all duration-200 border-2 border-black rounded-md hover:bg-black hover:text-white focus:bg-black focus:text-white" role="button">
                    <svg className="w-6 h-6 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M20.9768 18.685C20.9368 18.5593 20.8715 18.443 20.785 18.3434C20.6984 18.2437 20.5925 18.1627 20.4736 18.1054C19.931 17.7948 19.582 17.4476 19.5161 17.153C19.4922 17.0377 19.4752 16.9212 19.4653 16.8039C19.4703 16.6358 19.4383 16.4686 19.3717 16.3142C19.305 16.1597 19.2054 16.0218 19.0797 15.91C18.9906 15.8471 18.891 15.8006 18.7855 15.7728C18.9791 15.1324 19.0413 14.4596 18.9685 13.7946C18.8033 12.4003 18.2418 11.0825 17.3504 9.99761C16.527 9.08952 15.2538 7.78526 15.2538 6.79529V4.04632C15.2538 3.23839 14.9329 2.46354 14.3616 1.89225C13.7903 1.32095 13.0154 1 12.2075 1C11.3996 1 10.6247 1.32095 10.0534 1.89225C9.48212 2.46354 9.16117 3.23839 9.16117 4.04632V8.05014C9.02896 8.74367 8.68219 8.80955 8.13734 9.56896C7.60061 10.2837 7.17223 11.0737 6.86602 11.9135C6.60206 12.7063 6.02427 13.5481 5.79278 14.1922C5.63449 14.595 5.60179 15.0363 5.699 15.458C5.58725 15.5899 5.48455 15.7291 5.39158 15.8748C5.3184 15.9963 5.23219 16.1095 5.13448 16.2124C4.95932 16.2659 4.77687 16.2917 4.59374 16.2888C4.21471 16.2556 3.83645 16.3605 3.52874 16.5843C3.26066 16.8712 3.31007 17.4494 3.36222 18.0611C3.39114 18.3021 3.40093 18.545 3.3915 18.7875C3.36128 19.0323 3.28358 19.2688 3.16276 19.4838C3.08771 19.6141 3.03513 19.756 3.00722 19.9038C2.97874 20.1256 3.03513 20.35 3.16509 20.5321C3.29505 20.7141 3.489 20.8404 3.70807 20.8855C4.21404 21.0653 6.08099 21.5324 6.71734 21.6746C6.87712 21.7184 7.03403 21.772 7.18717 21.8352C7.6342 22.0328 8.11257 22.15 8.60031 22.1815C8.84271 22.1918 9.08326 22.1351 9.29562 22.0178C9.50799 21.9005 9.684 21.727 9.80438 21.5164C9.88962 21.3757 9.9581 21.2255 10.0084 21.0689C11.5307 20.7937 13.0934 20.8348 14.5992 21.1897C14.7344 21.531 14.9747 21.8204 15.2854 22.0159C15.5325 22.1844 15.8248 22.2743 16.1239 22.2739C16.7358 22.2334 17.3095 21.9625 17.7297 21.5159C18.1877 21.0454 18.7163 20.6494 19.2965 20.342C19.6524 20.1965 20.6291 19.7299 20.8702 19.3228C20.9301 19.2292 20.9704 19.1244 20.9887 19.0148C21.0071 18.9052 21.003 18.793 20.9768 18.685V18.685ZM9.80438 6.78339C9.96358 6.50891 10.8108 5.80806 11.3676 5.80806C11.7004 5.84136 12.0193 5.95863 12.2944 6.14888C12.4341 6.23748 12.5836 6.30949 12.74 6.36343C12.8004 6.38036 12.8653 6.39545 12.9317 6.40918C13.1856 6.46819 13.4482 6.52949 13.5433 6.70837C13.5622 6.74446 13.5733 6.78408 13.5761 6.82471C13.5789 6.86535 13.5731 6.90611 13.5593 6.94442C13.4732 7.1435 13.3138 7.30187 13.1142 7.3868C12.9437 7.47986 12.7806 7.58601 12.6265 7.70429C12.2519 8.03834 11.7797 8.24286 11.2797 8.28757C11.0619 8.27077 10.8515 8.20139 10.6664 8.08538C10.4813 7.96937 10.3271 7.81018 10.217 7.62149C10.1284 7.50064 10.0267 7.39002 9.91371 7.29165C9.67628 7.10408 9.67811 7.00481 9.80438 6.78339ZM12.7505 3.8949C13.2995 3.8949 13.7464 4.53536 13.7464 5.32039C13.7484 5.60326 13.6858 5.88285 13.5634 6.1379C13.3952 6.05993 13.2183 6.00204 13.0364 5.96543H13.0296C13.1597 5.82008 13.2328 5.63256 13.2354 5.4375C13.2492 5.05963 13.0442 4.74489 12.778 4.73528C12.5117 4.72567 12.2834 5.02395 12.2697 5.40228C12.2676 5.47567 12.2741 5.54905 12.2889 5.62095C12.1225 5.53135 11.9467 5.46047 11.7647 5.4096C11.7647 5.3794 11.7564 5.3515 11.7564 5.32085C11.7541 4.53308 12.2002 3.8949 12.7505 3.8949ZM10.0912 4.12364C10.5487 4.08521 10.9654 4.59072 11.0213 5.25268C11.0254 5.30438 11.0245 5.3547 11.0213 5.40502C10.8962 5.43999 10.7745 5.48591 10.6576 5.54226C10.6613 5.49073 10.6602 5.43897 10.6544 5.38764C10.6004 5.05002 10.3666 4.80665 10.1328 4.84416C9.89907 4.88167 9.75268 5.18543 9.80666 5.52305C9.82867 5.68159 9.90006 5.82917 10.0107 5.94484C9.90045 6.03085 9.79752 6.11731 9.70968 6.20149C9.55194 5.95703 9.46036 5.67581 9.44389 5.38535C9.39265 4.72201 9.63328 4.16023 10.0912 4.12181V4.12364ZM9.41324 21.2789C8.99053 21.9651 8.22929 21.7451 7.35094 21.4098C7.1774 21.3384 6.99937 21.2785 6.81798 21.2304C6.20726 21.0932 4.34396 20.6279 3.86133 20.4568C3.46973 20.3196 3.44182 20.1197 3.46149 19.9632C3.48569 19.867 3.5231 19.7747 3.57266 19.6887C3.71855 19.4237 3.81176 19.1329 3.84714 18.8324C3.85975 18.5621 3.85011 18.2913 3.81832 18.0226C3.78493 17.6297 3.73415 17.0354 3.86407 16.8968C3.97158 16.782 4.34671 16.7595 4.62028 16.7463C4.90188 16.7663 5.18311 16.7026 5.42863 16.5633C5.56209 16.4342 5.67778 16.2879 5.77265 16.1282C5.91722 15.9123 6.11485 15.6159 6.27588 15.5898C6.29239 15.5874 6.30905 15.5862 6.32574 15.5861C6.5618 15.5861 6.86922 15.8405 7.15972 16.2824C7.24023 16.4041 7.36741 16.6173 7.52249 16.8771C7.96665 17.6645 8.46593 18.4196 9.01661 19.1366C9.70328 19.9211 9.82862 20.6014 9.41324 21.2766V21.2789ZM9.91646 19.6906C9.77557 19.3797 9.58831 19.092 9.36109 18.8374C9.31808 18.7884 9.26959 18.7299 9.22384 18.6704C9.31495 18.6775 9.4065 18.6648 9.49225 18.6332C9.578 18.6016 9.65591 18.5519 9.72066 18.4874C9.96815 18.1242 9.65478 17.513 9.24168 17.1841C8.82858 16.8552 7.83266 16.2513 7.26036 15.3999C7.07737 13.5673 8.4498 11.3051 9.15934 10.0337C9.59435 9.37565 9.80975 8.59669 9.77464 7.80859C9.80255 7.84245 9.83 7.87538 9.85927 7.91198C10.011 8.15519 10.2191 8.35826 10.466 8.50399C10.7129 8.64971 10.9912 8.73381 11.2774 8.74916C11.8746 8.70846 12.4419 8.47302 12.8923 8.07896C13.0268 7.97559 13.1687 7.88231 13.3169 7.7999C13.4623 7.72725 13.5955 7.63232 13.7117 7.51855C14.4371 8.86857 15.0834 10.2597 15.6472 11.6848C15.986 12.9328 16.1077 14.2296 16.0073 15.5189C15.5804 15.4731 15.2126 15.4457 15.0109 15.625C14.7716 15.8377 14.8069 16.3085 14.8407 16.7637C14.8476 16.8634 14.8549 16.9563 14.8572 17.0354C14.864 17.2641 14.8279 17.9073 14.7817 18.4568C14.4299 18.937 13.9698 19.3275 13.4389 19.5967C12.908 19.8659 12.3211 20.0062 11.7258 20.0062C11.1087 20.0111 10.4958 19.9033 9.91737 19.6883L9.91646 19.6906ZM20.4722 19.0917C20.0812 19.4561 19.6209 19.7381 19.1186 19.9207C18.4834 20.2503 17.9049 20.6791 17.4049 21.1911C17.2328 21.3594 16.3344 22.1701 15.5347 21.6376C14.7483 21.1133 14.8901 20.2972 15.0855 19.5735C15.1134 19.4696 15.1362 19.3818 15.1486 19.315C15.2481 18.5545 15.3045 17.789 15.3174 17.0221C15.3147 16.937 15.3073 16.8364 15.2996 16.7303C15.262 16.4776 15.2669 16.2205 15.3142 15.9695C15.562 15.933 15.8142 15.938 16.0603 15.9841C16.2177 16.0015 16.3733 16.0184 16.5091 16.0248L16.7511 16.0326C17.1995 16.0473 18.5636 16.0903 18.8006 16.2742C18.9575 16.3954 18.9809 16.556 19.0115 16.8529C19.0231 16.9879 19.0426 17.1222 19.0701 17.255C19.1931 17.8012 19.7782 18.2358 20.2476 18.5048C20.3769 18.5654 20.4789 18.6721 20.5335 18.804C20.543 18.8532 20.5426 18.9038 20.5322 18.9528C20.5218 19.0019 20.5017 19.0483 20.4731 19.0895L20.4722 19.0917Z"
                        />
                    </svg>
                    Download for Linux
                </a>
            </div>

            <p className="mt-6 text-base text-center text-gray-600">It takes only 2 minutes to setup on any device</p>
        </div>
    </section>

)