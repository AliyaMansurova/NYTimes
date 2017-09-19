import React from 'react';
import './Header.less';
import SearchForm from './../SearchForm';
import WeatherWidget  from '../Weather/Weather';
export const Header = () => {
  return (
     <div className="header">
       <img className="logo" src="/img/NY.png" alt="" />
       <hr className="bookends" />
       <WeatherWidget pollInterval={60000}/>
       <hr className="bookends" />
       <SearchForm/>
     </div>
  );
};

export default Header;
