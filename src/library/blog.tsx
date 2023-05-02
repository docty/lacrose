import React from "react";
import Image from 'next/image';

export const Blog1 = () => (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Latest from blog</h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi modi sapiente quibusdam repellendus aliquam! Repellendus, iure voluptas similique reprehenderit ipsam doloremque eius itaque dignissimos id. Nam magni quaerat obcaecati earum?</p>
            </div>


            <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
                <div className="overflow-hidden bg-white rounded shadow">
                    <div className="p-5">
                        <div className="relative">
                            <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                                <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg" alt="" />
                            </a>

                            <div className="absolute top-4 left-4">
                                <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> Lifestyle </span>
                            </div>
                        </div>
                        <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> March 21, 2020 </span>
                        <p className="mt-5 text-2xl font-semibold">
                            <a href="#" title="" className="text-black"> How to build coffee inside your home in 5 minutes. </a>
                        </p>
                        <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        <a href="#" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                            Continue Reading
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="overflow-hidden bg-white rounded shadow">
                    <div className="p-5">
                        <div className="relative">
                            <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                                <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-2.jpg" alt="" />
                            </a>

                            <div className="absolute top-4 left-4">
                                <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> Marketing </span>
                            </div>
                        </div>
                        <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> April 04, 2020 </span>
                        <p className="mt-5 text-2xl font-semibold">
                            <a href="#" title="" className="text-black"> Ho7 Tips to run your remote team faster and better. </a>
                        </p>
                        <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        <a href="#" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                            Continue Reading
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="overflow-hidden bg-white rounded shadow">
                    <div className="p-5">
                        <div className="relative">
                            <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                                <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg" alt="" />
                            </a>

                            <div className="absolute top-4 left-4">
                                <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> Productivity </span>
                            </div>
                        </div>
                        <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> May 12, 2020 </span>
                        <p className="mt-5 text-2xl font-semibold">
                            <a href="#" title="" className="text-black"> 5 Productivity tips to write faster at morning. </a>
                        </p>
                        <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        <a href="#" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                            Continue Reading
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

)

export const Blog2 = () => (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Latest from blog</h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
            </div>

            <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
                <div>
                    <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                        <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-1.jpg" alt="" />
                    </a>
                    <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9"> Technology </span>
                    <p className="mt-6 text-xl font-semibold">
                        <a href="#" title="" className="text-black"> How to mange your remote team? </a>
                    </p>
                    <p className="mt-4 text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                    <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase"> Martin Jones . June 12, 2021 </span>
                </div>

                <div>
                    <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                        <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-2.jpg" alt="" />
                    </a>
                    <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9"> Marketing </span>
                    <p className="mt-6 text-xl font-semibold">
                        <a href="#" title="" className="text-black"> 6 Product launching emails you want to use on next campaign. </a>
                    </p>
                    <p className="mt-4 text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                    <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase"> Martin Jones . June 12, 2021 </span>
                </div>

                <div>
                    <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                        <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-3.jpg" alt="" />
                    </a>
                    <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9"> Marketing </span>
                    <p className="mt-6 text-xl font-semibold">
                        <a href="#" title="" className="text-black"> Learn from the best: 7 email marketing ideas you can use </a>
                    </p>
                    <p className="mt-4 text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                    <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase"> Martin Jones . June 12, 2021 </span>
                </div>
            </div>
        </div>
    </section>

)

export const Blog3 = () => (
    <section className="py-10 bg-gray-900 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Stories from blog</h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-200">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
            </div>

            <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full lg:gap-14">
                <div className="flex flex-col overflow-hidden bg-white shadow-md rounded-xl">
                    <div className="flex flex-col justify-between flex-1 px-5 py-6">
                        <div className="flex-shrink-0">
                            <span className="block text-xs font-semibold tracking-widest text-orange-500 uppercase"> Lifestyle </span>
                        </div>

                        <div className="flex-1 mt-28">
                            <p className="text-2xl font-semibold">
                                <a href="#" title="" className="text-black"> Power of habit: How to learn anything in 30 days. </a>
                            </p>
                            <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>
                    </div>

                    <div className="border-t border-gray-200">
                        <div className="flex">
                            <div className="flex items-center flex-1 px-6 py-5">
                                <img className="object-cover w-8 h-8 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/3/avatar-1.jpg" alt="" />
                                <span className="flex-1 block min-w-0 ml-3 text-base font-semibold text-gray-900 truncate"> Wade Warren </span>
                            </div>

                            <a href="#" title="" className="inline-flex items-center flex-shrink-0 px-4 py-5 text-base font-semibold transition-all duration-200 bg-white border-l border-gray-200 hover:bg-blue-600 hover:text-white">
                                Read more
                                <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col overflow-hidden bg-white shadow-md rounded-xl">
                    <div className="flex flex-col justify-between flex-1 px-5 py-6">
                        <div className="flex-shrink-0">
                            <span className="block text-xs font-semibold tracking-widest text-orange-500 uppercase"> Technology </span>
                        </div>

                        <div className="flex-1 mt-28">
                            <p className="text-2xl font-semibold">
                                <a href="#" title="" className="text-black"> 10 Zoom hacks you can do for productive meetings. </a>
                            </p>
                            <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>
                    </div>

                    <div className="border-t border-gray-200">
                        <div className="flex">
                            <div className="flex items-center flex-1 px-6 py-5">
                                <img className="object-cover w-8 h-8 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/3/avatar-2.jpg" alt="" />
                                <span className="flex-1 block min-w-0 ml-3 text-base font-semibold text-gray-900 truncate"> Leslie Alexander </span>
                            </div>

                            <a href="#" title="" className="inline-flex items-center flex-shrink-0 px-4 py-5 text-base font-semibold transition-all duration-200 bg-white border-l border-gray-200 hover:bg-blue-600 hover:text-white">
                                Read more
                                <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col overflow-hidden bg-white shadow-md rounded-xl">
                    <div className="flex flex-col justify-between flex-1 px-5 py-6">
                        <div className="flex-shrink-0">
                            <span className="block text-xs font-semibold tracking-widest text-orange-500 uppercase"> Marketing </span>
                        </div>

                        <div className="flex-1 mt-28">
                            <p className="text-2xl font-semibold">
                                <a href="#" title="" className="text-black"> 6 Product launching emails you want to use next. </a>
                            </p>
                            <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>
                    </div>

                    <div className="border-t border-gray-200">
                        <div className="flex">
                            <div className="flex items-center flex-1 px-6 py-5">
                                <img className="object-cover w-8 h-8 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/3/avatar-3.jpg" alt="" />
                                <span className="flex-1 block min-w-0 ml-3 text-base font-semibold text-gray-900 truncate"> Jenny Wilson </span>
                            </div>

                            <a href="#" title="" className="inline-flex items-center flex-shrink-0 px-4 py-5 text-base font-semibold transition-all duration-200 bg-white border-l border-gray-200 hover:bg-blue-600 hover:text-white">
                                Read more
                                <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

)

export const Blog4 = () => (
    <section className="  py-10 sm:py-16 lg:py-24">

    </section>
)