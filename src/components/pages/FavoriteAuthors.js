import React, { useState, useEffect } from 'react';
const FavoriteAuthors = (props) => {
  console.log('data', props.data);
  const _data = props.data;
  console.log('id', _data);
  const [removeFavAuthors, setremoveFavAuthors] = useState([]);
  useEffect(() => {
    const _removeFavAuthors = [...removeFavAuthors];
    _removeFavAuthors.push([...props.data]);
    setremoveFavAuthors(_removeFavAuthors);
  }, [props.data]);
  console.log('removeFavAuthors', removeFavAuthors);
  const removeFavAuthorHandler = (index) => {
    const _favAuthors = [...removeFavAuthors];
    console.log('_favAuthors', _favAuthors);
    _favAuthors.splice(index, 1);
    setremoveFavAuthors(_favAuthors);
  };
  return (
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
          {removeFavAuthors?.map((val, index) => (
            <tr key={index}>
              <td>{val.name}</td>
              <td>{val.bio}</td>
              <td>{val.link}</td>
              <td>
                <button
                  type='button'
                  onClick={() => removeFavAuthorHandler(index)}
                >
                  Remove Favorite
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default FavoriteAuthors;
