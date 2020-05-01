import React from 'react';
import HomeDisplayContainer from './home_display_container'
import {Link} from 'react-router-dom';

export default (props) => {
    
  return (
    <div className="home-page">
      <div id="home-category-links">
        <Link to="/categories/1"> Luxury Cuts</Link>
        <Link to={`/categories/2`}> Kitchen Essentials</Link>
        <Link to={`/categories/3`}> Grass Fed</Link>
      </div>
      <div id="home-banner"> <h1>Banner Goes Here</h1></div>
      <div id="home-blurb">
        With quality beef you can instantly step up the quality of your life. NEW BEEF DAILY!
      </div>
      <HomeDisplayContainer/>
      <h2>this is the footer</h2>
    </div>
  );
};

