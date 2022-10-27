import { useState } from 'react'
import Image from 'next/image'
import styles from './styles/sidebar.module.css'
import { scrollToElement } from '../../../../services/frontend/helpers'

const SideBarMenu = ({ data }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = (open) => {
    const body = document.querySelector('body')
    if (open) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = 'auto'
    }

    setOpen(open)
  }

  const menuSelect = (element) => {
    handleOpen(false)
    scrollToElement(element)
  }

  return (
    <>
      <button
        className={` w-[48px] h-[48px] bottom-0  right-0 z-40 fixed lg:hidden`}
        onClick={() => handleOpen(true)}
      >
        <Image
          src={'/img/menu_icon_yellow.svg'}
          width={'40'}
          height={'40'}
          alt={'menu'}
          layout={'responsive'}
        />
      </button>

      <div
        className={`${
          open ? 'visible' : 'invisible'
        } w-full h-screen fixed bg-[#0000004d] z-40  overflow-hidden lg:hidden`}
      >
        <div
          className={`${
            open ? styles.open : styles.close
          } bottom-0 h-full w-full fixed bg-white pt-8 pl-8 flex`}
        >
          <ul>
            <li
              className={
                'font-semibold text-violet-950 text-xl border-b border-yellow-450 pb-1'
              }
            >
              Կենսագրություն
            </li>
            {data.childhood ? (
              <li className={'mt-6 text-lg text-violet-950 font-medium '}>
                <button onClick={() => menuSelect('childhood')}>
                  Մանկություն
                </button>
              </li>
            ) : null}
            {data.boyhood ? (
              <li className={'mt-4 text-lg text-violet-950 font-medium '}>
                <button onClick={() => menuSelect('youth')}>
                  Պատանեկություն
                </button>
              </li>
            ) : null}
            {data.remarkable_stories ? (
                <li className={'mt-4 text-lg text-violet-950 font-medium '}>
                  <button onClick={() => menuSelect('youth')}>
                    Ուշագրավ պատմություններ
                  </button>
                </li>
            ) : null}
            {data.images?.length ? (
              <li
                className={
                  'font-semibold text-violet-950 text-xl mt-10 border-b border-yellow-450 pb-1'
                }
              >
                <button onClick={() => menuSelect('images')}>Նկարներ</button>
              </li>
            ) : null}
            {data.video?.length ? (
              <li
                className={
                  'font-semibold text-violet-950 text-xl mt-10 border-b border-yellow-450 pb-1'
                }
              >
                <button onClick={() => menuSelect('videos')}>
                  Տեսանյութեր
                </button>
              </li>
            ) : null}
          </ul>
          <button
            className={'absolute bottom-0 right-0 h-[48px] w-[48px] z-40'}
            onClick={() => handleOpen(false)}
          >
            <Image
              src={'/img/close_black_yellow.svg'}
              height={'48'}
              width={'48'}
              layout={'responsive'}
              alt={'Close'}
            />
          </button>
        </div>
      </div>
    </>
  )
}

export default SideBarMenu
