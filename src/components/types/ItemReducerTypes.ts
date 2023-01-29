import {IData} from './type';

export enum EActionTypes {
  FETCH_ITEMS = 'FETCH_ITEMS',
  FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS',
  FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR',
}

export type IItemAction =
  | IfetchAction
  | IfetchActionSuccess
  | IfetchActionError;

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
