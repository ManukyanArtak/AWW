import Image from 'next/image'

const AboutProject = ({ direction, text }) => {
  let directionClass = direction === 'left' ? '' : 'col-start-6'

  return (
    <div>
      <div>
        <div className={'grid grid-cols-12 gap-6 w-full container mx-auto'}>
          <p className={`col-span-7 text-lg text-blue-950 ${directionClass}`}>
            {text}
          </p>
          <div className={`row-start-2 col-span-2 mt-2 ${directionClass}`}>
            <a className={`text-xs text-link-color`} href={'#'}>
              Կարդալ ավելին
            </a>
            <Image
              src="/img/arrow_right.svg"
              width="16px"
              height="8px"
              alt={'Right arrow'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutProject
