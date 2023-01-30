export interface IData {
  id: number | string;
  name: string;
}

export interface IItemsState {
  items: IData[];
  loading: boolean;
  error: boolean;
}
