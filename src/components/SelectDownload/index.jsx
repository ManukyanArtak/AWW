import Button from '../shared/Button'
import styles from './styles/selectDownload.module.css'

const SelectDownload = () => (
  <div
    className={`grid grid-cols-4 gap-x-[30px] mb-16 lg:grid-cols-12 mt-10 lg:gap-y-6 lg:gap-x-[50px]`}
  >
    <div className={`col-start-1 col-end-5 lg:col-start-5 lg:col-end-9`}>
      <h4 className={`mb-12 text-violent-950 text-lg lg:text-3xl font-normal`}>
        Ընտրիր և ներբեռնիր
      </h4>

      <input
        className={`mt-[30px] block w-full  pb-6 bg-white border-b border-violent-950 placeholder-gray-450 text-base focus:outline-0`}
        type="email"
        placeholder={'elbakyanux@gmail.com'}
      />

      <div className={`flex justify-center`}>
        <Button
          className={`mt-12 text-white font-bold ${styles.btn}`}
          label={'Submit'}
        />
      </div>
    </div>
  </div>
)

export default SelectDownload
