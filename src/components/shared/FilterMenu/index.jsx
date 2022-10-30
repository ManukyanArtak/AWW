import Image from 'next/image'
import { useState } from 'react'
import FilterButtons from '../FilterButtons'
import styles from './filterMenu.module.css'

const FilterMenu = ({ categories, filteredIds, setFilteredIds }) => {
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
        className={`absolute w-10 h-10 top-28 mb-13 lg:hidden`}
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

      <div
        className={`${
          open ? 'visible' : 'invisible'
        } w-full h-screen fixed bg-gray-350 z-40  overflow-hidden lg:hidden`}
      >
        <div
          className={`${
            open ? styles.open : styles.close
          } w-80 fixed  h-100 bg-white z-50 overflow-auto p-6 top-28`}
        >
          <div className={` flex justify-between`}>
            <FilterButtons
              categories={categories}
              className={`flex flex-col gap-y-4`}
              filteredIds={filteredIds}
              setFilteredIds={setFilteredIds}
            />
            <div>
              <button
                className={`w-3.5 h-3.5`}
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
