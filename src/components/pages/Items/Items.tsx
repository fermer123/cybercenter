import AddNewItem from '@src/components/component/addNewItem/AddNewItem';
import useCustomDispatch from '@src/components/store/hooks/useCustomDispatch';
import useTypeSelector from '@src/components/store/hooks/useTypeSelector';
import {IData} from '@src/components/types/type';
import {FC, MouseEvent, useEffect, useState} from 'react';
import Item from '../Item/Item';

const Items: FC = () => {
  const [searchItem, setSearchItem] = useState<string>('');
  const [searchItemArr, setSearchItemArr] = useState<IData[]>([]);
  const {items, loading} = useTypeSelector((state) => state.item);
  const {fetchItems} = useCustomDispatch();
  const [searchIndex, setSearchIndex] = useState<number>(0);

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    const itemSearchHandler = (search: string) => {
      if (search.length >= 2) {
        setSearchItemArr(
          items.filter((e) =>
            e.name.toLowerCase().includes(search.toLowerCase()),
          ),
        );
      } else {
        setSearchItemArr([]);
      }
    };
    itemSearchHandler(searchItem);
  }, [searchItem]);

  const changeIndexHandler = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.innerHTML === 'prev' && searchIndex > 0) {
      setSearchIndex(searchIndex - 1);
    } else if (searchIndex < searchItemArr.length - 1) {
      setSearchIndex(searchIndex + 1);
    }
  };

  if (loading) {
    return <span>loading</span>;
  }

  return (
    <div>
      <input
        placeholder='search'
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      {searchItem ? (
        <>
          <button
            style={{padding: '0 15px', border: '1px solid'}}
            onClick={changeIndexHandler}
            type='button'>
            prev
          </button>
          <button
            style={{padding: '0 15px', border: '1px solid'}}
            onClick={changeIndexHandler}
            type='button'>
            next
          </button>
        </>
      ) : null}
      <AddNewItem />
      <ul>
        {items.map((e) =>
          searchItemArr[searchIndex]?.name === e.name ? (
            <li key={e.id} style={{backgroundColor: 'orange'}}>
              <Item {...e} />
            </li>
          ) : (
            <li key={e.id}>
              <Item {...e} />
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

export default Items;
