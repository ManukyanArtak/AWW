import Picture from '../../../shared/Picture'

export default function Videos({ videos }) {
  return (
    <div id={'videos'}>
      <h2 className={`mb-12 text-violent-950 text-lg lg:text-3xl font-normal`}>
        Տեսանյութեր
      </h2>
      <div className={'grid grid-cols-8 gap-x-6 gap-y-10'}>
        {videos.map((item, key) => (
          <div key={key} className={`col-span-8 lg:col-span-4`}>
            <iframe
              className={`w-[312px] h-[218px] lg:w-[371px] lg:h-[259px]`}
              width="371"
              height="259"
              src={item.attributes.url}
              allowFullScreen
            >
              {' '}
            </iframe>
            <p
              className={`mt-3 text-blue-950 text-sm lg:text-lg lg:mt-6 lg:text-violet-950`}
            >
              {item.attributes.name}
            </p>
          </div>
        ))}
      </div>
      <hr
        className={
          'border-1 border-solid border-amber-300 my-14 w-[155px] lg:w-[370px]'
        }
      />
    </div>
  )
}
