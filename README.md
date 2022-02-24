<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Blog Post App</h3>

  <p align="center">
    An awesome Blog Post React App
     <br />
    <a href="https://hamzasajid1995.github.io/blog-post/"><strong>App Demo</strong></a>
    <br />
  </p>
</div>



<!-- ABOUT THE PROJECT -->
## About The Project

A React based Mini Content Management System where user can browse posts, view post and create new posts

### Live Demo

* [App Demo](https://hamzasajid1995.github.io/blog-post/)

### Built With

* [React.js](https://reactjs.org/)
* [React Router](https://reactrouter.com/)
* [Redux Toolkit](https://redux-toolkit.js.org/)

### Formatting and linting

* [Prettier](https://prettier.io/)
* [Eslint](https://eslint.org/)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/hamzasajid1995/blog-post.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start project
   ```sh
   npm start
   ```

<!-- USAGE EXAMPLES -->
## Usage

1. Navbar can be found on top on screen to navigate to different pages.
2. '/Posts' is the home page which will list all the posts. posts are paginated and pagination options can be found on bottom of the screen
3. '/Posts/:postId' is the post details page which can be accesed by clicking any post
4. '/new-post' is the page which can be used to create new posts



<!-- App development Info -->
## Info

1. For routing I'm using <b>react router v6</b>. There is a Layout, which has a navbar and an Outlet for all the nested routes. When deploying to a server we'll use <b>BrowserRouter</b> but for now I'm using <b>HashRouter</b> because app is deployed on <b>Github pages</b> and i can't customize server configs to support BrowserRouter.
2. For State management I'm using <b>react-redux</b> with **redux-toolkit**. I have also added **AsyncThunk** and **EntityAdapter**. The state is also Persited in browser **LocalStorage**


## Write HTML

React escapes HTML by default, but we can set HTML content of the element using 'INNERHTML' property. In react its called <b>dangerouslySetInnerHTML</b> which lets React know that the HTML inside of that component is not something it cares about.
```
function createMarkup() {
  return {__html: 'First &middot; Second'};
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}
```
The word dangerous is there because using it carelessly will create XSS vulnerabilities in your application. If you want to use it then you should sanitize your code using packages like **dom-purify with jsdom**
