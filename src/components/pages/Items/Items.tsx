import useCustomDispatch from '@src/components/store/hooks/useCustomDispatch';
import useTypeSelector from '@src/components/store/hooks/useTypeSelector';
import {FC, useEffect} from 'react';
import Item from '../Item/Item';

const Items: FC = () => {
  const {items} = useTypeSelector((state) => state.item);
  const {fetchItems} = useCustomDispatch();
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      {items.map((e) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Item {...e} key={e.id} />
      ))}
    </div>
  );
};

export default Items;
