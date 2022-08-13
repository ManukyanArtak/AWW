import React from 'react'
import Image from 'next/image'

const WomanCard = ({ className, name, address, profession, lifeDuration }) => (
  <div className={`max-w-[370px]`}>
    <div
      className={`grid grid-cols-2 gap-primary pt-10 lg:gap-y-0 lg:grid-cols-1 lg:pt-0 antialiased${
        className ? ` ${className}` : ''
      }`}
    >
      <Image
        height={1}
        width={1}
        alt="Image Alt"
        src="/img/women.png"
        layout="responsive"
        objectFit="cover"
      />
      <div className="lg:margin-t-primary-xs">
        <h4 className="text-gray-280 margin-b-primary-xs lg:margin-y-primary-xs lg:leading-7">
          fdfdfdfdfd
        </h4>
        <div className="truncate-lines-4 overflow-hidden">
          <a className="text-xl md:text-2xl text-blue-550 hover:underline">
            yreyrfh
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default WomanCard
