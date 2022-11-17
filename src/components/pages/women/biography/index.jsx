import ReactMarkdown from 'react-markdown'
export default function Biography({ title, text, divider, id }) {
  return (
    <div id={id}>
      <h2 className={`mb-16 text-violent-950 text-lg lg:text-xl font-semibold break-words`}>
        {title}
      </h2>
      {/*<p className={'text-lg text-blue-950'}>{text}</p>*/}
      <ReactMarkdown>{text}</ReactMarkdown>

      <hr
        className={'border-1 border-solid border-amber-300 my-14 w-38 lg:w-sm'}
      />
    </div>
  )
}
