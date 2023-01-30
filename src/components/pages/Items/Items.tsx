import AddNewItem from '@src/components/component/addNewItem/AddNewItem';
import useInput from '@src/components/component/input';
import useCustomDispatch from '@src/components/store/hooks/useCustomDispatch';
import useTypeSelector from '@src/components/store/hooks/useTypeSelector';
import {FC, useEffect} from 'react';
import Item from '../Item/Item';

const Items: FC = () => {
  const {items} = useTypeSelector((state) => state.item);
  const {fetchItems} = useCustomDispatch();
  const addNewItem = useInput();
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <AddNewItem {...addNewItem} />
      <div>
        {items.map((e) => (
          <Item {...e} key={e.id} />
        ))}
      </div>
    </div>
  );
};

export default Items;
