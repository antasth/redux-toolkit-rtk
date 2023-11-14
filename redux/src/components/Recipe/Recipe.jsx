import styles from './Recipe.module.css'

const Recipe = ({ recipe }) => {
  const { name } = recipe
  return (
    <div className={styles.recipe}>
      <h2>{name}</h2>
      <button className={styles.button}>Add to favorites</button>
    </div>
  )
}
export { Recipe }
