import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from './HeroBanner.module.css'

const HeroBanner = ({ text, showScroller }) => (
  <div className={` pb-6 lg:h-160 ${styles.heroBanner}`}>
    <h1 className="text-2xl leading-10 pt-16 pb-12 px-9  max-w-5xl text-white m-auto text-center lg:pt-28 lg:leading-20 lg:text-6xl lg:px-0">
      {text}
    </h1>
    <div className="text-center">
      <div>
        <Link href="/">
          <a className="bg-transparent text-violet-950 mt-12 w-[251px] px-6 py-4 font-medium text-lg bg-amber-300 border inline-block">
            Բացահայտել պատմությունները
          </a>
        </Link>
      </div>
      <div className="pt-28 hidden lg:block">
        {showScroller ? (
          <Link href="/">
            <a
              className={` inline-block  pt-2 w-16 h-10 rounded-[100px] ${styles.scrollVector}`}
            >
              <Image
                src="/img/vector.svg"
                width="30px"
                height="15px"
                alt={'Vector'}
              />
            </a>
          </Link>
        ) : (
          ''
        )}
      </div>
    </div>
  </div>
)

export default HeroBanner
