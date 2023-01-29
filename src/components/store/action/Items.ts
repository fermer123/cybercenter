import axios from '@src/axios';
import {
  EActionTypes,
  IItemAction,
} from '@src/components/types/ItemReducerTypes';
import {Dispatch} from 'redux';

// eslint-disable-next-line import/prefer-default-export
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
export const fetchItem =
  (id = '') =>
  async (dispatch: Dispatch<IItemAction>) => {
    try {
      dispatch({
        type: EActionTypes.FETCH_ITEMS,
      });
      const resp = await axios(`items/${id}`);
      dispatch({type: EActionTypes.FETCH_ITEMS_SUCCESS, payload: resp.data});
    } catch (e) {
      dispatch({type: EActionTypes.FETCH_ITEMS_ERROR});
    }
  };
