import AddForm from '../../components/Main/AddForm';
import TodoContainer from '../../components/Main/TodoContainer';
import { TodoWrapper } from './style';

const Main = () => {
  return (
    <TodoWrapper>
      {/* ToDo 추가하는 input form */}
      <AddForm />
      {/* Working Todo List */}
      <TodoContainer isActive={true} />
      {/* Done Todo List */}
      <TodoContainer isActive={false} />
    </TodoWrapper>
  );
};

export default Main;
