import React from 'react';

const Pagination = ({ page, setPage, maxPage }) => {

  const setPrevPage = (e) => {
    if (page > 0)
      setPage(page - 1)
  }

  const setNextPage = (e) => {
    if (page < maxPage)
      setPage(page + 1)
  }

  return (
    <div className='Pagination'>
      <div className='btn-left'>
        <i className="fa-solid fa-angle-left link fa-lg" onClick={e => setPrevPage(e)}></i>
      </div>

      <div className='page'>
        <span>{page + 1}</span>
      </div>

      <div className='btn-right'>
        <i className="fa-solid fa-angle-right link fa-lg" onClick={e => setNextPage(e)}></i>
      </div>
    </div>
  );
};

export default Pagination;