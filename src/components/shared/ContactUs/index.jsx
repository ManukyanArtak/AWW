import Image from 'next/image'
import Input from '../Input'
import Button from '../Button'
import styles from './styles/contact.module.css'
import { useFormik } from 'formik'
import { handleRequest } from '../../../../services/frontend/request'
import * as Yup from 'yup'

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Field is required')
        .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
      email: Yup.string()
        .email('Please enter the valid email')
        .required('Field is required'),
      subject: Yup.string()
        .required('Field is required')
        .max(100, 'Letters must be less than 100'),
      message: Yup.string()
        .required('Field is required')
        .max(500, 'Letters must be less than 500'),
    }),
    onSubmit: (values) => sendMessage(values),
  })

  const sendMessage = async (values) => {
    const res = await handleRequest('contact', values)
    if (res) {
      formik.handleReset()
    }
  }

  return (
    <>
      <div
        className={`container mx-auto grid grid-cols-4 mb-20 lg:grid-cols-12 lg:gap-x-6 lg:mt-[216px] lg:mb-[140px]`}
      >
        <div className={`col-start-1 col-end-5  lg:col-end-6`}>
          <h1 className={`text-violet-950 text-4xl lg:text-[56px]`}>
            Կապ մեզ հետ
          </h1>

          <div className={`mt-14  lg:mt-16 `}>
            <div
              className={`flex items-center w-[213px]  border-b border-solid border-yellow-450 pb-[25px] mb-6 lg:w-[272px]`}
            >
              <Image
                src={'/img/Letter.svg'}
                alt={'Letter'}
                width={26}
                height={21}
              />
              <p className={`font-semibold text-lg text-violet-950 ml-5`}>
                Info@mamble.co
              </p>
            </div>

            <div className={`flex items-baseline`}>
              <span className={`mr-[30px]`}>
                <Image
                  src={'/img/facebook-purple.svg'}
                  alt={'Facebook'}
                  width={13}
                  height={24}
                />
              </span>

              <span className={`mr-6`}>
                <Image
                  src={'/img/instagram-purple.svg'}
                  alt={'Instagram'}
                  width={24}
                  height={24}
                />
              </span>

              <Image
                src={'/img/linkedin-purple.svg'}
                alt={'Linkedin'}
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>

        <div className={`col-start-1 mt-10 lg:col-start-7  lg:mt-0`}>
          <form onSubmit={formik.handleSubmit}>
            <div className={`lg:flex lg:w-[572px]`}>
              <Input
                labelClassname={`w-[320px] lg:w-[272px] lg:mr-6 block`}
                inputClassName={`border h-[50px] mt-2 border-solid border-violent-950 focus:outline-0 py-3 pl-4 placeholder:text-gray-550 placeholder:text-base`}
                spanClassName={`text-base text-violet-850`}
                label={'Full name'}
                type={'text'}
                placeholder={`Անուն`}
                value={formik.values.fullName}
                onchange={formik.handleChange}
                id={'name'}
                error={formik.errors.name}
                onBlur={formik.handleBlur}
                touched={formik.touched.name}
              />
              <Input
                labelClassname={`w-[320px] mt-4 lg:w-[272px] block lg:mt-0`}
                inputClassName={`border h-[50px] mt-2  border-solid border-violent-950 focus:outline-0 py-3 pl-4 placeholder:text-gray-550 placeholder:text-base`}
                spanClassName={`text-base text-violet-850`}
                label={'Email'}
                type={'email'}
                placeholder={`Էլ. հասցե`}
                value={formik.values.email}
                onchange={formik.handleChange}
                id={'email'}
                error={formik.errors.email}
                onBlur={formik.handleBlur}
                touched={formik.touched.email}
              />
            </div>
            <div>
              <Input
                labelClassname={` w-[320px] mt-4 block lg:w-[572px] lg:mt-6`}
                inputClassName={`border h-[50px] mt-2 border-solid border-violent-950 focus:outline-0 py-3 pl-4 placeholder:text-gray-550 placeholder:text-base`}
                label={'Subject'}
                type={'text'}
                spanClassName={`text-base text-violet-850`}
                placeholder={`Թեմա`}
                value={formik.values.subject}
                onchange={formik.handleChange}
                id={'subject'}
                error={formik.errors.subject}
                onBlur={formik.handleBlur}
                touched={formik.touched.subject}
              />
              <label className={`w-[320px] mt-4 block lg:mt-6 lg:w-[570px]`}>
                <span className={`text-base text-violet-850 block`}>
                  Message
                </span>
                <textarea
                  className={`w-full h-[130px] border border-solid border-violent-950 focus:outline-0 py-3 pl-4 placeholder:text-gray-550 mt-2 resize-none placeholder:text-base placeholder:text-gray-550 ${
                    formik.errors.message && formik.touched.message
                      ? 'border-red-400'
                      : ''
                  }`}
                  placeholder={'Հաղորդագրություն'}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  id={'message'}
                  onBlur={formik.handleBlur}
                ></textarea>
                {formik.errors.message && formik.touched.message ? (
                  <p className={`text-red-400`}>{formik.errors.message}</p>
                ) : null}
              </label>
              <div className={`flex justify-end mt-8 w-full lg:mt-9 lg:block`}>
                <Button
                  label={'Հաստատել'}
                  className={`px-6 py-4 text-white text-center text-lg font-medium w-[160px] h-[60px]  ${styles.submit_btn}`}
                  type={'submit'}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactUs
