import { Recipe } from './components/Recipe/Recipe'

function App() {
  return (
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
  )
}

export default App
