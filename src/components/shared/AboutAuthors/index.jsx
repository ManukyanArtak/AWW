import Image from 'next/image'
import React from "react";
import SectionTitle from "../SectionTitle";

const AboutAuthors = ({ direction, className, title, section }) => (
  <div>
    {section && <SectionTitle
        direction={direction}
    />}
    <div className={`grid grid-flow-row-dense ${className}`}>
      <h2 className={` text-xl font-bold col-span-4 lg:text-3xl lg:font-normal lg:col-span-6 row-start-1`}>{title}</h2>


      <div
        className={`max-w-[470px] max-h-[495px] col-span-4 lg:col-span-5 mt-12 lg:row-start-2 lg:mt-[90px]  ${
          direction === 'left'
            ? 'col-start-1'
            : 'lg:col-start-8 '
        }`}
      >
        <Image
          height={1}
          width={1}
          alt="Image Alt"
          src="/img/AuthorPictureFrame.png"
          layout="responsive"
          objectFit="cover"
        />
      </div>

      <div
        className={`col-span-4 mt-6 lg:col-span-6 lg:row-start-2 lg:mt-[123px] ${
          direction === 'left'
            ? 'lg:col-start-7'
            : 'col-start-1'
        }`}
      >
        <p className={'text-blue-950 text-base lg:text-lg '}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus eget
          tristique adipiscing morbi volutpat blandit viverra vestibulum augue.
          Nulla leo, semper massa in consequat diam. Habitasse ornare convallis
          at elementum, turpis id cursus sit nunc. Nisl tristique adipiscing
          consectetur orci eu et ante morbi. Ac quisque mus ultrices elit
          aliquam quis dui neque venenatis.
        </p>

        <p className={'text-blue-950 mt-6 text-base lg:text-lg lg:mt-9'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus nulla
          mattis feugiat bibendum sed neque. Vulputate risus id consectetur et
          in ut ut diam. Sed eget non, scelerisque faucibus vitae mattis morbi
          tristique a. Fames felis eget tellus lacus odio quis enim scelerisque
          commodo.
        </p>
      </div>
    </div>
  </div>
)

export default AboutAuthors
