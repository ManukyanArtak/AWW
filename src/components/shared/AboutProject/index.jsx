import Image from 'next/image'

const AboutProject = ({ direction, text }) => (
  <div
    className={
      direction === 'left'
        ? 'flex flex-row  items-baseline'
        : 'flex flex-row-reverse w-full'
    }
  >
    <div>
      <div className={'grid grid-cols-12  w-full '}>
        <p
          className={
            direction === 'left'
              ? 'col-start-2 col-span-6 text-lg text-about-project-title-color '
              : 'col-start-6 col-end-12 text-lg text-about-project-title-color'
          }
        >
          {text}
        </p>
        <div
          className={
            direction === 'left'
              ? 'col-start-2 col-span-6  mt-6'
              : 'col-start-6 col-end-12  mt-6'
          }
        >
          <a className={'text-xs  text-link-color'} href={'#'}>
            Կարդալ ավելին
          </a>
          <Image src="/img/arrow_right.svg" width="16px" height="8px" />
        </div>
      </div>
    </div>
  </div>
)

export default AboutProject
