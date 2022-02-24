import { useParams } from 'react-router-dom';
import PostDetails from 'components/posts/PostDetails';
import { useSelector } from 'react-redux';
import { postSelectors } from 'store/postSlice';

function Post() {
  const params = useParams();

  const { postId } = params;
  const post = useSelector(state => postSelectors.selectById(state, postId));

  if (!post) return <h3 style={{ textAlign: 'center', margin: '3rem' }}>Post not Found!</h3>;

  return <PostDetails post={post} />;
}

export default Post;
