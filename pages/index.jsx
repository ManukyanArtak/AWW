import MainLayout from '../src/components/layout/Main'
import HeroBanner from "../src/components/shared/HeroBanner";
import PageConstants from "../src/const";
import AboutBook from "../src/components/shared/AboutBook";

export default function Home() {
  return (
      <MainLayout>
          <HeroBanner text={PageConstants.homePage.heroBannerText}/>
          <AboutBook/>
      </MainLayout>

  )
}
