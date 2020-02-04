import Axios from 'axios'

import { Recipe } from 'types/recipe'

const list = async (): Promise<Recipe[]> => {
  const response = await Axios.get<Recipe[]>('/recipes.json')

  return response.data
}

export default { list }
