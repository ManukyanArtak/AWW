import MainLayout from '../src/components/layout/Main'
import AboutProject from '../src/components/shared/AboutProject'
import HeroBanner from '../src/components/shared/HeroBanner'
import PageConstants from '../src/const'
import AboutBook from '../src/components/shared/AboutBook'
import SectionTitle from '../src/components/shared/SectionTitle'
import WomanCardLayout from '../src/components/shared/WomenCardLayout'
import Button from '../src/components/shared/Button'
import styles from '../src/components/shared/WomenCardLayout/womanLayout.module.css'

export default function Home() {
  const women = ['/img/women.png', '/img/womanPicture.png', '/img/women.png']

  return (
    <MainLayout>
      <div>
        <HeroBanner
          text={PageConstants.homePage.heroBannerText}
          showScroller={true}
        />
        <SectionTitle
          className={'pb-14 mt-12 container mx-auto'}
          title={'Նախագծի մասին'}
          direction={'left'}
        />
        <AboutProject
          direction={'left'}
          text={PageConstants.global.aboutGoal.text}
        />
        <SectionTitle
          className={'pb-14 mt-12 container mx-auto'}
          title={'Նպատակը առաքինություն է'}
          direction={'right'}
        />
        <AboutProject
          direction={'right'}
          text={PageConstants.global.aboutGoal.text}
        />
        <SectionTitle
          className={'pb-14 mt-12 container mx-auto'}
          title={PageConstants.global.aboutBook.title}
          direction={'left'}
        />
        <AboutBook />

        <SectionTitle
          className={'pb-14 mt-12 container mx-auto'}
          title={PageConstants.womenCard.title}
          direction={'right'}
        />
        <WomanCardLayout className={''} womens={women} />

        <div className={'text-center mb-24 mt-24'}>
          <Button
            label={'Տեսնել բոլորին'}
            className={`${styles.btn} text-white  bg-transparent  font-semibold  py-4 px-6 border inline-block `}
          />
        </div>
      </div>
    </MainLayout>
  )
}
