import { useState, useCallback, useMemo } from 'react'
import WomanCard from '../WomanCard'
import PageConstants from '../../../const'
import useDeviceDetect from '../../../hooks/useDeviceDetect'
import Dots from '../Dots'
import SectionTitle from '../SectionTitle'
import { lifeDuration } from '../../../../services/frontend/helpers'

const WomenCardLayout = ({ className, women }) => {
  const [current, setCurrent] = useState(0)
  const [startClientX, setStartClientX] = useState()
  const count = 3
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
        key={woman.id}
      />
    )
  })

  const onStart = useCallback(
    (e) => {
      const clientX = e?.touches[0]?.clientX
      setStartClientX(clientX)
    },
    [setStartClientX]
  )

  const onDotClick = (index) => {
    if (index === current) return
    setCurrent(index)
  }

  const onEnd = useCallback(
    (e) => {
      e.preventDefault()
      const clientX = e.changedTouches[0]?.clientX
      if (clientX - startClientX < 0) {
        setCurrent((prevState) =>
          prevState === count - 1 ? prevState : prevState + 1
        )
      } else {
        setCurrent((prevState) => (prevState === 0 ? prevState : prevState - 1))
      }
    },
    [startClientX, count]
  )

  const womenDataMobile = women.map((woman, index) => {
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
        name={`${first_name} ${last_name}`}
        address={`${country}, ${city}`}
        lifeDuration={lifeDuration(birthday, death_day)}
        profession={'Նկարչուհիներ'}
        key={woman.id}
        className={'col-span-4 mt-12 lg:mt-8'}
        show={index === current}
        onStart={onStart}
        onEnd={onEnd}
      />
    )
  })

  const mobileView = (
    <div className={`mt-[56px]`}>
      <SectionTitle direction={'left'} />
      <div className={`container mx-auto ${className}`}>
        <h2 className={`text-xl col-span-4 row-start-1 font-bold`}>
          {PageConstants.womenCard.title}
        </h2>
        {womenDataMobile}
      </div>
      <div className={`flex justify-center mt-9 mb-8`}>
        {women.map((value, index) => (
          <Dots
            className={`mr-2`}
            active={index === current}
            onclick={() => onDotClick(index)}
            key={index}
          />
        ))}
      </div>
    </div>
  )

  const desktopView = (
    <div className={`lg:mt-[120px]`}>
      <SectionTitle direction={'right'} />
      <div className={`grid grid-cols-12 gap-6 container mx-auto ${className}`}>
        <h2 className={`text-3xl col-span-6 row-start-1 col-start-7`}>
          {PageConstants.womenCard.title}
        </h2>
        {womenDataDesktop}
      </div>
    </div>
  )

  return <>{isMobile ? mobileView : desktopView}</>
}

export default WomenCardLayout
