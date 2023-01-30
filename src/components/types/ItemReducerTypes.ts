import {IData} from './type';

export enum EActionTypes {
  FETCH_ITEMS = 'FETCH_ITEMS',
  FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS',
  FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR',
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
}

export type IItemAction =
  | IfetchAction
  | IfetchActionSuccess
  | IfetchActionError
  | IaddNewItem;

interface IfetchAction {
  type: EActionTypes.FETCH_ITEMS;
}
interface IfetchActionSuccess {
  type: EActionTypes.FETCH_ITEMS_SUCCESS;
  payload: IData[];
}
interface IfetchActionError {
  type: EActionTypes.FETCH_ITEMS_ERROR;
}
interface IaddNewItem {
  type: EActionTypes.ADD_NEW_ITEM;
  payload: IData;
}
