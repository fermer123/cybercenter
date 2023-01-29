import {
  EActionTypes,
  IItemAction,
} from '@src/components/types/ItemReducerTypes';
import {IItemsState} from '@src/components/types/type';

const initialState: IItemsState = {
  items: [],
  loading: false,
  error: false,
};

const itemReducer = (
  state = initialState,
  action: IItemAction,
): IItemsState => {
  switch (action.type) {
    case EActionTypes.FETCH_ITEMS:
      return {...state, loading: true};
    case EActionTypes.FETCH_ITEMS_SUCCESS:
      return {...state, loading: false, items: action.payload};
    case EActionTypes.FETCH_ITEMS_ERROR:
      return {...state, loading: false, error: true};
    default:
      return state;
  }
};

export default itemReducer;
