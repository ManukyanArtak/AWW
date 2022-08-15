import MainLayout from '../src/components/layout/Main'
import AboutProject from '../src/components/shared/AboutProject'
import HeroBanner from '../src/components/shared/HeroBanner'
import PageConstants from '../src/const'
import AboutBook from '../src/components/shared/AboutBook'
import SectionTitle from '../src/components/shared/SectionTitle'
import WomanCard from '../src/components/shared/WomanCard'
import WomanCardLayout from '../src/components/shared/WomenCardLayout'

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
        <SectionTitle
          className={'pb-14 mt-12'}
          title={PageConstants.global.womenCard.title}
          direction={'right'}
        />
        <WomanCardLayout>
          <WomanCard
            address={PageConstants.global.womenCard.address}
            name={PageConstants.global.womenCard.name}
            lifeDuration={PageConstants.global.womenCard.lifeDuration}
            profession={PageConstants.global.womenCard.profession}
            className={PageConstants.global.womenCard.className_1}
          />
          <WomanCard
            address={PageConstants.global.womenCard.address}
            name={PageConstants.global.womenCard.name}
            lifeDuration={PageConstants.global.womenCard.lifeDuration}
            profession={PageConstants.global.womenCard.profession}
            className={'col-start-5 col-end-8'}
          />

          <WomanCard
            address={PageConstants.global.womenCard.address}
            name={PageConstants.global.womenCard.name}
            lifeDuration={PageConstants.global.womenCard.lifeDuration}
            profession={PageConstants.global.womenCard.profession}
            className={'col-start-9 col-end-12'}
          />
        </WomanCardLayout>
      </div>
    </MainLayout>
  )
}
