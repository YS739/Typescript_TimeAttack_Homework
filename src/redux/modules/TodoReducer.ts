import { v4 as uuidv4 } from 'uuid';
import { ADD_TODO, DELETE_TODO, SWITCH_TODO } from './action/type';
import { addTodo, deleteTodo, switchTodo } from './action/todoAction';
import { TodoStateType } from '../../interfaces/interface';

// Initial State
const initialState = {
  todo: [
    {
      id: uuidv4(),
      title: 'React',
      content: '리액트 과제 제출하기',
      isDone: true,
    },
    {
      id: uuidv4(),
      title: '독서하기',
      content: '<IT지식> 10장 읽기',
      isDone: false,
    },
  ],
};

// Reducer 인자 중 action의 type 정의
type TodoActionType =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof switchTodo>
  | ReturnType<typeof deleteTodo>;

// Reducer
const TodoReducer = (
  state: TodoStateType = initialState,
  action: TodoActionType,
) => {
  switch (action.type) {
    // 추가하기
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };

    // 삭제하기
    case DELETE_TODO:
      const newTodo = state.todo.filter((del) => del.id !== action.payload);
      return {
        todo: newTodo,
      };

    // 상태 변경(완료, 취소)
    case SWITCH_TODO:
      const switchId = state.todo.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return {
          ...todo,
        };
      });
      return {
        todo: switchId,
      };
    default:
      return state;
  }
};

// export default reducer
export default TodoReducer;
