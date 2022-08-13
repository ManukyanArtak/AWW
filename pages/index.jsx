import MainLayout from '../src/components/layout/Main'
import AboutProject from '../src/components/shared/AboutProject'
import HeroBanner from '../src/components/shared/HeroBanner'
import PageConstants from '../src/const'
import AboutBook from '../src/components/shared/AboutBook'
import SectionTitle from '../src/components/shared/SectionTitle'

export default function Home() {
  return (
    <MainLayout>
      <HeroBanner text={PageConstants.homePage.heroBannerText} />
      <SectionTitle
        className={'pb-14 pt-12'}
        title={PageConstants.global.aboutProject.title}
        direction={'left'}
      />
      <AboutProject
        direction={'left'}
        text={PageConstants.global.aboutProject.text}
      />
      <SectionTitle
        className={'pb-14 pt-12'}
        title={`Նպատակը առաքինություն է`}
        direction={'right'}
      />

      <AboutProject
        direction={'right'}
        text={
          ' «Զարմանահրաշ հայ կանայք» սիրո, զայրույթի, հպարտության և հիասթափության արգասիք է:' +
          'Արդյունք է երկար ու մանրակրկիտ հետազոտության,անվերջ բացահայտումների, կրքի, հետաքրքրասիրության և գնահատանքի:'
        }
      />
      <SectionTitle
        className={'pb-14 pt-12'}
        title={`Գրքի մասին`}
        direction={'left'}
      />
      <AboutBook />
    </MainLayout>
  )
}
