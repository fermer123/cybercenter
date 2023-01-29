import useCustomDispatch from '@src/components/store/hooks/useCustomDispatch';
import {FC, useEffect} from 'react';
import {useParams} from 'react-router-dom';

const ItemId: FC = () => {
  const {id} = useParams();
  const {fetchItem} = useCustomDispatch();
  useEffect(() => {
    fetchItem(id);
  }, []);

  return <div>{id}</div>;
};

export default ItemId;
