export default class Strapi {
  constructor() {}
  getWomen = async (ids) => {
    let filters
    if (ids.length) {
      let filtersString = ids.toString()
      filters = `(filters:{categories:{id: { in: [${filtersString}] }}})`
    }

    return await this.request(`query{
  women${filters ? filters : ''}{
    data {
    id
      attributes {
        first_name,
        last_name,
        birthday,
        city,
        death_day,
        country,
        avatar{
          data{
            attributes{
              url
            }
          }
        },
        categories{
          data{
            id
            attributes{
              name,
            }
          }
        }
      }
    },
    meta{
      pagination{
        total,
        page,
        pageCount,
        pageSize
      }
    }
  }
}
`)
  }

  findWoman = async (ids) =>
    await this.request(`query {
  women(filters:{id:{in:[${ids.toString()}]}}){
    data {
    id
      attributes {
        first_name,
        last_name,
        childhood,
        boyhood,
        remarkable_stories,
        birthday,
        city,
        death_day,
        country,
        avatar{
          data{
            attributes{
              url
            }
          }
        },
        images{
          data{
            attributes{
              url
            }
          }
        },
        categories{
          data{
            id
            attributes{
              name,
            }
          }
        }
        videos{
          data{
            attributes{
              name,
              url
            }
          }
        }
      }
    }
  }
}`)

  getCategories = async () =>
    await this.request(`query {
  categories(pagination:{limit:200}){
    data {
      id,
      attributes {
        name
      }
    },
    meta{
      pagination{
        total,
        pageSize
      }
    }
  }
}`)

  getRandomWomen = async () => {
    const response = await fetch(`http://127.0.0.1:1337/api/posts-report`)
    const ids = await response.json()
    console.log(ids)

    return await this.findWoman(ids)
  }

  request = async (query) => {
    let myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    let graphql = JSON.stringify({
      query: query,
    })
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: graphql,
      redirect: 'follow',
    }

    try {
      const response = await fetch(
        `http://127.0.0.1:1337/graphql`,
        requestOptions
      )

      return await response.json()
    } catch (e) {
      console.error(e)
    }
  }
}
