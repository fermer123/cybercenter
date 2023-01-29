export interface IData {
  id: number;
  name: string;
}

export interface IItemsState {
  items: IData[];
  loading: boolean;
  error: boolean;
}
