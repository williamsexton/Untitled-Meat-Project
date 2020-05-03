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
      <HomeDisplayContainer />
      <div id="home-footer">
        <h2 id="home-footer-title">--- LATEST FROM UNTITLED MEAT PROJECT ---</h2>
        <div id="home-footer-body">
          <div id="footer-body-1">
            <h3>Progress on the Wesbite</h3>
            <p>
              It is May 1st 2020, the homepage and category/product show pages are done.
              I am moving on to develop the cart and orders systems
            </p>
            <p>
              It is May 3rd 2020, I have finished the backend, and the redux cycle for
              boxes, orders, and inclusions. I added a mobile version to the website and stumped
              out the CSS animations for the the box's parent element. today I will work on  the
              box/order/inclusion react cycle
            </p>
          </div>
          <div id="footer-body-2">
            <h3>About Me</h3>
            <p>
              My name is Will Sexton, I'm an aspiring web-designer and this is my first major
              project, I built this site from the ground up on a rails backend using 
              react and redux on the frontend to manage dynamic content. I used the S3 Amazon Web Service
              for my image hosting, and sourced a majority of my images from google image searches for pictures of meat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

