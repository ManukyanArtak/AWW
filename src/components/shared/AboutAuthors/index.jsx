import Image from 'next/image'

const AboutAuthors = ({ direction, className }) => (
  <div>
    <div className={`grid-flow-row-dense ${className}`}>
      <div
        className={`max-w-[470px] max-h-[495px]  ${
          direction === 'left'
            ? 'col-start-1 col-span-5'
            : 'col-start-8 col-span-5 '
        }`}
      >
        <Image
          height={1}
          width={1}
          alt="Image Alt"
          src="/img/AuthorPictureFrame.png"
          layout="responsive"
          objectFit="cover"
        />
      </div>

      <div
        className={`${
          direction === 'left'
            ? 'col-start-7 col-span-6'
            : 'col-start-1 col-span-6'
        }`}
      >
        <p className={'text-blue-950 text-lg mt-8'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus eget
          tristique adipiscing morbi volutpat blandit viverra vestibulum augue.
          Nulla leo, semper massa in consequat diam. Habitasse ornare convallis
          at elementum, turpis id cursus sit nunc. Nisl tristique adipiscing
          consectetur orci eu et ante morbi. Ac quisque mus ultrices elit
          aliquam quis dui neque venenatis.
        </p>

        <p className={'text-blue-950 text-lg mt-9'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus nulla
          mattis feugiat bibendum sed neque. Vulputate risus id consectetur et
          in ut ut diam. Sed eget non, scelerisque faucibus vitae mattis morbi
          tristique a. Fames felis eget tellus lacus odio quis enim scelerisque
          commodo.
        </p>
      </div>
    </div>
  </div>
)

export default AboutAuthors
