/* eslint-disable react/destructuring-assignment */
import useCustomDispatch from '@src/components/store/hooks/useCustomDispatch';
import {FC, useState} from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {v4 as uuidv4} from 'uuid';

const AddNewItem: FC = () => {
  const [addNewItemValue, setAddNewItemValue] = useState<string>('');
  const {addNewItem} = useCustomDispatch();
  const postNewItem = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && addNewItemValue.length) {
      addNewItem({name: addNewItemValue, id: Number(uuidv4())});
      setAddNewItemValue('');
    }
  };
  return (
    <input
      placeholder='press enter to add value'
      onKeyDown={postNewItem}
      tabIndex={0}
      value={addNewItemValue}
      onChange={(e) => setAddNewItemValue(e.target.value)}
    />
  );
};

export default AddNewItem;
