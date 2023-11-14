import { FaHeart } from 'react-icons/fa'
import { useFavorites } from '../../hooks/useFavorites'
import styles from './Header.module.css'

const Header = () => {
  const { favorites } = useFavorites()
  return (
    <header className={styles.header}>
      <FaHeart className={styles.icon} />
      <span className={styles.count}>{favorites.length}</span>
    </header>
  )
}

export { Header }
