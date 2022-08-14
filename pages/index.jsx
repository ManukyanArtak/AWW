import MainLayout from '../src/components/layout/Main'
import AboutProject from '../src/components/shared/AboutProject'
import HeroBanner from '../src/components/shared/HeroBanner'
import PageConstants from '../src/const'
import AboutBook from '../src/components/shared/AboutBook'
import SectionTitle from '../src/components/shared/SectionTitle'

export default function Home() {
  return (
    <MainLayout>
      <div className={`grid`}>
        <HeroBanner text={PageConstants.homePage.heroBannerText} />
        <SectionTitle
          className={'pb-14 mt-12'}
          title={PageConstants.global.aboutProject.title}
          direction={'left'}
        />
        <AboutProject
          direction={'left'}
          text={PageConstants.global.aboutProject.text}
        />
        <SectionTitle
          className={'pb-14 mt-12'}
          title={PageConstants.global.aboutGoal.title}
          direction={'right'}
        />

        <AboutProject
          direction={'right'}
          text={PageConstants.global.aboutGoal.text}
        />
        <SectionTitle
          className={'pb-14 mt-12'}
          title={PageConstants.global.aboutBook.title}
          direction={'left'}
        />
        <AboutBook />
      </div>
    </MainLayout>
  )
}
