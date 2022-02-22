import PostList from 'components/posts/PostList';
import { useSelector } from 'react-redux';

function Posts() {
  const posts = useSelector(state => state.posts.posts);

  return <PostList posts={posts} />;
}

export default Posts;
