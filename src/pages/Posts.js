import PostList from 'components/posts/PostList';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from 'components/pagination/Pagination';
import { postSelectors } from 'store/postSlice';

const STARTING_PAGE = 1;

function Posts() {
  const [currentPage, setCurrentPage] = useState(STARTING_PAGE);
  const [postsPerPage, setPostPerPage] = useState(3);

  useEffect(() => {
    setCurrentPage(STARTING_PAGE);
  }, [postsPerPage]);

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
