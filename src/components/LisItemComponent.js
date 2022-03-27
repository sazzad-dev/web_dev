import React, { useState, useEffect } from 'react';
import * as api from '../Api/Api';
import PaginationControls from './Pagination';
import FavoriteAuthors from './pages/FavoriteAuthors';
import './ListItemComponent.css';

const ListItemComponent = () => {
  const [authors, setAuthors] = useState([]);
  const [page, setPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(5);
  const [pageInfo, setPageInfo] = useState({});
  const [favAuthors, setFavAuthors] = useState([]);

  const updateAuthors = async (page = 1, resultsPerPage = 5) => {
    const { results, ...pageInfo } = await api.authors({
      page,
      resultsPerPage,
    });
    setAuthors(results);
    setPageInfo(pageInfo);
  };
  const getFavAuthor = (id) => {
    setFavAuthors(authors.filter((x) => x._id === id));
  };
  console.log('getFavAuthorById', favAuthors);
  useEffect(() => {
    if (page) updateAuthors(page, resultsPerPage);
  }, [page, resultsPerPage]);

  return (
    <>
      <PaginationControls
        {...pageInfo}
        page={page}
        limit={resultsPerPage}
        setPage={setPage}
        setResultsPerPage={setResultsPerPage}
      />
      <FavoriteAuthors data={favAuthors} />
      <div className='authorList condensed'>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Author's Name</th>
              <th>Bio</th>
              <th>Link</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((author, index) => (
              <tr key={index}>
                <td>{author.name}</td>
                <td>{author.bio}</td>
                <td>{author.link}</td>
                <td>
                  <button
                    type='button'
                    onClick={() => getFavAuthor(author._id)}
                  >
                    Add Favorite
                  </button>
                  <button>Remove Favorite</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListItemComponent;
