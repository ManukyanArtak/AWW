import styles from './SectionTitle.module.css'

const SectionTitle = ({ direction }) => {
  let hrDirection = direction === 'left' ? 'lg:left-0 lg:w-[6%]' : 'lg:right-0 lg:w-[15%]'

  return (
    <div className={'relative'}>
      <hr className={`absolute w-[220px] top-[44px] lg:top-[15px]  ${styles.line} ${hrDirection}`} />
    </div>
  )
}

export default SectionTitle
