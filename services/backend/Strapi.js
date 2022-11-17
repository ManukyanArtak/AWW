export default class Strapi {
  constructor() {}
  getWomen = async (ids, pageNumber = 1) => {
    let all = ''
    if (ids.length) {
      let filtersString = ids.toString()
      all += `filters:{categories:{id: { in: [${filtersString}] }}}`
    }

    if (pageNumber) {
      all += `pagination:{page:${pageNumber}, pageSize:15}`
    }

    return await this.request(`query{
  women${all ? `(${all})` : ''}{
    data {
    id
      attributes {
        first_name,
        last_name,
        birthday,
        city,
        death_day,
        country,
        avatarSize,
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
        avatarSize,
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
        images{
          data{
            id
            attributes{
              name
              img{
                data{
                  attributes{
                    url
                  }
                }
              }
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
        women_stories{
          data{
            attributes{
              name,
              text
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
    console.log(process.env.STRAPI_BASE_URL,777777777)
    const response = await fetch(
      new URL('/api/posts-report', process.env.STRAPI_BASE_URL)
    )
    const ids = await response.json()

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
        new URL('/graphql', process.env.STRAPI_BASE_URL),
        requestOptions
      )

      return await response.json()
    } catch (e) {
      console.error(e)
    }
  }
}
