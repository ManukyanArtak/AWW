import WomanCard from '../WomanCard'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { lifeDuration } from '../../../../services/frontend/helpers'
import SectionTitle from '../SectionTitle'
import Dots from '../Dots'
import useDeviceDetect from '../../../hooks/useDeviceDetect'

const WomenSlider = ({ women, title, className, womanPage }) => {
  const { isMobile } = useDeviceDetect()

  const womenDataDesktop = women.map((woman) => {
    const {
      first_name,
      last_name,
      country,
      city,
      birthday,
      death_day,
      avatar,
      avatarSize,
      categories,
    } = woman.attributes

    return (
      <WomanCard
        img={`${avatar.data.attributes.url}`}
        show={true}
        className={'col-span-4 row-start-2 lg:mt-[76px]'}
        name={`${first_name} ${last_name}`}
        address={`${country}, ${city}`}
        lifeDuration={lifeDuration(birthday, death_day)}
        id={woman.id}
        key={woman.id}
        avatarSize={avatarSize}
        profession={categories.data[0]?.attributes.name}
      />
    )
  })
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <div className={`lg:mt-30`}>
      {!womanPage ? <SectionTitle direction={'right'} /> : null}
      <div
        className={
          'grid grid-cols-4 lg:grid-cols-12 gap-6 w-full container mx-auto row-start-1'
        }
      >
        <h2
          className={` text-xl font-bold col-span-4 lg:text-3xl lg:font-normal lg:col-span-6 row-start-1 col-start-1 ${
            womanPage ? 'lg:col-start-1' : 'lg:col-start-6'
          }`}
        >
          {title}
        </h2>
        <div className={`mt-8 row-start-2 col-span-4 lg:col-span-12`}>
          <Carousel
            arrows={false}
            showDots={isMobile ? true : false}
            customDot={<Dots />}
            ssr={true}
            responsive={responsive}
            renderDotsOutside={true}
          >
            {womenDataDesktop}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default WomenSlider
