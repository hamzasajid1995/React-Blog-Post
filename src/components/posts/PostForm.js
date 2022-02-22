import { useCallback, useEffect, useState } from 'react';
import { generateKey } from 'utils';
import classes from './PostForm.module.css';

function PostForm() {
  const [images, setImages] = useState([]);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?limit=3')
      .then(res => res.json())
      .then(res => {
        setImages(res);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const submitFormHandler = useCallback(
    event => {
      event.preventDefault();
      console.log({ id: generateKey(title), title, content, image });
    },
    [title, content, image]
  );

  return (
    <div className={classes.container}>
      <div className={classes.form_card}>
        <form className={classes.form} onSubmit={submitFormHandler}>
          <div className={classes.control}>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              id='title'
              value={title}
              onChange={event => {
                setTitle(event.target.value);
              }}
            />
          </div>

          <div className={classes.control}>
            <label htmlFor='content'>Content</label>
            <textarea
              id='content'
              rows='5'
              value={content}
              onChange={event => {
                setContent(event.target.value);
              }}
            />
          </div>

          {images.map(item => (
            <label key={item.id}>
              <input
                type='radio'
                name='test'
                value='small'
                onChange={event => {
                  if (event.target.checked) {
                    setImage(item.download_url);
                  }
                }}
                checked={item.download_url === image}
              />
              <img src={item.download_url} alt={item.author} className={classes.radio_image} />
            </label>
          ))}

          <div className={classes.actions}>
            <button type='submit' className='btn'>
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostForm;
