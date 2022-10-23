export default class Strapi {
  constructor() {}
  getWomen = async () =>
    await this.request(`query {
  women {
    data {
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
            attributes{
              name
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
}`)

  findWoman = async (id) => await this.request(`api/women/${id}?populate=*`)

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
