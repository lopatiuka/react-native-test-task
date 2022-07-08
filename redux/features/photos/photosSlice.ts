import { createSlice } from '@reduxjs/toolkit'

export interface IPhotos {
  id: string,
  user: {
    name: string
  },
  urls: {
    full: string
  },
  alt_description: string
}

export const photosSlice = createSlice({
  name: 'cities',
  initialState: {
    photos: [] as IPhotos[]
  },
  reducers: {

    getPhotos: (state, action) => {
      state.photos = action.payload;
    },
  }
})
export const initialState = (state: any) => state;
export const selectPhotos = (state: any) => state.photos.photos;
export default photosSlice.reducer