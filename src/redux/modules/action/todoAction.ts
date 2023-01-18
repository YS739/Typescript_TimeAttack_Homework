import { ADD_TODO, DELETE_TODO, SWITCH_TODO } from './type';

export interface todosProsType {
  id: any;
  title: string;
  content: string;
  isDone: boolean;
}

// Action Creator
// todo 추가하기
export const addTodo = (todo: todosProsType) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

// todo 삭제하기
export const deleteTodo = (todo: todosProsType) => {
  return {
    type: DELETE_TODO,
    payload: todo,
  };
};

// todo 상태 변경하기
export const switchTodo = (todo: todosProsType) => {
  return {
    type: SWITCH_TODO,
    payload: todo,
  };
};
