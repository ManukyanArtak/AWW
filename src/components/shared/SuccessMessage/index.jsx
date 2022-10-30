import Image from 'next/image'
import BackdropLayout from '../BackdropLayout'

const AlertMessage = ({ onClose }) => (
  <div
    className={` w-[400px] justify-center text-center  bg-white flex flex-col items-center py-5 px-8 rounded-[8px]`}
  >
    <div className={`w-full flex justify-end`}>
      <button onClick={onClose}>
        <Image
          src={'/img/close_icon.svg'}
          height={'25'}
          width={'25'}
          alt={'Close'}
        />
      </button>
    </div>

    <Image
      src={'/img/success-icon.svg'}
      alt={'Success'}
      width={'63px'}
      height={'43px'}
    />
    <p className={`text-teal-550 mt-5`}>Ձեր նամակը հաջողությամբ ուղարկվել է։</p>
  </div>
)

export default BackdropLayout(AlertMessage)
