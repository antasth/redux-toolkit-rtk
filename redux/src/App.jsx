import { Recipe } from './components/Recipe/Recipe'
import { Header } from './components/header/Header'

function App() {
  return (
    <section>
      <Header />
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
