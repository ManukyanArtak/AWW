import Image from 'next/image'

const Picture = ({ className, src, name }) => (
  <div className={`${className} `}>
    <div>
      <Image
        width={465}
        height={325}
        src={src}
        alt={'Picture'}
        loader={({ src }) => `${src}`}
      />
    </div>

    <p className={`font-semibold text-violent-850 text-[10px] mt-2 lg:mt-6`}>
      {name}
    </p>
  </div>
)

export default Picture
