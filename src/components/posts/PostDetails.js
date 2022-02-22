import classes from './PostDetails.module.css';

function PostDetails({ post }) {
  return (
    <div className={classes.container}>
      <h1>{post.title} </h1>
      <p>{post.content} </p>
      <img src={post.image} alt={post.title} className={classes.image} loading='lazy' />
    </div>
  );
}

export default PostDetails;
