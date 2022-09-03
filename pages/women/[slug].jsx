import MainLayout from '../../src/components/layout/Main'
import WomanPageHeroBanner from '../../src/components/shared/WomanPageHeroBaner'
import PageConstants from '../../src/const'
import WomanCardLayout from '../../src/components/shared/WomenCardLayout'
import SelectDownload from '../../src/components/shared/SelectDownload'

export default function PersonalPage() {
  const womens = [
    PageConstants.womenCard,
    PageConstants.womenCard,
    PageConstants.womenCard,
  ]

  return (
    <MainLayout>
      <WomanPageHeroBanner
        name={PageConstants.womanPage.heroBanner.name}
        birthPlace={PageConstants.womanPage.heroBanner.birthPlace}
        lifeDuration={PageConstants.womanPage.heroBanner.lifeDuration}
        profession={PageConstants.womanPage.heroBanner.profession}
      />
      <SelectDownload />
      <WomanCardLayout className={'flex justify-center'} womens={womens} />
    </MainLayout>
  )
}
