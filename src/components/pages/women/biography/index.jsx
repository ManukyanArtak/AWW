export default function Biography({ title, text, divider, id }) {
  return (
    <div id={id}>
      {divider ? (
        <hr className={'border-1 border-solid border-amber-300 my-14'} />
      ) : (
        ''
      )}
      <h2 className={`mb-16 text-violent-950 text-lg lg:text-xl font-semibold`}>
        {title}
      </h2>
      <p className={'text-lg text-blue-950'}>{text}</p>
    </div>
  )
}
