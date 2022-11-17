import Link from 'next/link'
import PageConstants from '../../../const'
import AboutBook from '../../shared/AboutBook'
import HeroBanner from '../../shared/HeroBanner'
import WomenSlider from '../../shared/WomenSlider'
import AboutProject from '../../shared/AboutProject'
import styles from './home.module.css'

export default function Home({ women }) {
  return (
    <div>
      <HeroBanner
        text={PageConstants.homePage.heroBannerText}
        showScroller={true}
      />

      <AboutProject
        direction={'left'}
        text={PageConstants.global.aboutProject.text}
        title={PageConstants.global.aboutProject.title}
        className={'mt-22'}
      />

      <AboutProject
        direction={'right'}
        text={PageConstants.global.aboutGoal.text}
        title={PageConstants.global.aboutGoal.title}
        className={'mt-22 lg:mt-23'}
      />
      <AboutBook className={`mt-15 lg:mt-33`} />

      <WomenSlider women={women} title={PageConstants.slider.homeTitle} />

      <div className={'text-center mb-24 mt-24'}>
        <Link href={'/women'}>
          <a
            className={`text-white bg-violet-1000 font-semibold py-4 px-6 border inline-block ${styles.seeAll} `}
          >
            Տեսնել բոլորին
          </a>
        </Link>
      </div>
    </div>
  )
}
