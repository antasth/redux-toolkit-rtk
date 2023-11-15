import { Recipe } from './components/Recipe/Recipe'
import { User } from './components/User/user'
import { Header } from './components/header/Header'
import { useGetRecipesQuery } from './store/api/api'

function App() {
  const { isLoading, data } = useGetRecipesQuery()
  console.log(isLoading, data)
  return (
    <section>
      <Header />
      <User />
      <div>
        {isLoading
          ? 'Loading...'
          : data
          ? data.map((recipe) => <Recipe key={recipe.name} recipe={recipe} />)
          : 'RECIPES NOT FOUND'}
      </div>
    </section>
  )
}

export default App
