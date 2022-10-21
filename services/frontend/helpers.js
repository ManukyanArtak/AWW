export const scrollToElement = (id) => {
  const elem = document.getElementById(id)
  elem.scrollIntoView({ behavior: 'smooth' })
}
