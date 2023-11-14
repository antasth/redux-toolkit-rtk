import { FaShieldHeart } from 'react-icons/fa6'
import { useFavorites } from '../../hooks/useFavorites'
import styles from './Header.module.css'

const Header = () => {
  const { favorites } = useFavorites()
  return (
    <header className={styles.header}>
      <FaShieldHeart className={styles.icon} />
      <span className={styles.count}>{favorites.length}</span>
    </header>
  )
}

export { Header }
