import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const WomanCard = ({
  img,
  show,
  className,
  name,
  address,
  profession,
  lifeDuration,
  onStart,
  onEnd,
  id,
}) =>
  show ? (
    <div
      className={`max-w-xs ${className}`}
      onTouchStart={onStart}
      onTouchEnd={onEnd}
      // onClick={() => onClick && onClick()}
    >
      <Link href={`/women/${id}`}>
        <a>
          <div>
            <Image
              alt="Image Alt"
              src={img}
              loader={({ src }) => `http://localhost:1337${src}`}
              width={364}
              height={484}
              layout="fixed"
            />
            <div className="mt-3 pl-4">
              <h4 className="text-violet-950 text-lg font-semibold">{name}</h4>
              <div className="truncate-lines-4 overflow-hidden mt-2 divide-y-2 divide-yellow-450 ">
                <p className="text-base text-blue-950">{address}</p>
                <hr className={'mt-3 w-58'} />
              </div>
              <div className="mt-3">
                <p className={'text-lg  font-semibold text-violet-950'}>
                  {lifeDuration}
                </p>
                <p className="text-xs text-base text-blue-950 mt-2">
                  {profession}
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  ) : null

export default WomanCard
