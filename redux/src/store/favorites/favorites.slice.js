import { createSlice } from '@reduxjs/toolkit'

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    toggleFavorites: (state, { payload }) => {
      const recipe = payload
      const isExist = state.some((r) => r.id === recipe.id)
      if (isExist) {
        const index = state.findIndex((r) => r.id === recipe.id)
        if (index !== -1) {
          state.splice(index, 1)
        }
      } else state.push(recipe)
    },
  },
})

export const { actions, reducer } = favoritesSlice
