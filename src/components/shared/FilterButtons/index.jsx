import Button from '../Button'
import PageConstants from '../../../const'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useFilters } from '../../pages/women/useFilters'

const FilterButtons = ({
  className,
  categories,
  setFilteredIds,
  filteredIds,
}) => {
  const router = useRouter()

  const filterData = async (id) => {
    let ids = [...filteredIds]
    let categories = ''
    if (filteredIds.includes(id)) {
      ids = filteredIds.filter((item) => item !== id)
    } else {
      ids.push(id)
    }

    setFilteredIds(ids)
    ids.forEach((item, index) => {
      index === 0
        ? (categories += `category=${item}`)
        : (categories += `&category=${item}`)
    })
    router.push(`http://localhost:3000/women?${categories}`)
  }

  const isActive = (id) => {
    if (filteredIds.includes(id)) {
      return `bg-violet-950 text-white `
    } else {
      return `text-violet-950 border border-[#ADADAD] font-[275]`
    }
  }

  return (
    <div className={`${className}`}>
      {categories?.map((item) => (
        <Button
          label={item.attributes.name}
          key={item.id}
          className={`py-2 px-3  text-base rounded-[20px] ${isActive(item.id)}`}
          onClick={() => filterData(item.id)}
        />
      ))}
    </div>
  )
}

export default FilterButtons
