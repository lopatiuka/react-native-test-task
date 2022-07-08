import axios from 'axios';
import { photosSlice } from './photosSlice';

const apiKey = "d6zcUCq0Qn9ziFSnSV5aIV4Av9jypV_U1HYj4EwJ6_s";

export const getPhotos = (): any => {
    return async (dispatch: any) => {
        try {
            let result = await axios.get(`https://api.unsplash.com/photos/?client_id=${ apiKey }`);
            debugger;

            dispatch(photosSlice.actions.getPhotos(result.data));
        }
        catch (error: any) {
            alert ("Something went wrong, try again later");
            throw new Error(error);
        }
    }
}