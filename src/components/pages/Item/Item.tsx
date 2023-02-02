import useCustomDispatch from '@src/components/store/hooks/useCustomDispatch';
import {IData} from '@src/components/types/type';
import {FC, memo} from 'react';
import {NavLink} from 'react-router-dom';

const Item: FC<IData> = ({name, id}) => {
  const {deleteItem} = useCustomDispatch();
  return (
    <div>
      <NavLink to={`items/${id}`}>{name}</NavLink>
      <button type='button' onClick={() => deleteItem(Number(id))}>
        delete
      </button>
    </div>
  );
};

export default memo(Item);
