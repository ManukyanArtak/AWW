import MainLayout from '../src/components/layout/Main'
import AboutProject from '../src/components/shared/AboutProject'
import HeroBanner from '../src/components/shared/HeroBanner'
import PageConstants from '../src/const'
import AboutBook from '../src/components/shared/AboutBook'
import WomanCardLayout from '../src/components/shared/WomenCardLayout'
import Button from '../src/components/shared/Button'
import styles from '../src/components/shared/WomenCardLayout/womanLayout.module.css'
import Strapi from '../services/backend/Strapi'
import { useRouter } from 'next/router'

export async function getServerSideProps({ req, res }) {
  const strapi = new Strapi()
  const { data } = await strapi.getRandomWomen()

  return {
    props: {
      women: data.women.data,
    },
  }
}

export default function Home({ women }) {
  const router = useRouter()
  const redirect = () => {
    router.push('/women')
  }

  return (
    <MainLayout>
      <div>
        <HeroBanner
          text={PageConstants.homePage.heroBannerText}
          showScroller={true}
        />

        <AboutProject
          direction={'left'}
          text={PageConstants.global.aboutProject.text}
          title={PageConstants.global.aboutProject.title}
          className={'mt-[80px] lg:mt-[90px]'}
        />

        <AboutProject
          direction={'right'}
          text={PageConstants.global.aboutGoal.text}
          title={PageConstants.global.aboutGoal.title}
          className={'mt-[88px] lg:mt-[95px]'}
        />
        <AboutBook className={`mt-[58px] lg:mt-[140px]`} />

        <WomanCardLayout women={women} />

        <div className={'text-center mb-24 mt-24'}>
          <Button
            label={'Տեսնել բոլորին'}
            className={`${styles.btn} text-white bg-transparent  font-semibold  py-4 px-6 border inline-block `}
            onClick={redirect}
          />
        </div>
      </div>
    </MainLayout>
  )
}
