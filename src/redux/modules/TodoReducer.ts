import { v4 as uuidv4 } from 'uuid';

// Action Types
enum ActionTypes {
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
  SWITCH_TODO = 'SWITCH_TODO',
}

// Action Creator
// todo 추가하기
export const addTodo = (todo: TodoItem) => {
  return {
    type: ActionTypes.ADD_TODO,
    payload: todo,
  };
};

// todo 삭제하기
export const deleteTodo = (todo: string) => {
  return {
    type: ActionTypes.DELETE_TODO,
    payload: todo,
  };
};

// todo 상태 변경하기
export const switchTodo = (todo: string) => {
  return {
    type: ActionTypes.SWITCH_TODO,
    payload: todo,
  };
};

// Initial State
const initialState: TodoReducerState = {
  todos: [
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

// TodoAction
type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof switchTodo>;

// Reducer
const TodoReducer = (
  state = initialState,
  action: TodoAction,
): TodoReducerState => {
  switch (action.type) {
    // 추가하기
    case ActionTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload as TodoItem],
      };

    // 삭제하기
    case ActionTypes.DELETE_TODO:
      const newTodo = state.todos.filter((del) => del.id !== action.payload);
      return {
        todos: newTodo,
      };

    // 상태 변경(완료, 취소)
    case ActionTypes.SWITCH_TODO:
      const switchId = state.todos.map((todo) => {
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
        todos: switchId,
      };
    default:
      return state;
  }
};

// export default reducer
export default TodoReducer;
