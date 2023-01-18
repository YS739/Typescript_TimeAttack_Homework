// TodoReducer 파일의 initialState type
export interface TodoStateType {
  todo: {
    id: string;
    title: string;
    content: string;
    isDone: boolean;
  }[];
}

// props로 넘겨받는
export interface TodosProsType {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}
