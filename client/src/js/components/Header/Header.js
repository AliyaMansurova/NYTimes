import React from 'react';
import './Header.less';
import SearchForm from './../SearchForm';

export const Header = () => {
  return (
     <div className="header">
       <img className="logo" src="/img/NYT.png" alt="" />
       <hr className="bookends" />
       <SearchForm/>
       <hr className="fade" />
     </div>
  );
};

export default Header;
