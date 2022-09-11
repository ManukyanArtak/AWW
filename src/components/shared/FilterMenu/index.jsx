import Image from 'next/image'
import { useState } from 'react'
import FilterButtons from '../FilterButtons'
import styles from './filterMenu.module.css'

const FilterMenu = () => {
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
      <div className={`relative w-[40px] h-[40px] mt-8 lg:hidden `}>
        <button
          className={`absolute w-[40px] h-[40px]`}
          onClick={() => handleOpen(true)}
        >
          <Image
            src={'/img/filter_icon.svg'}
            width={'40'}
            height={'40'}
            alt={'filter'}
            layout={'responsive'}
          />
        </button>
      </div>

      <div
        className={`${
          open ? styles.open : styles.close
        } w-full h-screen fixed bg-[#0000004d] z-40  overflow-hidden lg:hidden`}
      >
        <div
          className={`w-[350px] fixed  h-[462px] bg-white z-50 overflow-auto p-6 mt-8`}
        >
          <div className={` flex justify-between`}>
            <FilterButtons className={`flex flex-col gap-y-4`} />
            <div>
              <button
                className={`w-[14px] h-[14px]`}
                onClick={() => {
                  handleOpen(false)
                }}
              >
                <Image
                  src={'/img/close_icon.svg'}
                  alt={'close'}
                  layout={'responsive'}
                  width={'14'}
                  height={'14'}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FilterMenu
