import Picture from '../../../shared/Picture'

export default function Images({ images }) {
  return (
    <div id={'images'}>
      <hr className={'border-1 border-solid border-amber-300 my-14'} />
      <h2 className={`mb-12 text-violent-950 text-lg lg:text-3xl font-normal`}>
        Նկարներ
      </h2>
      <div className={'grid grid-cols-8 gap-x-6 gap-y-10'}>
        {images.map((item, key) => (
          <Picture
            src={`http://localhost:1337${item.attributes.url}`}
            key={key}
            className={'col-span-8 lg:col-span-4'}
          />
        ))}
      </div>
    </div>
  )
}
