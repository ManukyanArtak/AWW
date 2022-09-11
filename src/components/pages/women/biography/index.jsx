export default function Biography({ title, text, divider }) {
  return (
    <div>
      {divider ? (
        <hr className={'border-1 border-solid border-amber-300 my-14'} />
      ) : (
        ''
      )}
      <h2 className={`mb-12 text-violent-950 text-lg lg:text-3xl font-normal`}>
        {title}
      </h2>
      <p className={'text-lg'}>{text}</p>
    </div>
  )
}
