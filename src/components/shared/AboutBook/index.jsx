import Image from 'next/image'
import React from 'react'
import Button from '../Button'
import styles from './aboutBook.module.css'
import SectionTitle from "../SectionTitle";

const AboutBook = ({className}) => (
  <div className={className}>
    <SectionTitle
        direction={'left'}
    />
    <div className={`container mx-auto grid grid-cols-4 lg:grid-cols-12 gap-6`}>
      <h2 className={`text-xl font-bold lg:text-3xl lg:font-normal col-span-4 lg:col-span-6 col-start-1 row-start-1`}>Գրքի մասին</h2>
      <div className={`col-span-4 mt-8 lg:col-span-5 row-start-2 lg:mt-[90px]`}>
        <Image src="/img/book.png" width="468px" height="539px" alt={'Book'} />
      </div>
      <div className={`col-span-4 mt-6 lg:col-start-7 lg:col-span-6 pr-16 row-start-3 lg:row-start-2 lg:mt-[90px]`}>
        <div className={`mb-8`}>
          <p className={`text-base lg:text-lg`}>
            Գրքում տեղ գտած պատմություններում կկարդաք այն կանանց մասին, որոնք
            մենք՝ որպես գրքի հեղինակներ, ոգեշնչող ենք համարում: Մենք ձեզ
            հրավիրում ենք հայացք նետել այս անհավանական կանանց կյանքին, տեսնել
            փոքր պատառիկներն այն ամենի, ինչ նրանք արել ու անում են:
          </p>
          <br />
          {/*<p className={`text-lg`}>*/}
          {/*  «Զարմանահրաշ հայ կանայք» սիրո, զայրույթի, հպարտության և*/}
          {/*  հիասթափության արգասիք է: Արդյունք է երկար ու մանրակրկիտ*/}
          {/*  հետազոտության, անվերջ բացահայտումների, կրքի, հետաքրքրասիրության և*/}
          {/*  գնահատանքի:*/}
          {/*</p>*/}
          <br />
          {/*<p className={`text-lg`}>*/}
          {/*  Թող այս կանանց ճամփորդությունները ոգեշնչեն ձեզ:*/}
          {/*</p>*/}
        </div>
        <Button
          label={'Կարդալ ավելին'}
          className={`text-white  bg-transparent  font-semibold  py-4 px-6 border inline-block  ${styles.test}`}
        />
      </div>
    </div>
  </div>
)

export default AboutBook
