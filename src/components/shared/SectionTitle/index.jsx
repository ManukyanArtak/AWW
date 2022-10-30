import styles from './SectionTitle.module.css'

const SectionTitle = ({ direction }) => {
  let hrDirection =
    direction === 'left' ? 'lg:left-0 lg:w-1/16' : 'lg:right-0 lg:w-1/7'

  return (
    <div className={'relative'}>
      <hr
        className={`absolute w-55 top-11 lg:top-3.5  ${styles.line} ${hrDirection}`}
        //watch 3.5
      />
    </div>
  )
}

export default SectionTitle
