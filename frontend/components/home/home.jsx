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
      <div id="home-banner"> <h1>Welcome to the MEAT ZONE</h1></div>
      <div id="home-blurb">
        With quality beef you can instantly step up the quality of your life. NEW BEEF DAILY!
      </div>
      <HomeDisplayContainer />
      <div id="home-footer">
        <h2 id="home-footer-title">--- LATEST FROM UNTITLED MEAT PROJECT ---</h2>
        <div id="home-footer-body">
          <div id="footer-body-1">
            <img className="picture-of-me" src="https://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/808/medium/Will_Sexton_1.JPG?1583210215" alt=""/>
            <span id="about-logos">
              <a href="https://www.linkedin.com/in/will-sexton-588b961a9/"> <img src="https://meat-project-seed.s3-us-west-1.amazonaws.com/linkedin_icon.png" alt="" /> </a>
              <a href="https://angel.co/u/william-sexton-1"> <img src="https://meat-project-seed.s3-us-west-1.amazonaws.com/angelist.png" alt="" /> </a>
              <a href="https://github.com/williamsexton/"><img src="https://meat-project-seed.s3-us-west-1.amazonaws.com/github-icon.png" alt="" /></a>
            </span>
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

