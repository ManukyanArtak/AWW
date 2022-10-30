const SideMenuContent = ({ data, className, onClick }) => {
  const menuSelect = (element) => {
    // handleOpen(false)
    scrollToElement(element)
  }

  // border-b border-yellow-450 pb-1
  const titleClassName = `font-semibold text-violet-950 text-xl ${className}`
  const subTitleClassName = `text-lg text-violet-950 font-medium `

  return (
    <ul>
      <li className={titleClassName}>Կենսագրություն</li>
      {data.childhood ? (
        <li className={`mt-6 ${subTitleClassName} `}>
          <button onClick={() => onClick('childhood')}>Մանկություն</button>
        </li>
      ) : null}
      {data.boyhood ? (
        <li className={`mt-4 ${subTitleClassName} `}>
          <button onClick={() => onClick('youth')}>Պատանեկություն</button>
        </li>
      ) : null}
      {data.remarkable_stories ? (
        <li className={`mt-4 ${subTitleClassName}`}>
          <button onClick={() => onClick('remarkableStories')}>
            Ուշագրավ պատմություններ
          </button>
        </li>
      ) : null}
      {data.images?.length ? (
        <li className={`mt-10 ${titleClassName}`}>
          <button onClick={() => onClick('images')}>Նկարներ</button>
        </li>
      ) : null}
      {data.video?.length ? (
        <li className={`mt-10 ${titleClassName}`}>
          <button onClick={() => onClick('videos')}>Տեսանյութեր</button>
        </li>
      ) : null}
    </ul>
  )
}

export default SideMenuContent
