import Image from 'next/image'
import React from 'react'
import SectionTitle from '../SectionTitle'
import PageConstants from '../../../const'

const AboutBook = ({ className }) => (
  <div id={'book'} className={className}>
    <SectionTitle direction={'left'} />
    <div className={`container mx-auto grid grid-cols-4 lg:grid-cols-12 gap-6`}>
      <h2
        className={`text-xl font-bold lg:text-3xl lg:font-normal col-span-4 lg:col-span-6 col-start-1 row-start-1`}
      >
        Գրքի մասին
      </h2>
      <div className={`col-span-4 mt-8 lg:col-span-5 row-start-2 lg:mt-22`}>
        <Image
          src="/img/book.png"
          width="468px"
          height="539px"
          alt={'Book'}
        />
      </div>
      <div
        className={`col-span-4 mt-6 lg:col-start-7 lg:col-span-6 pr-16 row-start-3 lg:row-start-2 lg:mt-22`}
      >
        <div className={`mb-8`}>
          <p className={`text-base lg:text-lg`}>
            {PageConstants.global.aboutBook.text_1}
          </p>
          <br />
          <p className={`text-base lg:text-lg`}>
            {PageConstants.global.aboutBook.text_2}
          </p>
          <br />
          <p className={`text-base lg:text-lg`}>
            {PageConstants.global.aboutBook.text_3}
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default AboutBook
