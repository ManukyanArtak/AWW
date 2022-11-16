const SideMenuContent = ({ data, className, onClick }) => {
  // border-b border-yellow-450 pb-1
  const titleClassName = `font-semibold text-violet-950 text-xl ${className}`
  const subTitleClassName = `text-lg text-violet-950 font-medium `

  return (
    <ul>
      {data.womanStories.length ? (
        <>
          <li className={titleClassName}>Կենսագրություն</li>
          {data.womanStories.map((story) => (
            <li
              className={`mt-6 ${subTitleClassName} `}
              key={story.attributes.name}
            >
              <button onClick={() => onClick(story.attributes.name)}>
                {story.attributes.name}
              </button>
            </li>
          ))}
        </>
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
