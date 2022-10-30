import * as Yup from 'yup'
import Image from 'next/image'
import { useFormik } from 'formik'
import { useState } from 'react'
import Input from '../../shared/Input'
import Button from '../../shared/Button'
import Loader from '../../shared/Loader'
import styles from './styles/contact.module.css'
import ErrorMessage from '../../shared/ErrorMessage'
import SuccessMessage from '../../shared/SuccessMessage'
import { handleRequest } from '../../../../services/frontend/request'

const ContactUs = () => {
  const [requestState, setRequestState] = useState('')
  const [loader, setLoader] = useState(false)
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
    const body = document.querySelector('body')
    body.style.overflow = 'hidden'
    setLoader(true)
    await handleRequest('contact', values)
      .then(() => {
        setRequestState('success')
        formik.handleReset()
      })
      .catch(() => {
        setRequestState('error')
      })
      .finally(() => {
        setLoader(false)
      })
  }

  const onCancelClick = () => {
    const body = document.querySelector('body')
    setRequestState('')
    body.style.overflow = 'auto'
  }

  return (
    <>
      <div
        className={`container mx-auto grid grid-cols-4 mb-20 mt-10  lg:grid-cols-12 lg:gap-x-6 lg:mt-54 lg:mb-33`}
        //watch mt-10
      >
        <div className={`col-start-1 col-end-5  lg:col-end-6`}>
          <h1 className={`text-violet-950 text-4xl lg:text-56`}>Կապ մեզ հետ</h1>

          <div className={`mt-14  lg:mt-16 `}>
            <div
              className={`flex items-center w-53  border-b border-solid border-yellow-450 pb-6 mb-6 lg:w-67`}
              //watch pb-6
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
              <span
                className={
                  `mr-8`
                  //watch mr-8
                }
              >
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

        <div
          className={`col-span-4 mt-10 lg:col-start-7  lg:mt-0 lg:col-span-6`}
        >
          <form onSubmit={formik.handleSubmit}>
            <div className={`lg:flex lg:w-md`}>
              <Input
                labelClassname={`w-80 lg:w-67 lg:mr-6 block`}
                inputClassName={`border h-15 mt-2 border-solid border-violent-950 focus:outline-0 py-3 pl-4 placeholder:text-gray-550 placeholder:text-base`}
                spanClassName={`text-base text-violet-850`}
                label={'Անուն'}
                type={'text'}
                placeholder={`Անուն`}
                value={formik.values.name}
                onchange={formik.handleChange}
                id={'name'}
                error={formik.errors.name}
                onBlur={formik.handleBlur}
                touched={formik.touched.name}
              />
              <Input
                labelClassname={`w-80 mt-4 lg:w-67 block lg:mt-0`}
                inputClassName={`border h-15 mt-2  border-solid border-violent-950 focus:outline-0 py-3 pl-4 placeholder:text-gray-550 placeholder:text-base`}
                spanClassName={`text-base text-violet-850`}
                label={'Էլ. հասցե'}
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
                labelClassname={` w-80 mt-4 block lg:w-md lg:mt-6`}
                inputClassName={`border h-15 mt-2 border-solid border-violent-950 focus:outline-0 py-3 pl-4 placeholder:text-gray-550 placeholder:text-base`}
                label={'Թեմա'}
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
              <label className={`w-80 mt-4 block lg:mt-6 lg:w-[570px]`}>
                <span className={`text-base text-violet-850 block`}>
                  Հաղորդագրություն
                </span>
                <textarea
                  className={`w-full h-34 border border-solid border-violent-950 focus:outline-0 py-3 pl-4 placeholder:text-gray-550 mt-2 resize-none placeholder:text-base placeholder:text-gray-550 ${
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
              <div
                className={`flex justify-end mt-8 w-80 lg:w-full lg:mt-9 lg:block`}
              >
                <Button
                  label={'Հաստատել'}
                  className={`px-6 py-4 text-white text-center text-lg font-medium w-40 h-15.5  ${styles.submit_btn}`}
                  type={'submit'}
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      {loader ? <Loader /> : null}

      {requestState === 'success' ? (
        <SuccessMessage onClose={onCancelClick} />
      ) : null}
      {requestState === 'error' ? (
        <ErrorMessage
          onTryClick={() => sendMessage(formik.values)}
          onCancelClick={() => onCancelClick()}
        />
      ) : null}
    </>
  )
}

export default ContactUs
