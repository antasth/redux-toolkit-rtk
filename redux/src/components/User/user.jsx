import { useSelector } from 'react-redux'
import { useActions } from '../../hooks/UseActions'
import { Button } from '../Button/Button'
import styles from './User.module.css'

const User = () => {
  const { isLoading, error, user } = useSelector((state) => state.user)

  const { getUserById } = useActions()
  return (
    <div className={styles.user}>
      <Button onClick={() => getUserById(1)}>Get user</Button>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error.message}</div>
      ) : user?.name ? (
        <h1>User:{user.name}</h1>
      ) : (
        <h1>USER NOT FOUND</h1>
      )}
    </div>
  )
}

export { User }
