import { useSelector } from 'react-redux'

const User = () => {
  const { isLoading, error, user } = useSelector((state) => state.user)

  return (
    <div>
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
