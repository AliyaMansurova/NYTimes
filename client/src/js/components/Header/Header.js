import React from 'react';
import './Header.less';
import SearchForm from './../SearchForm';

export const Header = () => {
  return (
  <header>
     <div className="header">
       <img className="logo" src="/img/NYT.png" alt="" />
       <SearchForm/>
     </div>
  </header>

  );
};

export default Header;
