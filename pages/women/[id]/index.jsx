import PageConstants from '../../../src/const'
import MainLayout from '../../../src/components/layout/Main'
import Biography from '../../../src/components/pages/women/biography'
import SelectDownload from '../../../src/components/shared/SelectDownload'
import WomanPageHeroBanner from '../../../src/components/shared/WomanPageHeroBaner'
import RemarkableStories from '../../../src/components/pages/women/remarkableStories'
import Images from '../../../src/components/pages/women/Images'
import Videos from '../../../src/components/pages/women/videos'
import SideBarMenu from '../../../src/components/shared/sidebarMenu'
import Strapi from '../../../services/backend/Strapi'
import {
  lifeDuration,
  scrollToElement,
} from '../../../services/frontend/helpers'

export async function getServerSideProps({ req, res, params: { id } }) {
  const strapi = new Strapi()
  const { data } = await strapi.findWoman(id)

  return {
    props: {
      woman: data,
    },
  }
}

export default function PersonalPage({ woman }) {
  const {
    birthday,
    first_name,
    last_name,
    city,
    country,
    death_day,
    avatar,
    childhood,
    boyhood,
    remarkable_stories,
    images,
    video,
  } = woman?.attributes

  return (
    <>
      <SideBarMenu
        data={{ childhood, boyhood, images: images?.data, video: video.data }}
      />
      <MainLayout>
        <WomanPageHeroBanner
          name={`${first_name} ${last_name}`}
          birthPlace={`${city}, ${country}`}
          img={avatar.data.attributes.url}
          profession={PageConstants.womanPage.heroBanner.profession}
          lifeDuration={lifeDuration(birthday, death_day)}
        />
        <div
          className={
            'container mx-auto grid grid-cols-4 lg:grid-cols-12 gap-6 pt-4  '
          }
        >
          <div className={'col-span-4 mt-[100px] hidden lg:block'}>
            <ul>
              <li className={'font-semibold text-violet-950 text-xl'}>
                Կենսագրություն
              </li>
              {childhood ? (
                <li className={'mt-6 text-lg text-violet-950 font-medium '}>
                  <button onClick={() => scrollToElement('childhood')}>
                    Մանկություն
                  </button>
                </li>
              ) : null}
              {boyhood ? (
                <li className={'mt-4 text-lg text-violet-950 font-medium '}>
                  <button onClick={() => scrollToElement('youth')}>
                    Պատանեկություն
                  </button>
                </li>
              ) : null}
              {images?.data ? (
                <li className={'font-semibold text-violet-950 text-xl mt-10 '}>
                  <button onClick={() => scrollToElement('images')}>
                    Նկարներ
                  </button>
                </li>
              ) : null}
              {video.data ? (
                <li className={'font-semibold text-violet-950 text-xl mt-10'}>
                  <button onClick={() => scrollToElement('videos')}>
                    Տեսանյութեր
                  </button>
                </li>
              ) : null}
            </ul>
          </div>
          <div className={'col-span-4 lg:col-span-8'}>
            {childhood ? (
              <Biography
                title={'Մանկություն'}
                text={childhood}
                divider={false}
                id={'childhood'}
              />
            ) : null}

            {boyhood ? (
              <Biography
                title={'Պատանեկություն'}
                text={boyhood}
                divider={true}
                id={'youth'}
              />
            ) : null}

            {remarkable_stories ? (
              <RemarkableStories
                title={'ՈՒշագրավ Պատմություններ'}
                stories={remarkable_stories}
              />
            ) : null}

            {images?.data ? <Images images={images.data} /> : null}

            {video?.data ? <Videos videos={video.data} /> : null}

            <SelectDownload />
          </div>
        </div>
        <div className={`container mx-auto mt-16  lg:mt-[120px]`}>
          <h3
            className={`text-black text-xl font-bold mb-12 lg:mb-16 lg:font-normal lg:text-3xl lg:mb-16`}
          >
            Շարունակիր բացահայտել
          </h3>
          {/*<WomenCardLayout className={''} women={women} />*/}
        </div>
      </MainLayout>
    </>
  )
}