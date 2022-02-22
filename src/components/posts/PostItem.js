import classes from './PostItem.module.css';

function PostItem({ post }) {
  return (
    <div className={classes.item}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <div className={classes.item_img_container}>
        <img className={classes.item_img} src={post.image} alt={post.title} />
      </div>
    </div>
  );
}

export default PostItem;
