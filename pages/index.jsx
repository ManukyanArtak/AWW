import MainLayout from '../src/components/layout/Main'
import AboutProject from "../src/components/shared/AboutProject";
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
          <p className="text-3xl font-bold underline">
              Hello world!
          </p>
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

      </MainLayout>

  )
}
