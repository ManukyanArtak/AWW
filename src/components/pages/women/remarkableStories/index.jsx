export default function RemarkableStories({ title, stories }) {
  const storiesElement = stories.map((item) => (
    <>
      <p className={'text-lg py-8'}>{item.text}</p>
      <p
        className={
          'py-4 text-right text-sm text-violet-850 font-semibold lg:text-black lg:font-normal'
        }
      >
        {item.author}
      </p>
    </>
  ))

  return (
    <div>
      <hr className={'border-1 border-solid border-amber-300 my-14'} />
      <h2 className={`mb-12 text-violent-950 text-lg lg:text-xl font-semibold`}>
        {title}
      </h2>
      {storiesElement}
    </div>
  )
}
