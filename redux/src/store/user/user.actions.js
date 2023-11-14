import { createAsyncThunk } from '@reduxjs/toolkit'

const fetchUserById = (userId) =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ id: 1, name: 'alex' }), 1000)
  )

export const getUserById = createAsyncThunk(
  'users/by-id',
  async (userId, thuncApi) => {
    try {
      const response = await fetchUserById(userId)
      return response
    } catch (error) {
      thuncApi.rejectWithValue(error)
    }
  }
)
