import { ADD_TODO, DELETE_TODO, SWITCH_TODO } from './type';
import { TodosProsType } from '../../../interfaces/interface';

// Action Creator
// todo 추가하기
export const addTodo = (todo: TodosProsType) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

// todo 삭제하기
export const deleteTodo = (todo: string) => {
  return {
    type: DELETE_TODO,
    payload: todo,
  };
};

// todo 상태 변경하기
export const switchTodo = (todo: string) => {
  return {
    type: SWITCH_TODO,
    payload: todo,
  };
};
