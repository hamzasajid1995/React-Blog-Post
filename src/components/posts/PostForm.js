import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from 'store/postSlice';
import { generateKey } from 'utils';
import classes from './PostForm.module.css';

const images = [{ id: 1 }, { id: 2 }, { id: 3 }];

function PostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedImage, setSelectedImage] = useState('');

  const dispatch = useDispatch();

  const submitFormHandler = useCallback(
    event => {
      event.preventDefault();
      dispatch(addPost({ id: generateKey(title), title, content, image: selectedImage })).then(() => {
        setSelectedImage('');
        setContent('');
        setTitle('');
      });
    },
    [title, content, selectedImage, dispatch]
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
              required
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
              required
            />
          </div>

          {images.map(item => (
            <ImageOption key={item.id} item={item} setSelectedImage={setSelectedImage} selectedImage={selectedImage} />
          ))}

          <div className={classes.actions}>
            <button type='submit' className='btn'>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function ImageOption({ item, setSelectedImage, selectedImage }) {
  const [image, setImage] = useState('');

  useEffect(() => {
    fetch(`https://picsum.photos/200?random=${item.id}`).then(res => {
      setImage(res.url);
    });
  }, []);

  useEffect(() => {
    if (item.id === 1) {
      setSelectedImage(image);
    }
  }, [image]);

  return (
    <label>
      <input
        required
        type='radio'
        name='test'
        value='small'
        checked={image === selectedImage}
        onChange={event => {
          if (event.target.checked) {
            setSelectedImage(image);
          }
        }}
      />
      <img src={image} alt={item.id} className={classes.radio_image} />
    </label>
  );
}

export default PostForm;