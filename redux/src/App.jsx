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
        <Recipe
          recipe={{
            id: 1,
            name: 'recipe1',
          }}
        />
        <Recipe
          recipe={{
            id: 2,
            name: 'recipe2',
          }}
        />
        <Recipe
          recipe={{
            id: 3,
            name: 'recipe3',
          }}
        />
      </div>
    </section>
  )
}

export default App
