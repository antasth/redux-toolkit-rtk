import { FaShieldHeart } from 'react-icons/fa6'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <FaShieldHeart className={styles.icon} />
      <span className={styles.count}>5</span>
    </header>
  )
}

export { Header }
