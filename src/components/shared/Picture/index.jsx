import Image from 'next/image'

const Picture = ({ className, src }) => (
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

    <p className={`font-semibold text-violent-850 text-[10px] mt-6`}>
      Բնակելի շենք Մոսկովյան և Բաղրամյան փողոցների անկյունում
    </p>
  </div>
)

export default Picture
