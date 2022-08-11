import React from "react";
import Image from 'next/image'


const Header = () => (

    <header className="bg-white flex justify-center">
        <div className="container grid grid-cols-9">
            <a href="#" className="flex items-center  col-span-2 col-start-1">
                <Image src="/img/logo.svg" width="144px" height="62px" />
            </a>
            <button data-collapse-toggle="navbar-default" type="button"
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"></path>
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto col-span-5 col-start-5" id="navbar-default">
                <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a href="#"
                           className="text-navbar-color text-base"
                           aria-current="page">Նախագիծ</a>
                    </li>
                    <li>
                        <a href="#"
                           className="text-navbar-color text-base">
                            Կանայք և պատմություններ
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className=" text-navbar-color text-base">
                            Հետադարձ կապ
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>

)

export default Header