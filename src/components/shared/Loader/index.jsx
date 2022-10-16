import styles from './styles/loader.module.css'
import BackdropLayout from '../BackdropLayout'

const Loader = () => (
  <div className={styles['lds-spinner']}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
)

export default BackdropLayout(Loader)
