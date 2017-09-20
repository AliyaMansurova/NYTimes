import React from 'react';
import './Header.less';
import SearchForm from './../SearchForm';
import WeatherWidget  from '../Weather/Weather';
import Links from '../Links/Links';
export const Header = () => {
  return (
     <div className="header">
       <WeatherWidget pollInterval={60000}/>
       <img className="logo" src="/img/NY.png" alt="" />
       <SearchForm/>
       <Links />
     </div>
  );
};

export default Header;
