import MainLayout from '../src/components/layout/Main'
import HeroBanner from '../src/components/shared/HeroBanner'
import PageConstants from '../src/const'
import SectionTitle from '../src/components/shared/SectionTitle'
import AboutProject from '../src/components/shared/AboutProject'
import AboutAuthors from '../src/components/shared/AboutAuthors'

export default function About() {
  return (
    <MainLayout>
      <HeroBanner
        text={PageConstants.aboutPage.heroBannerText}
        showScroller={false}
      />
      {/*<SectionTitle*/}
      {/*  direction={'left'}*/}
      {/*/>*/}
      <AboutProject
        direction={'left'}
        text={PageConstants.global.aboutGoal.text}
        title={PageConstants.global.aboutGoal.title}
        className={`mt-[56px] lg:mt-[90px]`}
      />
      {/*<SectionTitle*/}
      {/*  className={'pb-14 mt-12 container mx-auto'}*/}
      {/*  title={'Նպատակը առաքինություն է'}*/}
      {/*  direction={'right'}*/}
      {/*/>*/}
      <AboutProject
        direction={'right'}
        text={PageConstants.global.aboutGoal.text}
        title={PageConstants.global.aboutGoal.title}
        className={`mt-[56px] lg:mt-[90px]`}

      />
      {/*<SectionTitle*/}
      {/*  className={'pb-14 mt-12 container mx-auto'}*/}
      {/*  title={'Հեղինակների մասին'}*/}
      {/*  direction={'left'}*/}
      {/*/>*/}
      <AboutAuthors
        direction={'left'}
        className={'container grid grid-cols-4 lg:grid-cols-12 gap-6 mt-[56px] mx-auto lg:mt-[90px]'}
        title={PageConstants.aboutPage.title}
        section={true}

      />
      <AboutAuthors
        direction={'right'}
        className={'container grid grid-cols-4 mt-10 lg:grid-cols-12 mx-auto  lg:mt-[70px] mb-36'}
      />
    </MainLayout>
  )
}
