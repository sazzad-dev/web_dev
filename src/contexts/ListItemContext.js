import React, { useContext, useReducer, useState, useEffect } from 'react';
// import { confirmAlert } from "react-confirm-alert";
import * as api from '../Api/Api';
import { useHistory } from 'react-router-dom';

const ListItemContext = React.createContext();

export function useListItemContext() {
  return useContext(ListItemContext);
}
// const PERLINE_EMPTY_ITEM = {
//     name: null,
//     bio: null,
//     link: null
//   };

//   const initialState = [{ ...PERLINE_EMPTY_ITEM }];

//   function reducer(state, action) {
//     switch (action.type) {
//       case 'override_state':
//         return action.payload;
//       default:
//         return state;
//     }
//   }
export default function ListItemContextProvider({ children }) {
  const [authors, setAuthors] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const updateAuthors = async (page = 1, resultsPerPage = 5) => {
    const { results, ...pageInfo } = await api.authors({
      page,
      resultsPerPage,
    });
    setAuthors(results);
    setPageInfo(pageInfo);
  };

  const value = {
    authors,
    pageInfo,
    updateAuthors,
  };
  return (
    <ListItemContext.Provider value={value}>
      {children}
    </ListItemContext.Provider>
  );
}
