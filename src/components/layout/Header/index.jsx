import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <header className="bg-white py-5 pr-[30px] pb-5 pl-6 md:px-[140px] md:pt-[18px] md:pb-[26px]">
      <nav className="bg-white border-gray-200 ">
        <div className="flex flex-wrap justify-between items-center">
          <Link
            href="/"
            className="flex items-center w-[84px] h-[60px] md:w-[144px] h-[62px]"
          >
            <Image
              src="/img/logo.svg"
              width="144px"
              height="62px"
              alt={'Logo'}
            />
          </Link>
          <div className="flex items-center lg:hidden">
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              onClick={handleClick}
              className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden "
            >
              <Image
                src="/img/menuIcon.svg"
                width="36px"
                height="24px"
                alt={'Logo'}
              />
            </button>
          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border md:bg-transparent md:border-transparent	 md:flex-row  md:space-x-8 md:mt-0 md:text-sm">
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
                <Link href="/contact">
                  <a className="text-violet-950 text-base">Հետադարձ կապ</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full fixed top-0 left-0 h-screen z-10 bg-violet-850`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full h-full lg:items-center items-start  flex flex-col lg:h-auto ">
            <div className="flex  justify-between items-center w-full  pt-5 pr-[40px] pl-6  max-w-screen-xl">
              <Link href="/" className="flex items-center">
                <Image
                  src="/img/logo-white.svg"
                  width="84px"
                  height="40px"
                  alt={'Logo'}
                />
              </Link>
              <div className="flex items-center lg:hidden">
                <button
                  data-collapse-toggle="mobile-menu-2"
                  type="button"
                  onClick={handleClick}
                  className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden "
                >
                  <Image
                    src="/img/closeBlack.svg"
                    width="23px"
                    height="23px"
                    alt={'Logo'}
                  />
                </button>
              </div>
            </div>
            <ul className=" px-7 w-full  flex flex-col justify-center items-center h-full ">
              <li>
                <Link href="/about">
                  <a className="text-white text-xl font-semibold">Նախագիծ</a>
                </Link>
              </li>
              <li className={`mt-8`}>
                <Link href="/women">
                  <a className="text-white text-xl font-semibold">
                    Կանայք և պատմություններ
                  </a>
                </Link>
              </li>
              <li className={`mt-8`}>
                <Link href="/contact">
                  <a className="text-white text-xl font-semibold">
                    Հետադարձ կապ
                  </a>
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
