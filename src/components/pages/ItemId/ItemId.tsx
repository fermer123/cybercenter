import useInput from '@src/components/component/input';
import {fetchItem} from '@src/components/store/action/Items';
import useCustomDispatch from '@src/components/store/hooks/useCustomDispatch';
import {IData} from '@src/components/types/type';
import {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const ItemId: FC = () => {
  const [data, setData] = useState({} as IData);
  const {id} = useParams();
  const [edit, setEdit] = useState<boolean>(false);
  const {editItem} = useCustomDispatch();
  const editInput = useInput();

  const switchEdit = () => {
    setEdit(!edit);
  };

  const editHandler = (idx: number, name: string) => {
    if (name.length > 3) {
      switchEdit();
      editItem(idx, name);
    } else {
      switchEdit();
    }
  };

  useEffect(() => {
    fetchItem(id, setData);
  }, [edit]);

  return (
    <ul>
      <li>{data.id}</li>
      {edit ? (
        <input placeholder={data.name} {...editInput} />
      ) : (
        <li>{data.name}</li>
      )}

      {edit ? (
        <button
          type='button'
          onClick={() => editHandler(Number(id), editInput.value)}>
          save
        </button>
      ) : (
        <button type='button' onClick={switchEdit}>
          edit
        </button>
      )}
    </ul>
  );
};

export default ItemId;
