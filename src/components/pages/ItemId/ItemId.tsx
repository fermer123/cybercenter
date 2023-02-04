import {fetchItem} from '@src/components/store/action/Items';
import useInput from '@src/components/store/hooks/input';
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
    <div>
      <p>{data.id}</p>
      {edit ? (
        <input placeholder={data.name} {...editInput} />
      ) : (
        <div>
          <p>{data.name}</p>
        </div>
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
    </div>
  );
};

export default ItemId;
