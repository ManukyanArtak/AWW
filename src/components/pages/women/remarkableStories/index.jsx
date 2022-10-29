import ReactMarkdown from 'react-markdown'

export default function RemarkableStories({ title, stories }) {
  return (
    <div id={'remarkableStories'}>
      <h2 className={`mb-12 text-violent-950 text-lg lg:text-xl font-semibold`}>
        {title}
      </h2>
      {/*<p className={'text-lg py-8'}>{stories}</p>*/}
      <ReactMarkdown>{stories}</ReactMarkdown>
      <hr
        className={'border-1 border-solid border-amber-300 my-14 w-38 lg:w-sm'}
      />
    </div>
  )
}
