import Image from 'next/image'

const Dots = ({ active, className, onclick }) => (
  <span onClick={onclick} className={`${className} block`}>
    <Image
      src={`/img/${active ? 'activeDot.svg' : 'deActiveDot.svg'}`}
      alt={'Dot'}
      width={12}
      height={12}
    />
  </span>
)

export default Dots
