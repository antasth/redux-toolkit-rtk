import { useActions } from '../../hooks/UseActions'
import { useFavorites } from '../../hooks/useFavorites'
import { Button } from '../Button/Button'
import styles from './Recipe.module.css'

const Recipe = ({ recipe }) => {
  const { favorites } = useFavorites()
  const { toggleFavorites } = useActions()

  const isExists = favorites.some((r) => r.id === recipe.id)

  return (
    <div className={styles.recipe}>
      <h2>{recipe.name}</h2>
      <Button className={styles.button} onClick={() => toggleFavorites(recipe)}>
        {isExists ? 'Remove from favorites' : 'Add to favorites'}
      </Button>
    </div>
  )
}
export { Recipe }
