import { useActions } from '../../hooks/UseActions'
import { useFavorites } from '../../hooks/useFavorites'
import styles from './Recipe.module.css'

const Recipe = ({ recipe }) => {
  const { favorites } = useFavorites()
  const { toggleFavorites } = useActions()

  const isExists = favorites.some((r) => r.id === recipe.id)

  console.log(favorites)
  return (
    <div className={styles.recipe}>
      <h2>{recipe.name}</h2>
      <button className={styles.button} onClick={() => toggleFavorites(recipe)}>
        {isExists ? 'Remove from favorites' : 'Add to favorites'}
      </button>
    </div>
  )
}
export { Recipe }
