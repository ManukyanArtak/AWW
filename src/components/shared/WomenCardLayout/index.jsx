import Button from '../Button'
import styles from './womanLayout.module.css'
import { useState, useCallback } from 'react'
import WomanCard from '../WomanCard'
import PageConstants from '../../../const'
import useDeviceDetect from '../../../hooks/useDeviceDetect'

const WomenCardLayout = ({ className, womens }) => {

  const [current, setCurrent] = useState(0)
  const [startClientX, setStartClientX] = useState()
  const count = 3
  const { isMobile } = useDeviceDetect()

  const onStart = useCallback(
    (e) => {
      const clientX = e?.touches[0]?.clientX
      setStartClientX(clientX)
    },
    [setStartClientX]
  )

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
    <div className={`${className}`}>
      {womens.map((value, index, array) => (
        <WomanCard
          img={PageConstants.womenCard.img}
          address={PageConstants.womenCard.address}
          name={PageConstants.womenCard.name}
          lifeDuration={PageConstants.womenCard.lifeDuration}
          profession={PageConstants.womenCard.profession}
          className={'col-start-1 col-end-4'}
          show={index === current}
          onStart={onStart}
          onEnd={onEnd}
        />
      ))}
    </div>
  )


  const desktopView = (
    <div>
      <div className={`flex justify-center`}>
        {womens.map((value, index, array) => (
          <WomanCard
            img={value.img}
            address={value.address}
            name={value.name}
            lifeDuration={value.lifeDuration}
            profession={value.profession}
            className={'px-12'}
            show={true}
          />
        ))}
      </div>
      <div className={'text-center'}>
        <Button
          label={'Տեսնել բոլորին'}
          className={`${styles.btn} text-white mt-24 bg-transparent  font-semibold  py-4 px-6 border inline-block `}
        />
      </div>
    </div>
  )

  return <>{isMobile ? mobileView : desktopView}</>
}

export default WomenCardLayout
