import Image from 'next/image'
import React from 'react'
import Button from "../Button";
import styles from './aboutBook.module.css'

const AboutBook = () => (
  <div className={`grid grid-cols-12 gap-20`}>
    <div className={`col-span-5 col-start-2`}>
      <Image src="/img/book.png" width="468px" height="539px" />
    </div>
    <div className={`col-span-5 pr-16`}>
      <div className={`mb-16`}>
        <p className={`text-lg`}>
          Գրքում տեղ գտած պատմություններում կկարդաք այն կանանց մասին, որոնք
          մենք՝ որպես գրքի հեղինակներ, ոգեշնչող ենք համարում: Մենք ձեզ հրավիրում
          ենք հայացք նետել այս անհավանական կանանց կյանքին, տեսնել փոքր
          պատառիկներն այն ամենի, ինչ նրանք արել ու անում են:
        </p>
        <br />
        <p className={`text-lg`}>
          «Զարմանահրաշ հայ կանայք» սիրո, զայրույթի, հպարտության և հիասթափության
          արգասիք է: Արդյունք է երկար ու մանրակրկիտ հետազոտության, անվերջ
          բացահայտումների, կրքի, հետաքրքրասիրության և գնահատանքի:
        </p>
        <br />
        <p className={`text-lg`}>
          Թող այս կանանց ճամփորդությունները ոգեշնչեն ձեզ:
        </p>
      </div>
      <Button label={'Կարդալ ավելին'} className={`text-white mt-2 ${styles.test}`}/>
    </div>
  </div>
)

export default AboutBook
