import PostItem from './PostItem';
import classes from './PostList.module.css';

function PostList({ posts }) {
  return (
    <div className={classes.post_container}>
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
