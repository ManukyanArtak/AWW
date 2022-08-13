import styles from './SectionTitle.module.css'

const SectionTitle = ({ title, direction, className }) => {
  let hrDirection = direction === 'left' ? 'left-0 w-28' : 'right-0 w-1/4'
  let titleDirection = direction === 'left' ? 'col-start-2' : 'col-start-6'

  return (
    <div className={`grid grid-cols-12 relative ${className}`}>
      <hr className={`absolute top-4 ${styles.line} ${hrDirection}`} />
      <h2 className={`text-3xl col-span-5  ${titleDirection}`}>{title}</h2>
    </div>
  )
}

export default SectionTitle
