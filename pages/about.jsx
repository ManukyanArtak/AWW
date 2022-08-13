import MainLayout from '../src/components/layout/Main'
import HeroBanner from '../src/components/shared/HeroBanner'
import PageConstants from '../src/const'

export default function About() {
  return (
    <MainLayout>
      <HeroBanner text={PageConstants.aboutPage.heroBannerText} />
      <h1>About</h1>
    </MainLayout>
  )
}
