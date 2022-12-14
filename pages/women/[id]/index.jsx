import * as Yup from 'yup'
import { useState } from 'react'
import { useFormik } from 'formik'
import PageConstants from '../../../src/const'
import Strapi from '../../../services/backend/Strapi'
import MainLayout from '../../../src/components/layout/Main'
import Images from '../../../src/components/pages/women/Images'
import Videos from '../../../src/components/pages/women/videos'
import {
  lifeDuration,
  scrollToElement,
} from '../../../services/frontend/helpers'
import Loader from '../../../src/components/shared/Loader'
import { handleRequest } from '../../../services/frontend/request'
import SideBarMenu from '../../../src/components/shared/sidebarMenu'
import Biography from '../../../src/components/pages/women/biography'
import ErrorMessage from '../../../src/components/shared/ErrorMessage'
import SuccessMessage from '../../../src/components/shared/SuccessMessage'
import SelectDownload from '../../../src/components/shared/SelectDownload'
import WomanPageHeroBanner from '../../../src/components/shared/WomanPageHeroBaner'
import RemarkableStories from '../../../src/components/pages/women/remarkableStories'
import WomenSlider from '../../../src/components/shared/WomenSlider'
import SideMenuContent from '../../../src/components/shared/sideMenuContent'

export async function getServerSideProps({ req, res, params: { id } }) {
  const strapi = new Strapi()
  const { data } = await strapi.findWoman([id])
  const categoryIds = data.women.data[0].attributes.categories.data.map(
    (item) => item.id
  )

  const women = await strapi.getWomen(categoryIds)

  return {
    props: {
      woman: data.women.data[0],
      suggestWoman: women.data.women.data,
    },
  }
}

export default function PersonalPage({ woman, suggestWoman }) {
  const [requestState, setRequestState] = useState('')
  const [loader, setLoader] = useState(false)
  const {
    birthday,
    first_name,
    last_name,
    city,
    country,
    death_day,
    avatar,
    images,
    videos,
    categories,
    women_stories,
  } = woman?.attributes

  const download = async (values) => {
    const body = document.querySelector('body')
    body.style.overflow = 'hidden'
    setLoader(true)
    await handleRequest('download', values)
      .then(() => {
        setRequestState('success')
        formik.handleReset()
      })
      .catch(() => {
        setRequestState('error')
      })
      .finally(() => {
        setLoader(false)
      })
  }

  const onCancelClick = () => {
    const body = document.querySelector('body')
    setRequestState('')
    body.style.overflow = 'auto'
  }

  const formik = useFormik({
    initialValues: { email: '' },
    onSubmit: (values) => download(values),
    validationSchema: Yup.object({
      email: Yup.string().email('Please enter valid email'),
    }),
  })

  const data = {
    images: images?.data,
    video: videos.data,
    womanStories: women_stories.data,
  }

  return (
    <>
      <SideBarMenu data={data} />
      <MainLayout>
        <WomanPageHeroBanner
          name={`${first_name} ${last_name}`}
          birthPlace={`${city}, ${country}`}
          img={avatar.data.attributes.url}
          profession={categories.data[0]?.attributes.name}
          lifeDuration={lifeDuration(birthday, death_day)}
        />
        <div
          className={
            'container mx-auto grid grid-cols-4 lg:grid-cols-12 gap-6 pt-4  '
          }
        >
          <div className={'col-span-4 mt-25 hidden lg:block'}>
            <SideMenuContent
              data={data}
              className={''}
              onClick={scrollToElement}
            />
          </div>
          <div className={'col-span-4 lg:col-span-8'}>
            {women_stories.data.length
              ? women_stories?.data?.map((story) => {
                  const { name, text } = story?.attributes

                  return (
                    <Biography title={name} text={text} id={name} key={name} />
                  )
                })
              : null}

            {images?.data?.length ? <Images images={images.data} /> : null}

            {videos?.data?.length ? <Videos videos={videos.data} /> : null}

            <SelectDownload formik={formik} download={download} />
          </div>
        </div>
        <div className={`container mx-auto mt-16  lg:mt-30 mb-33`}>
          <WomenSlider
            women={suggestWoman.slice(0, 3)}
            title={PageConstants.slider.title}
            womanPage={true}
          />
        </div>
      </MainLayout>
      {loader ? <Loader /> : null}
      {requestState === 'success' ? (
        <SuccessMessage onClose={onCancelClick} />
      ) : null}
      {requestState === 'error' ? (
        <ErrorMessage
          onTryClick={() => download(formik.values)}
          onCancelClick={onCancelClick}
        />
      ) : null}
    </>
  )
}
