import React, { useState } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  // const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          {/* <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRVL
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div> */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {/* <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              ></Link>
            </li> */}
            <li className='nav-item'>
              <Link
                to='/authors'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Authors
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/favoriteAuthors'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Favorite Authors
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Menu;
