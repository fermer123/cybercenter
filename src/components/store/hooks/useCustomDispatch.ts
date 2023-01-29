import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Items from '../action/Items';

const useCustomDispatch = () => {
  const dispatch = useDispatch();
  return bindActionCreators(Items, dispatch);
};
export default useCustomDispatch;
