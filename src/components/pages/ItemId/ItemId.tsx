import {fetchItem} from '@src/components/store/action/Items';
import {IData} from '@src/components/types/type';
import {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const ItemId: FC = () => {
  const [data, setData] = useState({} as IData);
  const {id} = useParams();
  const [edit, setEdit] = useState<boolean>(false);

  useEffect(() => {
    fetchItem(id, setData);
  }, []);
  console.log(edit);
  return (
    <ul>
      <li>{data.id}</li>
      {edit ? <input placeholder={data.name} /> : <li>{data.name}</li>}

      {edit ? (
        <button type='button' onClick={() => setEdit(!edit)}>
          save
        </button>
      ) : (
        <button type='button' onClick={() => setEdit(!edit)}>
          edit
        </button>
      )}
    </ul>
  );
};

export default ItemId;
