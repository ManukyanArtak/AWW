import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from './HeroBanner.module.css'

const HeroBanner = ({ text }) => (
  <div className={`h-160 ${styles.heroBanner}`}>
    <h1 className="text-6xl max-w-5xl text-white m-auto text-center pt-28 pb-28 leading-20">
      {text}
    </h1>
    <div className="text-center">
      <div>
        <Link href="/">
          <a className="bg-transparent bg-amber-300 font-semibold  py-2 px-4 border inline-block">
            Բացահայտել նրանց
          </a>
        </Link>
      </div>
      <div className="pt-28">
        <Link href="/">
          <a
            className={` inline-block pt-2 w-16 h-10 rounded-[100px] ${styles.scrollVector}`}
          >
            <Image
              src="/img/vector.svg"
              width="30px"
              height="15px"
              alt={'Vector'}
            />
          </a>
        </Link>
      </div>
    </div>
  </div>
)

export default HeroBanner
