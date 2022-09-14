import { useState } from 'react'
import Image from 'next/image'
import styles from './styles/sidebar.module.css'

const SideBarMenu = () => {
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

  return (
    <>
      <button
        className={` w-[48px] h-[48px] bottom-0  right-0 fixed lg:hidden`}
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
          } bottom-0 h-[583px] w-full fixed bg-white pt-8 pl-8 flex`}
        >
          <ul>
            <li
              className={
                'font-semibold text-violet-950 text-xl border-b border-yellow-450 pb-1'
              }
            >
              <a>Կենսագրություն</a>
            </li>
            <li className={'mt-6 text-lg text-violet-950 font-medium '}>
              <a>Մանկություն</a>
            </li>
            <li className={'mt-4 text-lg text-violet-950 font-medium '}>
              <a>Պատանեկություն</a>
            </li>
            <li
              className={
                'font-semibold text-violet-950 text-xl mt-10 border-b border-yellow-450 pb-1'
              }
            >
              <a>Նկարներ</a>
            </li>
            <li
              className={
                'font-semibold text-violet-950 text-xl mt-10 border-b border-yellow-450 pb-1'
              }
            >
              <a>Տեսանյութեր</a>
            </li>
          </ul>
          <button
            className={'absolute bottom-0 right-0 h-[48px] w-[48px]'}
            onClick={() => handleOpen(false)}
          >
            <Image
              src={'/img/close_black_yellow.svg'}
              height={'48'}
              width={'48'}
              layout={'responsive'}
            />
          </button>
        </div>
      </div>
    </>
  )
}

export default SideBarMenu
