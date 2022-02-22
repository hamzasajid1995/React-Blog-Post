const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
  posts: [
    {
      id: 1,
      title: 'Post 1',
      content:
        'Qui magna voluptate occaecat id exercitation incididunt aliquip sint. Veniam incididunt veniam dolor anim laborum adipisicing laborum cupidatat aliqua proident sit dolore. Commodo qui enim incididunt cillum cillum id labore duis nisi. Proident magna duis aliqua anim ex velit in. Enim magna tempor elit elit velit laborum anim ut nulla sunt. Reprehenderit proident ex est eu irure nostrud pariatur magna exercitation proident. Aliquip dolor et Lorem exercitation ipsum duis exercitation magna aliqua commodo Lorem non irure.',
      image: 'https://i.picsum.photos/id/702/200/300.jpg?hmac=mkz0etLNxZEtcZKYuBuDYD9KewX-7Tv_qsT6aFO0bCU',
    },
    {
      id: 2,
      title: 'Post 2',
      content:
        'Qui magna voluptate occaecat id exercitation incididunt aliquip sint. Veniam incididunt veniam dolor anim laborum adipisicing laborum cupidatat aliqua proident sit dolore. Commodo qui enim incididunt cillum cillum id labore duis nisi. Proident magna duis aliqua anim ex velit in. Enim magna tempor elit elit velit laborum anim ut nulla sunt. Reprehenderit proident ex est eu irure nostrud pariatur magna exercitation proident. Aliquip dolor et Lorem exercitation ipsum duis exercitation magna aliqua commodo Lorem non irure.',
      image: 'https://i.picsum.photos/id/702/200/300.jpg?hmac=mkz0etLNxZEtcZKYuBuDYD9KewX-7Tv_qsT6aFO0bCU',
    },
    {
      id: 3,
      title: 'Post 3',
      content:
        'Qui magna voluptate occaecat id exercitation incididunt aliquip sint. Veniam incididunt veniam dolor anim laborum adipisicing laborum cupidatat aliqua proident sit dolore. Commodo qui enim incididunt cillum cillum id labore duis nisi. Proident magna duis aliqua anim ex velit in. Enim magna tempor elit elit velit laborum anim ut nulla sunt. Reprehenderit proident ex est eu irure nostrud pariatur magna exercitation proident. Aliquip dolor et Lorem exercitation ipsum duis exercitation magna aliqua commodo Lorem non irure.',
      image: 'https://i.picsum.photos/id/702/200/300.jpg?hmac=mkz0etLNxZEtcZKYuBuDYD9KewX-7Tv_qsT6aFO0bCU',
    },
  ],
  status: '',
};

export const addPost = createAsyncThunk('post/addPost', post => post);

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    // addPost(state, action) {
    //   state.unshift(action.payload);
    // },
  },
  extraReducers: {
    [addPost.pending]: state => {
      state.status = 'Loading';
    },
    [addPost.fulfilled]: (state, action) => {
      state.status = 'Done';
      console.log({ action });
      state.posts.unshift(action.payload);
    },
    [addPost.rejected]: state => {
      state.status = 'Failed';
    },
  },
});

export const postActions = postSlice.actions;

const postReducer = postSlice.reducer;

export default postReducer;
