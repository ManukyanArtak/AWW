import Button from '../Button'
import styles from './womanLayout.module.css'
import { useState, useCallback, useMemo } from 'react'
import WomanCard from '../WomanCard'
import PageConstants from '../../../const'
import useDeviceDetect from '../../../hooks/useDeviceDetect'
import Dots from '../Dots'

const WomenCardLayout = ({ className, womens }) => {
  const [current, setCurrent] = useState(0)
  const [startClientX, setStartClientX] = useState()
  const count = 3
  const { isMobile } = useDeviceDetect();


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
  const images = ['/img/women.png', '/img/book.png', '/img/women.png']

  const mobileView = (
    <>
      <div className={`container ${className}`}>
        {womens.map((value, index, array) => (
          <WomanCard
            img={value}
            address={PageConstants.womenCard.address}
            name={PageConstants.womenCard.name}
            lifeDuration={PageConstants.womenCard.lifeDuration}
            profession={PageConstants.womenCard.profession}
            className={'col-span-4'}
            show={index === current}
            onStart={onStart}
            onEnd={onEnd}
            key={index}
          />
        ))}
      </div>
      <div className={`flex justify-center mt-9 mb-8`}>
        {womens.map((value, index) => (
          <Dots
            className={`mr-2`}
            active={index === current}
            onclick={() => onDotClick(index)}
            key={index}
          />
        ))}
      </div>
    </>
  )

  const desktopView = (
    <div>
      <div className={`grid grid-cols-12 gap-6 container mx-auto ${className}`}>
        {womens.map((value, index) => (
          <WomanCard
            img={value}
            address={value.address}
            name={value.name}
            lifeDuration={value.lifeDuration}
            profession={value.profession}
            className={'col-span-4'}
            show={true}
            key={index}
          />
        ))}
      </div>
    </div>
  )

  return <>{isMobile ? mobileView : desktopView}</>
}

export default WomenCardLayout
