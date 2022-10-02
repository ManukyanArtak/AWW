import Image from 'next/image'
import BackdropLayout from '../BackdropLayout'
import Button from '../Button'

const AlertMessage = () => (
  <div
    className={` w-[400px] justify-center text-center  bg-white flex flex-col items-center py-5 px-8 rounded-[8px]`}
  >
    <Image
      src={'/img/success-icon.svg'}
      alt={'Success'}
      width={'63px'}
      height={'43px'}
    />
    <p className={`text-[#00baab] mt-5`}>
      Ձեր նամակը հաջողությամբ ուղարկվել է։
    </p>
  </div>
)
const SuccessMessage = BackdropLayout(AlertMessage)
SuccessMessage.displayName = 'SuccessMessage'
export default SuccessMessage
