import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../../redux/modules/action/todoAction';
import { v4 as uuidv4 } from 'uuid';
import CustomButton from '../../CustomButton';
import { AddTodoBox, InputBox, Input } from './style';
import { todosProsType } from '../../../redux/modules/action/todoAction';

const AddForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  //   input에 입력한 값 받기
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    // input(제목, 내용)에 입력된 값 받기
    if (event.target.id === 'title') {
      setTitle(event.target.value);
    } else if (event.target.id === 'content') {
      setContent(event.target.value);
    }
  };

  // 추가하기 버튼을 누르면 새로운 ToDo가 추가
  const onAddToDoHandler = (event: any): void => {
    // 제목과 내용이 모두 입력되었을 때
    if (title && content) {
      event.preventDefault();
      const newToDoS: todosProsType = {
        id: uuidv4,
        title: title,
        content: content,
        isDone: false,
      };
      dispatch(addTodo(newToDoS));
      // input 초기화
      setTitle('');
      setContent('');
    }

    // 제목과 내용이 모두 비었을 때 - 제목에 focus
    else if (!title && !content) {
      event.preventDefault();
      // document.querySelector('#title').focus() ;
      alert('제목과 내용을 입력해주세요');
    }

    // 제목이 비었을 때 - 내용에 focus
    else if (!title) {
      event.preventDefault();
      // document.getElementById('title')as HTMLElement.focus() ;
      alert('제목을 입력해주세요');
    }

    // 내용이 비었을 때  - 제목에 focus
    else if (!content) {
      event.preventDefault();
      // document.getElementById('content').focus();
      alert('내용을 입력해주세요');
    }
  };

  return (
    <AddTodoBox>
      <form onSubmit={onAddToDoHandler}>
        <InputBox>
          <h3>제목</h3>

          <Input
            placeholder="제목을 입력해주세요."
            id="title"
            value={title}
            // maxLength="20"
            onChange={onChangeHandler}
          />
          <h3>내용</h3>
          <Input
            placeholder="내용을 입력해주세요."
            id="content"
            value={content}
            // maxLength="50"
            onChange={onChangeHandler}
          />
          <CustomButton btnName="add">추가하기</CustomButton>
        </InputBox>
      </form>
    </AddTodoBox>
  );
};

export default AddForm;
