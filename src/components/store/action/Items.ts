import axios from '@src/axios';
import {
  EActionTypes,
  IItemAction,
} from '@src/components/types/ItemReducerTypes';
import {IData} from '@src/components/types/type';
import {Dispatch} from 'redux';

export const fetchItems = () => async (dispatch: Dispatch<IItemAction>) => {
  try {
    dispatch({
      type: EActionTypes.FETCH_ITEMS,
    });
    const resp = await axios('items');
    dispatch({type: EActionTypes.FETCH_ITEMS_SUCCESS, payload: resp.data});
  } catch (e) {
    dispatch({type: EActionTypes.FETCH_ITEMS_ERROR});
  }
};

export const fetchItem = async (
  id: string | number,
  setData: (arg: IData) => void,
) => {
  const resp = await axios(`items/${id}`);
  setData(await resp.data);
};

export const addNewItem =
  (newItem: IData) => async (dispatch: Dispatch<IItemAction>) => {
    try {
      await axios.post(`items`, {
        ...newItem,
      });
      dispatch({type: EActionTypes.ADD_NEW_ITEM, payload: newItem});
    } catch (error) {
      console.log(error);
    }
  };

export const deleteItem =
  (id: number) => async (dispatch: Dispatch<IItemAction>) => {
    try {
      await axios.delete(`items/${id}`);
      dispatch({type: EActionTypes.DELETE_ITEM, payload: id});
    } catch (error) {
      console.log(error);
    }
  };
export const editItem =
  (id: number, name: string) => async (dispatch: Dispatch<IItemAction>) => {
    try {
      await axios.patch(`items/${id}`, {id, name});
      dispatch({
        type: EActionTypes.EDIT_ITEM,
        payload: {id, name},
      });
    } catch (error) {
      console.log(error);
    }
  };
