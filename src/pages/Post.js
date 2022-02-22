import { useParams } from 'react-router-dom';
import PostDetails from 'components/posts/PostDetails';

function Post() {
  const params = useParams();

  const { postId } = params;

  return <PostDetails id={postId} />;
}

export default Post;
