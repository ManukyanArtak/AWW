import MainLayout from '../../src/components/layout/Main'
import FilterButtons from '../../src/components/shared/FilterButtons'
import WomanCard from '../../src/components/shared/WomanCard'
import Button from '../../src/components/shared/Button'
import FilterMenu from '../../src/components/shared/FilterMenu'
import Strapi from '../../services/backend/Strapi'
import { lifeDuration } from '../../services/frontend/helpers'
import {useEffect, useState} from "react";

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
  const womenData = women.map((woman) => {
    const {
      first_name,
      last_name,
      country,
      city,
      birthday,
      death_day,
      avatar,
        categories
    } = woman.attributes


    return (
      <WomanCard
        img={`${avatar.data.attributes.url}`}
        show={true}
        className={`col-span-4`}
        name={`${first_name} ${last_name}`}
        address={`${country}, ${city}`}
        lifeDuration={lifeDuration(birthday, death_day)}
        profession={categories.data[0]?.attributes.name}
        key={woman.id}
      />
    )
  })

  return (
    <>
      <FilterMenu categories={categories} />

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
            />
          </div>

          {womenData}
    <div className={`col-start-1 col-span-full mb-20 mt-9 lg:mb-[140px] lg:mt-[102px] flex items-center justify-center`}>
      <Button
          label={'Տեսնել բոլորին'}
          className={
            'text-violet-950 pb-[8px] border-b border-yellow-450 w-[152px] '
          }
      />
    </div>

        </div>
      </MainLayout>
    </>
  )
}
