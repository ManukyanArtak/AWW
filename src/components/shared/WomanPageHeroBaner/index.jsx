import styles from './styles/womanHeroBanner.module.css'
import Image from 'next/image'

const WomanPageHeroBanner = ({
  name,
  birthPlace,
  lifeDuration,
  profession,
  img,
}) => (
  <div className={`${styles.banner_container} pt-6 pb-8 lg:pt-10 lg:pb-[54px]`}>
    <div className={` container mx-auto grid lg:grid-cols-12  gap-6`}>
      <div className={`col-start-1  col-span-4 `}>
        <Image
          src={img}
          loader={({ src }) => `http://localhost:1337${src}`}
          width={'364px'}
          height={'484px'}
          layout="fixed"
          alt={'woman'}
        />
      </div>

      <div className={`col-start-1  mt-11 lg:col-start-5 lg:col-span-5`}>
        <div
          className={`flex flex-col justify-center divide-solid divide-yellow-450 divide-[134px] `}
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
  </div>
)

export default WomanPageHeroBanner
