export default class Strapi {
  constructor() {}
  getWomen = async () => await this.request(`api/women?populate=*`)

  findWoman = async (id) => await this.request(`api/women/${id}?populate=*`)

  request = async (uri, options) => {
    try {
      const response = await fetch(`http://127.0.0.1:1337/${uri}`)

      return await response.json()
    } catch (e) {
      console.error(e)
    }
  }
}
