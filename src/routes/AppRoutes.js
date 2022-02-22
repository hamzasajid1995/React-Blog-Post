import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from 'components/Layout';

const NewPost = React.lazy(import('pages/NewPost'));
const Posts = React.lazy('pages/Posts');
const Post = React.lazy('pages/Post');

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Navigate replace to='/posts' />} />
        <Route path='/new-post' element={<NewPost />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/posts/:postId' element={<Post />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
