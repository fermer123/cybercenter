import {fetchItem} from '@src/components/store/action/Items';
import {IData} from '@src/components/types/type';
import {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const ItemId: FC = () => {
  const [data, setData] = useState({} as IData);
  const {id} = useParams();

  useEffect(() => {
    fetchItem(id, setData);
  }, []);

  return <div>{data.id}</div>;
};

export default ItemId;
