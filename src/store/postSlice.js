const { createSlice, createAsyncThunk, createEntityAdapter } = require('@reduxjs/toolkit');

const posts = [
  {
    id: 1,
    title: 'Post 1',
    content:
      'Qui magna voluptate occaecat id exercitation incididunt aliquip sint. Veniam incididunt veniam dolor anim laborum adipisicing laborum cupidatat aliqua proident sit dolore. Commodo qui enim incididunt cillum cillum id labore duis nisi. Proident magna duis aliqua anim ex velit in. Enim magna tempor elit elit velit laborum anim ut nulla sunt. Reprehenderit proident ex est eu irure nostrud pariatur magna exercitation proident. Aliquip dolor et Lorem exercitation ipsum duis exercitation magna aliqua commodo Lorem non irure.',
    image: 'https://picsum.photos/720?random=1',
  },
  {
    id: 2,
    title: 'Post 2',
    content:
      'Dolore magna anim ut excepteur sint sit do nostrud enim tempor esse mollit consequat. Non duis nisi ad velit nulla consectetur magna. Irure amet aliqua adipisicing nulla aliquip dolor commodo nulla nulla mollit ipsum ea ea.',
    image: 'https://picsum.photos/720?random=2',
  },
  {
    id: 3,
    title: 'Post 3',
    content:
      'Ullamco proident mollit ad elit qui amet ullamco duis ex qui cupidatat. Sint exercitation deserunt sunt sint sint aliqua amet nostrud do nulla eu. Eiusmod consequat duis non proident esse. Aute amet nisi culpa quis exercitation labore aute et. Et sit irure adipisicing laborum sit.',
    image: 'https://picsum.photos/720?random=3',
  },
  {
    id: 4,
    title: 'Post 4',
    content:
      'Qui magna voluptate occaecat id exercitation incididunt aliquip sint. Veniam incididunt veniam dolor anim laborum adipisicing laborum cupidatat aliqua proident sit dolore. Commodo qui enim incididunt cillum cillum id labore duis nisi. Proident magna duis aliqua anim ex velit in. Enim magna tempor elit elit velit laborum anim ut nulla sunt. Reprehenderit proident ex est eu irure nostrud pariatur magna exercitation proident. Aliquip dolor et Lorem exercitation ipsum duis exercitation magna aliqua commodo Lorem non irure.',
    image: 'https://picsum.photos/720?random=4',
  },
  {
    id: 5,
    title: 'Post 5',
    content:
      'Commodo reprehenderit nulla eiusmod aute excepteur id. Duis nisi sunt cupidatat voluptate aute laboris occaecat ipsum sint ea eiusmod aliqua commodo ea. Qui exercitation sit in ad proident irure cillum qui.',
    image: 'https://picsum.photos/720?random=5',
  },
  {
    id: 6,
    title: 'Post 6',
    content:
      'Sunt duis adipisicing occaecat consectetur ut esse elit amet tempor fugiat enim deserunt irure ullamco. Duis sunt ut proident reprehenderit cillum labore. Enim qui elit consequat cupidatat sit aute Lorem.',
    image: 'https://picsum.photos/720?random=6',
  },
  {
    id: 7,
    title: 'Post 7',
    content:
      'Elit voluptate minim non ad eiusmod eu do est aute. Esse eiusmod veniam occaecat eu laboris deserunt. Adipisicing cillum mollit aliquip veniam non excepteur pariatur. Duis eiusmod do cupidatat labore non ullamco sint veniam sint aliqua voluptate. Commodo est magna est amet minim ullamco elit eiusmod deserunt voluptate ullamco elit voluptate.',
    image: 'https://picsum.photos/720?random=7',
  },
  {
    id: 8,
    title: 'Post 8',
    content:
      'Amet ipsum ullamco do culpa fugiat occaecat esse dolor veniam quis sit consectetur irure. Incididunt laboris sit deserunt eiusmod. Irure tempor et ullamco mollit aliquip ut velit amet ullamco voluptate dolor amet. Anim commodo aliquip officia veniam fugiat nisi reprehenderit esse consequat anim.',
    image: 'https://picsum.photos/720?random=8',
  },
  {
    id: 9,
    title: 'Post 9',
    content:
      'Adipisicing sunt quis esse proident labore. Sunt voluptate id cupidatat nulla excepteur ex reprehenderit. Officia tempor aliqua Lorem occaecat esse non sunt. Elit aliquip adipisicing officia in enim aliqua cupidatat consectetur cillum velit officia consectetur aliquip. Elit esse aliqua laboris sit ea deserunt est ullamco cupidatat. Id consectetur nisi do ex aute laborum. Quis ea mollit eiusmod mollit sint culpa eu cupidatat aute laborum sint. Est aute minim officia reprehenderit ullamco ad Lorem sint anim amet Lorem eiusmod ut fugiat.',
    image: 'https://picsum.photos/720?random=9',
  },
];

export const addPost = createAsyncThunk('post/addPost', post => post);

export const postsAdapter = createEntityAdapter({
  postId: post => post.id,
});

const emptyInitialState = postsAdapter.getInitialState({ status: '', isLoading: false });
const filledState = postsAdapter.upsertMany(emptyInitialState, posts);

const postSlice = createSlice({
  name: 'post',
  initialState: filledState,
  reducers: {},
  extraReducers: {
    [addPost.pending]: state => {
      state.status = 'Loading';
      state.isLoading = true;
    },
    [addPost.fulfilled]: (state, action) => {
      state.status = 'Done';
      state.isLoading = false;
      postsAdapter.addOne(state, action.payload);
    },
    [addPost.rejected]: state => {
      state.status = 'Failed';
      state.isLoading = false;
    },
  },
});

export const postSelectors = postsAdapter.getSelectors(state => state.posts);

export const postActions = postSlice.actions;

const postReducer = postSlice.reducer;

export default postReducer;
