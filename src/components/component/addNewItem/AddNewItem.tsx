/* eslint-disable react/destructuring-assignment */
import useCustomDispatch from '@src/components/store/hooks/useCustomDispatch';
import {ChangeEvent, FC} from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {v4 as uuidv4} from 'uuid';

interface Iprops {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const AddNewItem: FC<Iprops> = (props) => {
  const {addNewItem} = useCustomDispatch();

  const postNewItem = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && props.value.length) {
      addNewItem({name: props.value, id: Number(uuidv4())});
    }
  };
  return (
    <input
      placeholder='press enter to add value'
      onKeyDown={postNewItem}
      tabIndex={0}
      {...props}
    />
  );
};

export default AddNewItem;
