import PostList from 'components/posts/PostList';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from 'components/pagination/Pagination';
import { postSelectors } from 'store/postSlice';

function Posts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(3);

  const posts = useSelector(postSelectors.selectAll);
  const totalPosts = useSelector(postSelectors.selectTotal);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <PostList posts={currentPosts} />

      <Pagination
        totalPosts={totalPosts}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setPostPerPage={setPostPerPage}
      />
    </div>
  );
}

export default Posts;
