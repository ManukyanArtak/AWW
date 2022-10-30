import Link from 'next/link'
import PageConstants from '../../../const'
import AboutBook from '../../shared/AboutBook'
import HeroBanner from '../../shared/HeroBanner'
import AboutProject from '../../shared/AboutProject'
import WomanCardLayout from '../../shared/WomenCardLayout'
import styles from '../../shared/WomenCardLayout/womanLayout.module.css'
import WomenSlider from '../../shared/WomenSlider'

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
        className={'mt-[80px] lg:mt-[90px]'}
      />

      <AboutProject
        direction={'right'}
        text={PageConstants.global.aboutGoal.text}
        title={PageConstants.global.aboutGoal.title}
        className={'mt-[88px] lg:mt-[95px]'}
      />
      <AboutBook className={`mt-[58px] lg:mt-[140px]`} />

      {/*<WomanCardLayout women={women} title={PageConstants.womenCard.title} />*/}
      <WomenSlider women={women} title={PageConstants.womenCard.title} />

      <div className={'text-center mb-24 mt-24'}>
        <Link href={'/women'}>
          <a
            className={`${styles.btn} text-white bg-transparent  font-semibold  py-4 px-6 border inline-block `}
          >
            Տեսնել բոլորին
          </a>
        </Link>
      </div>
    </div>
  )
}
