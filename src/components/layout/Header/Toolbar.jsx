import Image from 'next/image'
import Link from 'next/link'

const Toolbar = ({ handleClick }) => (
  <div className={`w-full fixed top-0 left-0 h-screen z-10 bg-violet-850`}>
    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full h-full lg:items-center items-start  flex flex-col lg:h-auto ">
      <div className="flex  justify-between items-center w-full  pt-5 pr-[40px] pl-6  max-w-screen-xl">
        <Link href="/" className="flex items-center" passHref>
          <Image
            src="/img/logo-white.svg"
            width="84px"
            height="40px"
            alt={'Logo'}
          />
        </Link>
        <div className="flex items-center lg:hidden">
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            onClick={handleClick}
            className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden "
          >
            <Image
              src="/img/closeBlack.svg"
              width="23px"
              height="23px"
              alt={'Logo'}
            />
          </button>
        </div>
      </div>
      <ul className=" px-7 w-full  flex flex-col justify-center items-center h-full ">
        <li>
          <Link href="/about" passHref>
            <a className="text-white text-xl font-semibold">Նախագիծ</a>
          </Link>
        </li>
        <li className={`mt-8`}>
          <Link href="/women" passHref>
            <a className="text-white text-xl font-semibold">
              Կանայք և պատմություններ
            </a>
          </Link>
        </li>
        <li className={`mt-8`}>
          <Link href="/contact" passHref>
            <a className="text-white text-xl font-semibold">Հետադարձ կապ</a>
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Toolbar
