// TodoItem type
declare interface TodoItem {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}

// TodoReducer 파일의 initialState type
declare interface TodoReducerState {
  todos: TodoItem[];
}
