import PageConstants from '../../../src/const'
import MainLayout from '../../../src/components/layout/Main'
import Biography from '../../../src/components/pages/women/biography'
import SelectDownload from '../../../src/components/shared/SelectDownload'
import WomanPageHeroBanner from '../../../src/components/shared/WomanPageHeroBaner'
import RemarkableStories from '../../../src/components/pages/women/remarkableStories'
import Images from '../../../src/components/pages/women/Images'
import Videos from '../../../src/components/pages/women/videos'
import SideBarMenu from '../../../src/components/shared/sidebarMenu'
import WomenCardLayout from '../../../src/components/shared/WomenCardLayout'

export default function PersonalPage() {
  const mankutyun = (
    <>
      Հայաստանի առաջին կին-ճարտարապետը, ով աշխատել է դեռեւս Ալեքսանդր Թամանյանի
      եւ Նիկողայոս Բունիաթյանի արվեստանոցներում ու համագործակցել խորհրդահայ
      ճարտարապետության ամենախոշոր դեմքերի հետ, գրեթե մեկ հարյուրամյակի հասնող իր
      կյանքի ընթացքում անցել է այդ դժվարին ժամանակի բազմաթիվ արհավիրքների ու
      վերելքների միջով, կատարել մեծ եւ արդյունավետ աշխատանք:
      <br />
      <br />
      Նրա հեղինակությամբ կառուցվել են Երեւանի ներկայանալի շենքրից շատերը.
      Կորյունի եւ Մաշտոցի փողոցների անկյունում գտնվող կինեմատոգրաֆիսների բնակելի
      տունը (նշանավոր ՙՊոնչիկանոցը՚), Կորյուն եւ Աբովյան փողոցների հատման տեղում
      կանգնած շենքը, ԳԱ Լեզվի ինստիտուտի շենքը Աբովյան փողոցի վրա, ՙՍասունցի
      Դավիթ՚ կինոթատրոնը, Առեւտրի մինիստրության (հետագայում` Սոցապահովության
      նախարարության) շենքը Տերյան փողոցի վրա եւ բազմաթիվ այլ բնակելի,
      հասարակական, առողջապահական, դպրոցական շենքեր Երեւանում, Գյումրիում,
      Վանաձորում, Կամոյում, Ստեփանավանում եւ այլուր:
    </>
  )

  const patanekutyun = (
    <>
      Երիտասարդ, սակայն հասուն եւ բացառիկ ընդունակությունների տեր Աննա
      Տեր-Ավետիքյանին իր մոտ աշխատելու հրավիրեց նաեւ հայկական ճարտարապետության
      մեկ այլ ականավոր ներկայացուցիչ` Ալեքսանդր Թամանյանը: Ցերեկները աշխատելով
      Բունիաթյանի մոտ, երեկոյան գնում էր Թամանյանի արվեստանոցը, որտեղ այդ
      ժամանակ մշակվում էր Պետօպերայի (Ժողտան) նախագիծը: Համագործակցությունն այս
      երկու մեծ վարպետների հետ նորավարտ ճարտարապետի համար դարձավ մասնագիտական
      փայլուն դպրոց, որի ավանդներին նա հավատարիմ մնաց իր ողջ կյանքի ընթացքում:
      Ա. Տեր-Ավետիքյանի ստեղծագործական գլխավոր հավատամքը` հավատարմությունը
      հայկական դասական ճարտարապետության ազգային ավանդույթներին, ձեւավորվեց հենց
      այդ ժամանակ եւ հետագայում վառ արտահայտվեց նրա բազմաթիվ
      ստեղծագործություններում:
    </>
  )

  const stories = [
    {
      text: 'Բավականին հայտնի էր նաեւ Աննա Տեր-Ավետիքյանի մայրական կողմը, որին ազնվականության տիտղոս էր շնորհել ռուսական արքա Նիկոլայ առաջինը` ռուս-պարսկական պատերազմի ժամանակ գեներալ Պասկեվիչի զորքին մատուցած մեծ ծառայությունների համար: Գերդաստանի այս կողմի արմատները գնում են դեպի Հայաստանի մյուս մայրաքաղաքը` Անին:',
      author: 'Էլինա Սիմոնյան, կոլեգա։',
    },
    {
      text: 'Դեռեւս ուսանող ժամանակ` 1926-ին, Ա.Տեր-Ավետիքյանը աշխատանքի ընդունվեց Երեւանի քաղսովետի գործկոմի ճարտարապետական բաժին, որը գլխավորում էր ճարտարապետ Նիկողայոս Բունիաթյանը: Այսօր էլ Աննա Տեր-Ավետիքյանը խորագույն հարգանքով եւ հիացմունքով է խոսում մեծ վարպետի մասին եւ ուրախանում, որ ճակատագիրը հնարավորություն տվեց իրեն աշխատելու նրա հետ: Երիտասարդ, սակայն հասուն եւ բացառիկ ընդունակությունների տեր Աննա Տեր-Ավետիքյանին իր մոտ աշխատելու հրավիրեց նաեւ հայկական ճարտարապետության մեկ այլ ականավոր ներկայացուցիչ` Ալեքսանդր Թամանյանը: Ցերեկները աշխատելով Բունիաթյանի մոտ, երեկոյան գնում էր Թամանյանի արվեստանոցը, որտեղ այդ ժամանակ մշակվում էր Պետօպերայի (Ժողտան) նախագիծը:',
      author: 'Էլինա Սիմոնյան, կոլեգա։',
    },
  ]

  const images = [{ text: '' }, { text: '' }, { text: '' }, { text: '' }]
  const women = ['/img/women.png', '/img/womanPicture.png', '/img/women.png']

  return (
    <>
      <SideBarMenu />
      <MainLayout>
        <WomanPageHeroBanner
          name={PageConstants.womanPage.heroBanner.name}
          birthPlace={PageConstants.womanPage.heroBanner.birthPlace}
          lifeDuration={PageConstants.womanPage.heroBanner.lifeDuration}
          profession={PageConstants.womanPage.heroBanner.profession}
        />
        <div
          className={
            'container mx-auto grid grid-cols-4 lg:grid-cols-12 gap-6 pt-4  '
          }
        >
          <div className={'col-span-4 mt-[100px] hidden lg:block'}>
            <ul>
              <li className={'font-semibold text-violet-950 text-xl'}>
                <a>Կենսագրություն</a>
              </li>
              <li className={'mt-6 text-lg text-violet-950 font-medium '}>
                <a>Մանկություն</a>
              </li>
              <li className={'mt-4 text-lg text-violet-950 font-medium '}>
                <a>Պատանեկություն</a>
              </li>
              <li className={'font-semibold text-violet-950 text-xl mt-10 '}>
                <a>Նկարներ</a>
              </li>
              <li className={'font-semibold text-violet-950 text-xl mt-10'}>
                <a>Տեսանյութեր</a>
              </li>
              f
            </ul>
          </div>
          <div className={'col-span-4 lg:col-span-8'}>
            <Biography title={'Մանկություն'} text={mankutyun} divider={false} />
            <Biography
              title={'Պատանեկություն'}
              text={patanekutyun}
              divider={true}
            />
            <RemarkableStories
              title={'ՈՒշագրավ Պատմություններ'}
              stories={stories}
            />
            <Images images={images} />
            <Videos images={images} />
          </div>
        </div>
        <SelectDownload />
        <div className={`container mx-auto mt-16  lg:mt-[120px]`}>
          <h3
            className={`text-black text-xl font-bold mb-12 lg:mb-16 lg:font-normal lg:text-3xl lg:mb-16`}
          >
            Շարունակիր բացահայտել
          </h3>
          <WomenCardLayout className={''} womens={women} />
        </div>
      </MainLayout>
    </>
  )
}
