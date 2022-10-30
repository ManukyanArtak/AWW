import Image from 'next/image'

const Dots = ({ active, onClick }) => (
  <div className={`mt-6`}>
    <span onClick={onClick} className={`block ml-2`}>
      <Image
        src={`/img/${active ? 'activeDot.svg' : 'deActiveDot.svg'}`}
        alt={'Dot'}
        width={12}
        height={12}
      />
    </span>
  </div>
)

export default Dots
