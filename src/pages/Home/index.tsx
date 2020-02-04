import React from 'react'

import recipesApi from 'api/recipes'
import { Recipe } from 'types/recipe'

const Home: React.FC = () => {
  const [recipes, setRecipes] = React.useState<Recipe[]>([])

  React.useEffect(() => {
    recipesApi.list().then(x => {
      setRecipes(x)
    })
  }, [])

  return (
    <div className="uk-section">
      <div className="uk-container">
        <h1 className="uk-heading-small">Recipes</h1>
        <table className="uk-table uk-table-justify">
          <thead>
            <tr>
              <th className="uk-width-1-3">Name</th>
              <th>Cuisine</th>
              <th className="uk-width-1-3">Description</th>
              <th className="uk-text-right">Price</th>
              <th className="uk-text-right">Discount</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {recipes.map(x => (
              <tr key={x.id}>
                <td>{x.name}</td>
                <td>{x.cuisine}</td>
                <td>{x.description}</td>
                <td className="uk-text-right">{x.price}</td>
                <td className="uk-text-right">{x.discount}</td>
                <td>
                  {x.isUnavailable ? <span uk-icon="icon: close" /> : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home
