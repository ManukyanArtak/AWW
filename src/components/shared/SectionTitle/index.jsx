import styles from './SectionTitle.module.css'

const SectionTitle = ({ title, direction, className }) => {
  let hrDirection = direction === 'left' ? 'left-0 w-1/6' : 'right-0 w-1/4'
  let titleDirection = direction === 'left' ? 'col-start-1' : 'col-start-6'

  return (
    <div className={'relative'}>
      <hr className={`absolute top-4 ${styles.line} ${hrDirection}`} />
      <div className={`grid grid-cols-12 gap-6 relative ${className}`}>
        <h2 className={`text-3xl col-span-6  ${titleDirection}`}>{title}</h2>
      </div>
    </div>
  )
}

export default SectionTitle
