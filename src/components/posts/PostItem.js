import { Link } from 'react-router-dom';
import classes from './PostItem.module.css';

function PostItem({ post }) {
  return (
    <Link to={`/posts/${post.id}`} style={{ textDecoration: 'none', color: 'initial' }}>
      <div className={classes.item}>
        <h3>{post.title}</h3>
        <p className={classes.content}>{post.content}</p>
        <div className={classes.item_img_container}>
          <img className={classes.item_img} src={post.image} alt={post.title} loading='lazy' />
        </div>
      </div>
    </Link>
  );
}

export default PostItem;
