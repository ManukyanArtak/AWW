import Strapi from '../../services/backend/Strapi'
import Button from '../../src/components/shared/Button'
import { useCallback, useEffect, useState } from 'react'
import MainLayout from '../../src/components/layout/Main'
import WomanCard from '../../src/components/shared/WomanCard'
import { lifeDuration } from '../../services/frontend/helpers'
import FilterMenu from '../../src/components/shared/FilterMenu'
import FilterButtons from '../../src/components/shared/FilterButtons'

export async function getServerSideProps({ req, res, query }) {
  const strapi = new Strapi()
  const { data } = await strapi.getWomen(query.category ? query.category : [])
  const categoriesData = await strapi.getCategories()

  return {
    props: {
      women: data.women.data,
      pagination: data.women.meta.pagination,
      categories: categoriesData.data.categories.data,
    },
  }
}

export default function Women({ women, pagination, categories }) {
  const { total, page } = pagination
  const [showCount, setShowCount] = useState(page)
  const [womenData, setWomenData] = useState(women)
  const [filteredIds, setFilteredIds] = useState([])

  const strapi = new Strapi()

  useEffect(() => {
    setWomenData(women)
  }, [women])

  useEffect(() => {
    setShowCount(page)
  }, [page])

  useEffect(() => {
    setShowCount(1)
  }, [filteredIds])

  const paginate = useCallback(async () => {
    setShowCount((prev) => prev + 1)
    await strapi.getWomen(filteredIds, showCount + 1).then((data) => {
      setWomenData((prev) => [...prev, ...data.data.women.data])
    })
  }, [showCount, filteredIds, strapi])

  const womenDataDrawer = womenData.map((woman) => {
    const {
      first_name,
      last_name,
      country,
      city,
      birthday,
      death_day,
      avatar,
      categories,
    } = woman.attributes

    return (
      <WomanCard
        img={`${avatar.data.attributes.url}`}
        show={true}
        className={`col-span-4 cursor-pointer`}
        name={`${first_name} ${last_name}`}
        address={`${country}, ${city}`}
        lifeDuration={lifeDuration(birthday, death_day)}
        profession={categories.data[0]?.attributes.name}
        key={woman.id}
        id={woman.id}
      />
    )
  })

  return (
    <>
      <FilterMenu
        categories={categories}
        filteredIds={filteredIds}
        setFilteredIds={setFilteredIds}
      />

      <MainLayout>
        <div
          className={`container mx-auto grid grid-cols-4 gap-y-8 mt-[72px] lg:grid-cols-12 lg:gap-6 `}
        >
          <div
            className={`hidden lg:block lg:mb-[98px] lg:mt-[81px] lg:col-start-2 lg:col-end-12 lg:gap-y-6`}
          >
            <FilterButtons
              className={`flex justify-center flex-col flex-wrap gap-6 lg:flex-row`}
              categories={categories}
              filteredIds={filteredIds}
              setFilteredIds={setFilteredIds}
            />
          </div>

          {womenDataDrawer}
          <div
            className={`col-start-1 col-span-full mb-20 mt-9 lg:mb-[140px] lg:mt-[102px] flex items-center justify-center`}
          >
            {womenData.length === total ? null : (
              <Button
                label={'Տեսնել ավելին'}
                className={
                  'text-violet-950 pb-[8px] border-b border-yellow-450 w-[152px] '
                }
                onClick={paginate}
              />
            )}
          </div>
        </div>
      </MainLayout>
    </>
  )
}
