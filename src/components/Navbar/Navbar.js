import { NavLink } from 'react-router-dom';

import classes from './Navbar.module.css';

function Navbar() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Blog-Post</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/posts' className={navData => (navData.isActive ? classes.active : '')}>
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink to='/new-post' className={navData => (navData.isActive ? classes.active : '')}>
              New Post
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
