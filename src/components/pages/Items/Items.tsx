import AddNewItem from '@src/components/component/addNewItem/AddNewItem';
import useCustomDispatch from '@src/components/store/hooks/useCustomDispatch';
import useTypeSelector from '@src/components/store/hooks/useTypeSelector';
import {IData} from '@src/components/types/type';
import {FC, useEffect, useState} from 'react';
import Item from '../Item/Item';

const Items: FC = () => {
  const [searchItem, setSearchItem] = useState<string>('');
  const [searchItemArr, setSearchItemArr] = useState<IData[]>([]);
  const {items} = useTypeSelector((state) => state.item);
  const {fetchItems} = useCustomDispatch();

  useEffect(() => {
    fetchItems();
  }, []);

  // const itemSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   setSearchItem(e.target.value);
  //   if (searchItem.length >= 2) {
  //     setSearchItemArr(
  //       items.filter((e) =>
  //         e.name.toLowerCase().includes(searchItem.toLowerCase()),
  //       ),
  //     );
  //   } else {
  //     setSearchItemArr([]);
  //   }
  // };

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

  // const itemSearchHandler = useCallback(
  //   (str: ChangeEvent<HTMLInputElement>) => {
  //     setSearchItem(str.target.value);
  //     if (searchItem.length >= 2) {
  //       setSearchItemArr(
  //         items.filter((e) =>
  //           e.name.toLowerCase().includes(searchItem.toLowerCase()),
  //         ),
  //       );
  //     } else {
  //       setSearchItemArr([]);
  //     }
  //   },
  //   [searchItem],
  // );

  return (
    <div>
      <input
        placeholder='search'
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <AddNewItem />
      <div>
        {items.map((e) =>
          searchItemArr.includes(e) ? (
            <div key={e.id} style={{backgroundColor: 'red'}}>
              <Item {...e} />
            </div>
          ) : (
            <Item {...e} key={e.id} />
          ),
        )}
      </div>
    </div>
  );
};

export default Items;
