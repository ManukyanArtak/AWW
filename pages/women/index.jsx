import MainLayout from '../../src/components/layout/Main'
import FilterButtons from '../../src/components/shared/FilterButtons'
import WomanCard from '../../src/components/shared/WomanCard'
import Button from '../../src/components/shared/Button'
import FilterMenu from '../../src/components/shared/FilterMenu'
import Strapi from '../../services/backend/Strapi'
import axios from 'axios'
import { lifeDuration } from '../../services/frontend/helpers'

export async function getServerSideProps({ req, res }) {
  const strapi = new Strapi()
  const {data} = await strapi.getWomen()

  return {
    props: {
      women: data.women.data,
      pagination: data.women.meta.pagination,
    },
  }
}

export default function Women({ women, pagination }) {
  const womenData = women.map((woman) => {
    const {
      first_name,
      last_name,
      country,
      city,
      birthday,
      death_day,
      avatar,
    } = woman.attributes

    return (
      <WomanCard
        img={`${avatar.data.attributes.url}`}
        show={true}
        className={`col-span-4`}
        name={`${first_name} ${last_name}`}
        address={`${country}, ${city}`}
        lifeDuration={lifeDuration(birthday, death_day)}
        profession={'Նկարչուհիներ'}
        key={woman.id}
      />
    )
  })

  return (
    <>
      <FilterMenu />

      <MainLayout>
        <div
          className={`container mx-auto grid grid-cols-4 gap-y-8 mt-[72px] lg:grid-cols-12 lg:gap-6 `}
        >
          <div
            className={`hidden lg:block lg:mb-[98px] lg:mt-[81px] lg:col-start-2 lg:col-end-12 lg:gap-y-6`}
          >
            <FilterButtons
              className={`flex justify-center flex-col flex-wrap gap-6 lg:flex-row`}
            />
          </div>

          {womenData}

          <Button
            label={'Տեսնել բոլորին'}
            className={
              'text-violet-950 pb-[8px] border-b border-yellow-450 col-start-2 col-end-3 mb-20 mt-9  lg:col-start-6 lg:col-end-7 lg:mb-[140px] w-[152px] lg:mt-[102px]'
            }
          />
        </div>
      </MainLayout>
    </>
  )
}
