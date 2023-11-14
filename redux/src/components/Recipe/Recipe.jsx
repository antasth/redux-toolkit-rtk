const Recipe = ({ recipe }) => {
  const { name } = recipe
  return (
    <div>
      <h2>{name}</h2>
      <button>Add to favorites</button>
    </div>
  )
}
export { Recipe }
