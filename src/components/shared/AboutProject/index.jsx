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
      <div className={'grid grid-cols-12 p-4 w-full '}>
        <p
          className={
            direction === 'left'
              ? 'col-start-1 col-end-7 text-lg text-about-project-title-color ml-6'
              : 'col-start-6 col-end-12 text-lg text-about-project-title-color'
          }
        >
          {text}
        </p>
        <div
          className={
            direction === 'left'
              ? 'col-start-1 col-end-3  mt-6 ml-6'
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
