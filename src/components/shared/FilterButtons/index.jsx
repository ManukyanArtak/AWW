import Button from '../Button'
import PageConstants from '../../../const'
import {useState} from "react";

const FilterButtons = ({ className, categories }) => {
    const [filteredIds, setFilteredIds] = useState([])

    const filterData = (id) => {
        if(filteredIds.includes(id)){
            const removeItem = filteredIds.filter(item=>item!==id)
            setFilteredIds(removeItem)
        } else {
            setFilteredIds(prev=>[...prev, id])
        }
    }

    const isActive = (id) => {
        if(filteredIds.includes(id)){
            return `bg-violet-950 text-white `
        } else {
            return `text-violet-950 border border-[#ADADAD] font-[275]`
        }

    }

  return (
      <div className={`${className}`}>
        {
          categories?.map((item) => (
              <Button
                  label={item.attributes.name}
                  key={item.id}
                  className={`py-2 px-3  text-base rounded-[20px] ${isActive(item.id)}`}
                  onClick={()=>filterData(item.id)}
              />
          ))
        }
      </div>
  )
}

export default FilterButtons
