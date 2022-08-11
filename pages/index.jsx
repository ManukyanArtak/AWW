import MainLayout from '../src/components/layout/Main'
import HeroBanner from "../src/components/shared/HeroBanner";
import PageConstants from "../src/const";

export default function Home() {
  return (
      <MainLayout>
          <HeroBanner text={PageConstants.homePage.heroBannerText}/>
          <div>
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
          </div>
      </MainLayout>

  )
}
