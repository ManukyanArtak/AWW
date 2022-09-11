import Button from '../Button'
import styles from './styles/selectDownload.module.css'
import { useFormik } from 'formik'
import { handleRequest } from '../../../../services/frontend/request'
import * as Yup from 'yup'

const SelectDownload = () => {
  const formik = useFormik({
    initialValues: { email: '' },
    onSubmit: (values) => download(values),
    validationSchema: Yup.object({
      email: Yup.string().email('Please enter valid email'),
    }),
  })

  const download = async (values) => {
    const res = await handleRequest('download', values)
    if (res) {
      formik.handleReset()
    }
  }

  return (
    <div
      className={`container mx-auto grid grid-cols-4 gap-6 lg:grid-cols-12 mb-16 mt-10 lg:gap-y-6`}
    >
      <div className={`col-start-5 col-span-4`}>
        <h2
          className={`mb-12 text-violent-950 text-lg lg:text-3xl font-normal`}
        >
          Ընտրիր և ներբեռնիր
        </h2>

        <form onSubmit={formik.handleSubmit}>
          <input
            className={`mt-[30px] block w-full  pb-6 bg-white border-b ${
              formik.errors.email ? 'border-red-400' : 'border-violent-950'
            } placeholder-gray-450 text-base focus:outline-0`}
            type="email"
            placeholder={'elbakyanux@gmail.com'}
            id={'email'}
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email ? (
            <p className={`text-red-400`}>{formik.errors.email}</p>
          ) : null}
          <div className={`flex justify-start`}>
            <Button
              className={`mt-12 text-white font-bold ${styles.btn}`}
              label={'Submit'}
              type={'submit'}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default SelectDownload
