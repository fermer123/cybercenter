import {IData} from '@src/components/types/type';
import {FC, memo} from 'react';
import {NavLink} from 'react-router-dom';

const Item: FC<IData> = ({name, id}) => {
  return (
    <div>
      <NavLink to={`items/${id}`}>{name}</NavLink>
    </div>
  );
};

export default memo(Item);
