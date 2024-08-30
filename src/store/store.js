import { configureStore } from '@reduxjs/toolkit'
import dataListReducer from '../reducers/dataList/dataListSlice'
import storeListReducer from '../reducers/storeList/storeListSlice'

export const store = configureStore({
  reducer: {
    dataList: dataListReducer,
    storeList: storeListReducer
  },
})