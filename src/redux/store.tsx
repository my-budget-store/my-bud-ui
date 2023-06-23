import { configureStore } from '@reduxjs/toolkit'
import searchValueReducer from 'redux/slices/searchValueSlice'
import sideDrawerReducer from 'redux/slices/sideDrawerSlice'

export const store = configureStore({
  reducer: {
    searchValue: searchValueReducer,
    sideDrawer: sideDrawerReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch