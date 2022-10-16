import Image from 'next/image'
import SectionTitle from "../SectionTitle";
import React from "react";

const AboutProject = ({ direction, text, className, title }) => {
  let directionClass = direction === 'left' ? 'col-start-1' : 'lg:col-start-6'

  return (
    <div className={`${className}`}>
      <SectionTitle
          direction={direction}
      />
      <div>
        <div className={'grid grid-cols-4 lg:grid-cols-12 gap-6 w-full container mx-auto'}>
          <h2 className={` text-xl font-bold col-span-4 lg:text-3xl lg:font-normal lg:col-span-6 row-start-1 ${directionClass}`}>{title}</h2>
          <p className={`text-base col-span-4 mt-8 lg:col-span-7 lg:text-lg text-blue-950 row-start-2 ${directionClass}`}>
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutProject
