import React from 'react';
import HomeDisplayContainer from './home_display_container'
export default (props) => {
    
  return (
    <div className="home-page">
      <div id="home-banner"> <h1> BANNER GOES HERE </h1></div>
      <HomeDisplayContainer/>
      <h2>this is the footer</h2>
    </div>
  );
};

