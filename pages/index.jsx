import Strapi from '../services/backend/Strapi'
import HomePage from '../src/components/pages/home'
import MainLayout from '../src/components/layout/Main'

export async function getServerSideProps({ req, res }) {
  let randomWomen
  try {
    const strapi = new Strapi()
    randomWomen = await strapi.getRandomWomen()
    console.log(randomWomen, 'randomwomen')
  } catch (e) {
    console.log(e)
  }

  return {
    props: {
      women: randomWomen.data.women.data,
    },
  }
}

export default function Home({ women }) {
  return (
    <MainLayout>
      <HomePage women={women} />
    </MainLayout>
  )
}
