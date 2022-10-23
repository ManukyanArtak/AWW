export const scrollToElement = (id) => {
  const elem = document.getElementById(id)
  elem.scrollIntoView({ behavior: 'smooth' })
}

export const lifeDuration = (birthDay, deathDay) => {
  const birthYear = new Date(birthDay).getFullYear()

  if (deathDay) {
    const deathYear = new Date(deathDay).getFullYear()

    return `${birthYear}-${deathYear}`
  }

  return `${birthYear}`
}
