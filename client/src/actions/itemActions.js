import axios from 'axios';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEM_LOADING } from './types';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading);
    axios.get('/api/items')
    .then((res)=>{
        dispatch({type: GET_ITEMS, payload: res.data})
    })
    .catch((error)=>console.log(error));
}

export const deleteItem = (id) =>dispatch => {
    axios.delete(`/api/items/${id}`)
    .then(()=>{
        dispatch({
            type: DELETE_ITEMS,
            payload: id   
        })
    })
};

export const addItem = (item) => dispatch => {
    axios.post('/api/items', item)
    .then((res)=>{
        dispatch({
            type: ADD_ITEMS,
            payload: res.data   
        })
    })
    return {
        type: ADD_ITEMS,
        payload: item
    };
};

export const setItemsLoading = () => {
    return {
        type: ITEM_LOADING
    }
}