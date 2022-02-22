import classes from './Pagination.module.css';

function Pagination({ totalPosts, postsPerPage, currentPage, setCurrentPage, setPostPerPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); ++i) {
    pageNumbers.push(i);
  }

  return (
    <>
      <ul className={classes.pagination}>
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
