import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../store/favorites/favorites.slice'
import styles from './Recipe.module.css'

const Recipe = ({ recipe }) => {
  const { favorites } = useSelector((state) => state)

  const dispatch = useDispatch()
  console.log(favorites)
  return (
    <div className={styles.recipe}>
      <h2>{recipe.name}</h2>
      <button
        className={styles.button}
        onClick={() => dispatch(actions.toggleFavorites(recipe))}
      >
        Add to favorites
      </button>
    </div>
  )
}
export { Recipe }
