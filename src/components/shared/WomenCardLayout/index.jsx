import Button from '../Button'
import styles from './womanLayout.module.css'

const WomenCardLayout = ({ children, className }) => (
  <div className={`${className}`}>
    {children}
    <div className={'rows-start-2 col-start-6'}>
      <Button
        label={'Տեսնել բոլորին'}
        className={`${styles.btn} text-white mt-24`}
      />
    </div>
  </div>
)

export default WomenCardLayout
