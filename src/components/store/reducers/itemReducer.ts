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
    case EActionTypes.ADD_NEW_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case EActionTypes.DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((e) => e.id !== action.payload),
      };
    case EActionTypes.EDIT_ITEM:
      return {
        ...state,
        items: state.items.map((e) => e.id === action.payload),
      };
    default:
      return state;
  }
};

export default itemReducer;
