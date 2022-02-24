import { useMemo } from 'react';
import classes from './Pagination.module.css';

function computePageNumbers(totalPosts, postsPerPage) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); ++i) {
    pageNumbers.push(i);
  }
  return pageNumbers;
}

function Pagination({ totalPosts, postsPerPage, currentPage, setCurrentPage, setPostPerPage }) {
  const pageNumbers = useMemo(() => computePageNumbers(totalPosts, postsPerPage), [totalPosts, postsPerPage]);

  const minPage = pageNumbers[0];
  const maxPage = pageNumbers[pageNumbers.length - 1];

  return (
    <>
      <ul className={classes.pagination}>
        <li className={classes.page_item}>
          <button
            className={classes.page_link}
            onClick={() => {
              if (currentPage > minPage) {
                setCurrentPage(currentPage - 1);
              }
            }}
            type='button'
          >
            &lt;
          </button>
        </li>
        {pageNumbers.map(item => (
          <li key={item} className={`${classes.page_item} ${currentPage === item ? classes.active : ''}`}>
            <button
              className={classes.page_link}
              onClick={() => {
                setCurrentPage(item);
              }}
              type='button'
            >
              {item}
            </button>
          </li>
        ))}
        <li className={classes.page_item}>
          <button
            className={classes.page_link}
            onClick={() => {
              if (currentPage < maxPage) {
                setCurrentPage(currentPage + 1);
              }
            }}
            type='button'
          >
            &gt;
          </button>
        </li>
      </ul>
      <div style={{ margin: '1rem auto', textAlign: 'center' }}>
        <label htmlFor='postsCount'>Posts per page </label>
        <select
          id='postsCount'
          name='postsCount'
          value={postsPerPage}
          onChange={event => {
            setPostPerPage(+event.target.value);
          }}
        >
          <option value={3}>3</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
      </div>
    </>
  );
}

export default Pagination;
