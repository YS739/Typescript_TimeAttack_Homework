import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoDetail from '../pages/DetailPage/TodoDetail';
import Main from '../pages/MainPage/Main';

//TODO: Layout 추가할지 말지
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<TodoDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
