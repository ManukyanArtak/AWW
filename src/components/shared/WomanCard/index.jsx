import React from 'react'
import Image from 'next/image'

const WomanCard = ({ className, name, address, profession, lifeDuration }) => (
  <div className={`max-w-[370px] ${className ? ` ${className}` : ''}`}>
    <div>
      <Image
        height={1}
        width={1}
        alt="Image Alt"
        src="/img/women.png"
        layout="responsive"
        objectFit="cover"
      />
      <div className="mt-3 pl-4">
        <h4 className="text-blue-650 text-lg font-semibold">{name}</h4>
        <div className="truncate-lines-4 overflow-hidden mt-2 divide-y-2 divide-yellow-450 ">
          <p className="text-base text-blue-550">{address}</p>
          <hr className={'mt-3 w-[226px]'} />
        </div>
        <div className="mt-3">
          <p className={'text-lg  font-semibold text-blue-650'}>
            {lifeDuration}
          </p>
          <p className="text-xs text-base text-blue-550 mt-2">{profession}</p>
        </div>
      </div>
    </div>
  </div>
)

export default WomanCard