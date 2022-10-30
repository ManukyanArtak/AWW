import Link from 'next/link'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import WomanCard from '../WomanCard'
import { lifeDuration } from '../../../../services/frontend/helpers'
import SectionTitle from '../SectionTitle'

const womenSlider = ({ women, title, className }) => {
  const womenDataDesktop = women.map((woman) => {
    const {
      first_name,
      last_name,
      country,
      city,
      birthday,
      death_day,
      avatar,
    } = woman.attributes

    return (
      <WomanCard
        img={`${avatar.data.attributes.url}`}
        show={true}
        className={'col-span-4 row-start-2 lg:mt-[76px]'}
        name={`${first_name} ${last_name}`}
        address={`${country}, ${city}`}
        lifeDuration={lifeDuration(birthday, death_day)}
        profession={'Նկարչուհիներ'}
        id={woman.id}
        key={woman.id}
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
    <div className={`lg:mt-[120px]`}>
      {/*{!womanPage ? <SectionTitle direction={'right'} /> : null}*/}
      <div className={`container mx-auto ${className}`}>
        <h2 className={`text-3xl`}>{title}</h2>
        <Carousel
          arrows={false}
          showDots={true}
          ssr={true}
          responsive={responsive}
        >
          {womenDataDesktop}
        </Carousel>
      </div>
    </div>
  )
}

export default womenSlider
