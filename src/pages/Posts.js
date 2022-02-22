import PostList from 'components/posts/PostList';

const posts = [
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
];

function Posts() {
  return <PostList posts={posts} />;
}

export default Posts;
