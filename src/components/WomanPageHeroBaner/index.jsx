import styles from './styles/womanHeroBanner.module.css'
import Image from 'next/image'

const WomanPageHeroBanner = ({
  name,
  birthPlace,
  lifeDuration,
  profession,
}) => (
  <div
    className={`${styles.banner_container} grid  grid-cols-4 p-6  lg:grid-cols-12 lg:px-[140px] lg:pt-10 lg:pb-[54px] lg:gap-7 `}
  >
    <div className={`col-start-1 col-end-4  lg:col-end-5 `}>
      <Image
        src={'/img/womanPicture.png'}
        width={1}
        height={1}
        layout="responsive"
        objectFit="cover"
        alt={'woman'}
      />
    </div>

    <div
      className={`col-start-1 col-end-4 mt-6 lg:col-start-5 lg:col-end-10 max-h-[570px]`}
    >
      <div
        className={`flex flex-col justify-center divide-solid divide-yellow-450 divide-[134px] h-full`}
      >
        <h4
          className={`text-white text-lg mb-2 font-normal font-semibold lg:text-[30px] lg:mb-1 `}
        >
          {name}
        </h4>
        <hr />
        <p className={`mt-2  font-normal text-white text-lg lg:mt-3`}>
          {birthPlace}
        </p>

        <p
          className={`font-normal text-2xl text-white mt-6 mb-2 lg:mt-[54px] lg:mb-3 `}
        >
          {lifeDuration}
        </p>
        <hr />
        <p className={`mt-2 font-normal text-white text-lg lg:mt-3 `}>
          {profession}
        </p>
      </div>
    </div>
  </div>
)

export default WomanPageHeroBanner
