import { Routes, Route, Navigate } from 'react-router-dom';
import Posts from 'pages/Posts';
import NewPost from 'pages/NewPost';
import Layout from 'components/Layout';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Navigate replace to='/posts' />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/new-post' element={<NewPost />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
