import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from './redux/config/configStore';

// store에 접근하는 RootState를 매번 import할 필요 없이 hook을 쓰면 된다.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
