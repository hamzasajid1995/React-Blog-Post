import PostList from 'components/posts/PostList';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from 'components/pagination/Pagination';

function Posts() {
  const posts = useSelector(state => state.posts.posts);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(3);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <PostList posts={currentPosts} />

      <Pagination
        totalPosts={posts.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setPostPerPage={setPostPerPage}
      />
    </div>
  );
}

export default Posts;
