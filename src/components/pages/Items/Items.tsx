import AddNewItem from '@src/components/component/addNewItem/AddNewItem';
import useInput from '@src/components/component/input';
import useCustomDispatch from '@src/components/store/hooks/useCustomDispatch';
import useTypeSelector from '@src/components/store/hooks/useTypeSelector';
import {IData} from '@src/components/types/type';
import {ChangeEvent, FC, useCallback, useEffect, useState} from 'react';
import Item from '../Item/Item';

const Items: FC = () => {
  const [searchItem, setSearchItem] = useState('');
  const [searchItemArr, setSearchItemArr] = useState<IData[]>([]);
  const {items} = useTypeSelector((state) => state.item);
  const {fetchItems} = useCustomDispatch();
  const addNewItem = useInput();

  useEffect(() => {
    fetchItems();
  }, []);

  const itemSearchHandler = useCallback(
    (str: ChangeEvent<HTMLInputElement>) => {
      setSearchItem(str.target.value);
      items.map(
        (e) =>
          e.name.toLowerCase().includes(searchItem.toLowerCase()) &&
          searchItemArr.push(e),
      );
      setSearchItemArr(searchItemArr);
    },
    [searchItem],
  );
  console.log(searchItem);
  return (
    <div>
      <input
        placeholder='search'
        value={searchItem}
        onChange={(e) => itemSearchHandler(e)}
      />
      <AddNewItem {...addNewItem} />
      <div>
        {items.map((e) =>
          searchItemArr.includes(e) ? (
            <Item {...e} key={e.id} color='red' />
          ) : (
            <Item {...e} key={e.id} color='none' />
          ),
        )}
      </div>
    </div>
  );
};

export default Items;
