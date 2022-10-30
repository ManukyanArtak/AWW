import { useState } from 'react'
import Image from 'next/image'
import styles from './styles/sidebar.module.css'
import { scrollToElement } from '../../../../services/frontend/helpers'
import SideMenuContent from '../sideMenuContent'

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
        className={` w-12 h-12 bottom-0  right-0 z-40 fixed lg:hidden`}
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
        } w-full h-screen fixed bg-gray-350 z-40  overflow-hidden lg:hidden`}
      >
        <div
          className={`${
            open ? styles.open : styles.close
          } bottom-0 h-full w-full fixed bg-white pt-8 pl-8 flex`}
        >
          <SideMenuContent
            data={data}
            className={`border-b border-yellow-450 pb-1`}
            onClick={menuSelect}
          />

          <button
            className={'absolute bottom-0 right-0 h-12 w-12 z-40'}
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
