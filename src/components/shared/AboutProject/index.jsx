import Link from "next/link";
import Image from "next/image";
import styles from './aboutProject.module.css'

const AboutProject = ({direction, title, text}) => (
    <div className={direction === 'left' ? 'flex flex-row mt-24 items-baseline' : 'flex flex-row-reverse w-full mt-24'}>
        <div >
            {direction === 'left' && <hr
                width={direction === 'left' ? '117px' : '310px'}
                className={styles.line}
            />}
        </div>
        <div>

               <div className={'grid grid-cols-12 p-4 w-full '}>
                   <h2
                       className={direction === 'left' ? 'text-3xl text-navbar-text-color font-normal col-start-1 col-end-7 ml-6'  : 'text-3xl  text-navbar-text-color font-normal col-start-6 col-end-10'}
                   >
                       {title}

                   </h2>
                   {direction === 'right' && <hr
                       width={direction === 'left' ? '117px' : '310px'}
                       className={`${styles.line} col-start-11`}
                   />}
                  <p className={direction === 'left' ? 'col-start-1 col-end-7 text-lg text-about-project-title-color ml-6 mt-8' : 'col-start-6 col-end-12 text-lg text-about-project-title-color mt-8'}>
                      {text}
                   </p>
                    <div className={direction === 'left' ? 'col-start-1 col-end-3  mt-6 ml-6' : 'col-start-6 col-end-12  mt-6'}>
                      <a className={'text-xs  text-link-color'}  href={'#'}>
                            Կարդալ ավելին
                       </a>
                        <Image src="/img/arrow_right.svg" width="16px" height="8px" />

                    </div>

                </div>

        </div>
    </div>
)

export default AboutProject

