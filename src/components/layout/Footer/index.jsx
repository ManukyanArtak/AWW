import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => (
  <footer
    className=" p-4 w-full  md:p-6 dark:bg-gray-800
        flex
        flex-col
        items-center"
  >
    <div>
      <Image src="/img/logo-white.svg" width="50px" height="50px" />
    </div>
    <ul className="flex flex-wrap  mt-3">
      <li>
        <Link href="/">
          <a>Նախագիծ</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Կանայք և Պատմություններ</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Հետադարձ Կապ</a>
        </Link>
      </li>
    </ul>

    <ul className="flex flex-wrap  mt-3">
      <li>
        <Image src="/img/linkdin.svg" width="50px" height="50px" />
      </li>
      <li>
        <Image src="/img/facebook.svg" width="50px" height="50px" />
      </li>
      <li>
        <Image src="/img/instagram.svg" width="50px" height="50px" />
      </li>
    </ul>
    <div>
      <span>info@armwonderwomens.co</span>
    </div>
    <div>
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        Copyright © 2021, All Rights Reserved.
      </span>
    </div>
  </footer>
)

export default Footer
