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
      <div className={styles.left}>
        <h2>{recipe.name}</h2>
        <img
          className={styles.image}
          src={recipe.imageURL}
          alt="recipe image"
        />
        <Button
          className={styles.button}
          onClick={() => toggleFavorites(recipe)}
        >
          {isExists ? 'Remove from favorites' : 'Add to favorites'}
        </Button>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>Steps</h1>
        {recipe.steps.map((step) => (
          <p key={step}>* {step}</p>
        ))}
      </div>
    </div>
  )
}
export { Recipe }
