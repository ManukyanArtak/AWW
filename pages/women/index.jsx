import MainLayout from '../../src/components/layout/Main'
import FilterButtons from '../../src/components/shared/FilterButtons'
import WomanCard from '../../src/components/shared/WomanCard'
import Button from '../../src/components/shared/Button'
import FilterMenu from '../../src/components/shared/FilterMenu'
import { useState } from 'react'

export default function Women() {
  return (
    <MainLayout>
      <div
        className={`container mx-auto grid grid-cols-4 gap-y-8 lg:grid-cols-12 lg:gap-6 `}
      >
        <div
          className={`hidden lg:block lg:mb-[98px] lg:mt-[81px] lg:col-start-3 lg:col-end-11 lg:gap-y-6`}
        >
          <FilterButtons
            className={`flex justify-center flex-col flex-wrap gap-6 lg:flex-row`}
          />
        </div>

        <FilterMenu />

        <WomanCard
          img={'/img/womanPicture.png'}
          show={true}
          className={`col-span-4`}
          name={'Ասլամազյան քույրեր'}
          address={'Գյումրի, Հայաստան'}
          lifeDuration={`1907-2006`}
          profession={'Նկարչուհիներ'}
        />

        <WomanCard
          img={'/img/woman_2.png'}
          show={true}
          className={`col-span-4`}
          name={'Ասլամազյան քույրեր'}
          address={'Գյումրի, Հայաստան'}
          lifeDuration={`1907-2006`}
          profession={'Նկարչուհիներ'}
        />

        <WomanCard
          img={'/img/women.png'}
          show={true}
          className={`col-span-4`}
          name={'Ասլամազյան քույրեր'}
          address={'Գյումրի, Հայաստան'}
          lifeDuration={`1907-2006`}
          profession={'Նկարչուհիներ'}
        />

        <WomanCard
          img={'/img/women.png'}
          show={true}
          className={`col-span-4`}
          name={'Ասլամազյան քույրեր'}
          address={'Գյումրի, Հայաստան'}
          lifeDuration={`1907-2006`}
          profession={'Նկարչուհիներ'}
        />

        <WomanCard
          img={'/img/woman_2.png'}
          show={true}
          className={`col-span-4`}
          name={'Ասլամազյան քույրեր'}
          address={'Գյումրի, Հայաստան'}
          lifeDuration={`1907-2006`}
          profession={'Նկարչուհիներ'}
        />

        <WomanCard
          img={'/img/womanPicture.png'}
          show={true}
          className={`col-span-4`}
          name={'Ասլամազյան քույրեր'}
          address={'Գյումրի, Հայաստան'}
          lifeDuration={`1907-2006`}
          profession={'Նկարչուհիներ'}
        />

        <Button
          label={'Տեսնել բոլորին'}
          className={
            'text-violet-950 pb-[8px] border-b border-yellow-450 col-start-2 col-end-3 mb-20 mt-9  lg:col-start-6 lg:col-end-7 lg:mb-[140px] w-[152px] lg:mt-[102px]'
          }
        />
      </div>
    </MainLayout>
  )
}
