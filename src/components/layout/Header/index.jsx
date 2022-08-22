import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <header className="bg-white p-4">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://flowbite.com" className="flex items-center">
            <Image
              src="/img/logo.svg"
              width="144px"
              height="62px"
              alt={'Logo'}
            />
          </a>
          <div className="flex items-center lg:hidden">
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              onClick={handleClick}
              className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden "
            >
              <Image
                src="/img/menuIcon.svg"
                width="48px"
                height="48px"
                alt={'Logo'}
              />
            </button>
          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border  md:space-x-8 md:mt-0 md:text-sm">
              <li>
                <Link href="/about">
                  <a className="text-violet-950 text-base">Նախագիծ</a>
                </Link>
              </li>
              <li>
                <Link href="/women">
                  <a className="text-violet-950-color text-base">
                    Կանայք և պատմություններ
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/women">
                  <a className="text-violet-950 text-base">Հետադարձ կապ</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full fixed top-0 left-0 h-screen z-10 bg-violet-800`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto ">
            <div className="flex  justify-between items-center mx-auto max-w-screen-xl">
              <a href="https://flowbite.com" className="flex items-center">
                <Image
                  src="/img/logo.svg"
                  width="144px"
                  height="62px"
                  alt={'Logo'}
                />
              </a>
              <div className="flex items-center lg:hidden">
                <button
                  data-collapse-toggle="mobile-menu-2"
                  type="button"
                  onClick={handleClick}
                  className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden "
                >
                  <Image
                    src="/img/closeBlack.svg"
                    width="48px"
                    height="48px"
                    alt={'Logo'}
                  />
                </button>
              </div>
            </div>
            <ul className=" p-4 ">
              <li>
                <Link href="/about">
                  <a className="text-white text-base">Նախագիծ</a>
                </Link>
              </li>
              <li>
                <Link href="/women">
                  <a className="text-white text-base">
                    Կանայք և պատմություններ
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/women">
                  <a className="text-white text-base">Հետադարձ կապ</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
