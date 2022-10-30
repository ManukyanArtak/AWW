import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => (
  <footer
    className="p-4 w-full  md:p-6 bg-violet-950
        flex
        flex-col
        items-center"
  >
    <div
      className={`mt-2  w-20 h-10 lg:mt-6 lg:w-50 lg:h-22`}
      //w-10
    >
      <Image
        src="/img/logo-white.svg"
        width="202px"
        height="88px"
        alt={'white logo'}
      />
    </div>
    <ul className="lg:flex flex-wrap mt-2 text-white">
      <li className={`pl-5 pr-5 text-center pt-4`}>
        <Link href="/about" passHref>
          <a>Նախագիծ</a>
        </Link>
      </li>
      <li className={`pl-5 pr-5 text-center pt-4`}>
        <Link href="/women" passHref>
          <a>Կանայք և Պատմություններ</a>
        </Link>
      </li>
      <li className={`pl-5 pr-5 text-center pt-4`}>
        <Link href="/contact" passHref>
          <a>Հետադարձ Կապ</a>
        </Link>
      </li>
    </ul>

    <ul className="flex flex-wrap  mt-3 pt-16">
      <li className={`pl-4 pr-4 h-15`}>
        <Image
          src="/img/linkdin.svg"
          width="50px"
          height="50px"
          alt={'Linkedin'}
        />
      </li>
      <li className={`pl-4 pr-4 h-15`}>
        <Image
          src="/img/facebook.svg"
          width="50px"
          height="50px"
          alt={'Facebook'}
        />
      </li>
      <li className={`pl-4 pr-4 h-15`}>
        <Image
          src="/img/instagram.svg"
          width="50px"
          height="50px"
          alt={'Instagram'}
        />
      </li>
    </ul>

    <div className={`text-white pt-12 hidden lg:block`}>
      <span>info@armwonderwomens.co</span>
    </div>
    <div className={`mt-2`}>
      <Image
        src={'/img/footer_logo.png'}
        width="260"
        height="80"
        alt={'Footer logo'}
      />
    </div>

    <div className={`text-white pt-4 lg:pt-20`}>
      <span className="text-xs">Copyright © 2021, All Rights Reserved.</span>
    </div>
  </footer>
)

export default Footer
