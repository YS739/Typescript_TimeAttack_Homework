import { combineReducers } from 'redux';
import TodoReducer from '../modules';

const rootReducer = combineReducers({
  TodoReducer,
});

export default rootReducer;

//  useSelector를 통해 리덕스 스토어에 접근할 때 사용
export type RootState = ReturnType<typeof rootReducer>;
