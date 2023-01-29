import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {rootReducerType} from '..';

const useTypeSelector: TypedUseSelectorHook<rootReducerType> = useSelector;
export default useTypeSelector;
