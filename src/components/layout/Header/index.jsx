import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Toolbar from './Toolbar'

const Header = () => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <header className="bg-white py-5 pr-[30px] pb-5 pl-6 lg:px-[140px] lg:pt-[18px] lg:pb-[26px]">
      <nav className="bg-white border-gray-200 ">
        <div className="flex flex-wrap justify-between items-center">
          <Link
            href="/"
            className=" flex items-center w-[84px] h-[60px] lg:w-[144px] h-[62px]"
            passHref
          >
            <Image
              src="/img/logo.svg"
              width="144px"
              height="62px"
              alt={'Logo'}
              className={'cursor-pointer'}
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
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border lg:bg-transparent lg:border-transparent	 lg:flex-row  lg:space-x-8 lg:mt-0 lg:text-sm">
              <li>
                <Link href="/women" passHref>
                  <a className="text-violet-950-color text-base">
                    Կանայք և պատմություններ
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  <a className="text-violet-950 text-base">Հետադարձ կապ</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {active ? <Toolbar handleClick={handleClick} /> : ''}
      </nav>
    </header>
  )
}

export default Header
