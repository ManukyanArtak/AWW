import Button from '../Button'
import styles from './womanLayout.module.css'
import {useState, useCallback} from 'react'
import WomanCard from '../WomanCard'
import PageConstants from '../../../const'

const WomenCardLayout = ({ className }) => {


    const woomens = [1,2,3]
    const [current, setCurrent] = useState(0)
    const [startClientX, setStartClientX] = useState()
    const count = 3

    const onStart = useCallback((e) => {
            const clientX = e?.touches[0]?.clientX
            setStartClientX(clientX)
        },[setStartClientX])

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
    const images = [
        '/img/women.png',
        '/img/book.png',
        '/img/women.png',
    ]

    return  (
        <>
            <div className={`${className}`}>
                {woomens.map((value, index, array) => {
                    console.log(current)
                    return(
                        <WomanCard
                            img={images[index]}
                            address={PageConstants.global.womenCard.address}
                            name={PageConstants.global.womenCard.name}
                            lifeDuration={PageConstants.global.womenCard.lifeDuration}
                            profession={PageConstants.global.womenCard.profession}
                            className={'col-start-1 col-end-4'}
                            show={index === current}
                            onStart={onStart}
                            onEnd={onEnd}
                        />
                    )
                })}
            </div>
            {/*<div className={'rows-start-2 col-start-6'}>*/}
            {/*  <Button*/}
            {/*    label={'Տեսնել բոլորին'}*/}
            {/*    className={`${styles.btn} text-white mt-24 bg-transparent  font-semibold  py-4 px-6 border inline-block `}*/}
            {/*  />*/}
            {/*</div>*/}
        </>
    )
}

export default WomenCardLayout
