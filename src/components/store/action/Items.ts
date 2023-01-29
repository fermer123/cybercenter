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
): Promise<void> => {
  const resp = await axios(`items/${id}`);
  setData(await resp.data);
};
