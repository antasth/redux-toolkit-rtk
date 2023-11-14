import { createSlice } from '@reduxjs/toolkit'

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    toggleFavorites: (state, { payload }) => {
      const recipe = payload
      const isExist = state.some((r) => (r.id = recipe.id))
      if (isExist) {
        state = state.filter((r) => r.id !== recipe.id)
      } else state.push()
    },
  },
})

export const { actions, reducer } = favoritesSlice
