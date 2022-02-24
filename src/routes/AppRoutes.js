import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from 'components/Layout';

// const NewPost = React.lazy(import('pages/NewPost'));
// const Posts = React.lazy(import('pages/Posts'));
// const Post = React.lazy(import('pages/Post'));
// INFO: React.Lazy is not working hashrouter

import NewPost from 'pages/NewPost';
import Posts from 'pages/Posts';
import Post from 'pages/Post';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Navigate replace to='/posts' />} />
        <Route path='/new-post' element={<NewPost />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/posts/:postId' element={<Post />} />
        <Route path='*' element={<Navigate replace to='/posts' />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
