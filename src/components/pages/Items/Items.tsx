import fetchItems from '@src/components/store/action/fetchItems';
import useTypeSelector from '@src/components/store/hooks/useTypeSelector';
import {FC, useEffect} from 'react';
import {useDispatch} from 'react-redux';

const Items: FC = () => {
  const {error, items, loading} = useTypeSelector((state) => state.item);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItems());
  }, []);
  console.log(items);
  return <div>items</div>;
};

export default Items;
