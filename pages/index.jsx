import MainLayout from '../src/components/layout/Main'
import AboutProject from '../src/components/shared/AboutProject'
import HeroBanner from '../src/components/shared/HeroBanner'
import PageConstants from '../src/const'
import AboutBook from '../src/components/shared/AboutBook'
import SectionTitle from '../src/components/shared/SectionTitle'
import AboutAuthors from '../src/components/AboutAuthors'
import WomanCard from '../src/components/shared/WomanCard'
import WomanCardLayout from '../src/components/shared/WomenCardLayout'
import FilterButtons from '../src/components/FilterButtons'
import WomanPageHeroBanner from '../src/components/WomanPageHeroBaner'
import Picture from '../src/components/Picture'
import SelectDownload from '../src/components/SelectDownload'

export default function Home() {

  const womens = [PageConstants.womenCard, PageConstants.womenCard, PageConstants.womenCard]

  return (
    <MainLayout>
      <div className={`grid`}>
        <HeroBanner text={PageConstants.homePage.heroBannerText} />

        {/*  <AboutProject*/}
        {/*    direction={'right'}*/}
        {/*    text={PageConstants.global.aboutGoal.text}*/}
        {/*  />*/}
        {/*  <SectionTitle*/}
        {/*    className={'pb-14 mt-12'}*/}
        {/*    title={PageConstants.global.aboutBook.title}*/}
        {/*    direction={'left'}*/}
        {/*  />*/}
        {/*  <AboutBook />*/}

        {/*  <SectionTitle*/}
        {/*    className={'mt-[140px]'}*/}
        {/*    title={PageConstants.global.aboutAuthors.title}*/}
        {/*    direction={'left'}*/}
        {/*  />*/}

        {/*  <AboutAuthors direction={'left'} />*/}
        {/*  <AboutAuthors direction={'right'} />*/}
        {/*  <SectionTitle*/}
        {/*    className={'pb-14 mt-12'}*/}
        {/*    title={PageConstants.global.womenCard.title}*/}
        {/*    direction={'right'}*/}
        {/*  />*/}
        <WomanCardLayout className={'flex justify-center'} womens={womens}/>

        {/*<WomanPageHeroBanner*/}
        {/*  name={PageConstants.womanPage.heroBanner.name}*/}
        {/*  birthPlace={PageConstants.womanPage.heroBanner.birthPlace}*/}
        {/*  lifeDuration={PageConstants.womanPage.heroBanner.lifeDuration}*/}
        {/*  profession={PageConstants.womanPage.heroBanner.profession}*/}
        {/*/>*/}
        {/*<Picture*/}
        {/*  className={`col-start-1 col-end-5 lg:col-start-5 lg:col-end-8`}*/}
        {/*/>*/}
        {/*<SelectDownload />*/}
      </div>
    </MainLayout>
  )
}
