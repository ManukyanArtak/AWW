import MainLayout from '../src/components/layout/Main'
import AboutProject from "../src/components/shared/AboutProject";
import HeroBanner from "../src/components/shared/HeroBanner";
import PageConstants from "../src/const";
import AboutBook from "../src/components/shared/AboutBook";

export default function Home() {
  return (
      <MainLayout>
          <HeroBanner text={PageConstants.homePage.heroBannerText}/>
          <AboutProject
              direction={'left'}
              title={'Նախագծի մասին'}
              text={
                  " «Զարմանահրաշ հայ կանայք» սիրո, զայրույթի, հպարտության և հիասթափության արգասիք է: Արդյունք է երկար ու մանրակրկիտ հետազոտության,անվերջ բացահայտումների, կրքի, հետաքրքրասիրության և գնահատանքի:"
              }
          />

          <AboutProject direction={'right'} title={"Նպատակը առաքինություն է"}
                        text={
                            " «Զարմանահրաշ հայ կանայք» սիրո, զայրույթի, հպարտության և հիասթափության արգասիք է:Արդյունք է երկար ու մանրակրկիտ հետազոտության,անվերջ բացահայտումների, կրքի, հետաքրքրասիրության և գնահատանքի:"
                        }          />
          <AboutBook/>

      </MainLayout>

  )
}
