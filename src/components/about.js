import React,  { Component } from 'react';
import './about.css';

class About extends Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col">
            <i className="far fa-user"></i>
            <h3>About Me</h3>
            <div className="block">
              <p class="block__about">I discovered my passion for coding through conversations I had with my previous company on how our business' software was built. The logic and functionality of each piece of the system was very intriguing, and I began researching opportutnies to further my edification in software development fundamentals. I decided to try UDACITY, and after the completion of the Front-End Web Developer course I realized that I wanted more! I went through and received my certification as a Full Stack Developer through <a href="https://bootcamp.northwestern.edu/coding/">Northwestern University's Coding Bootcamp</a>.</p>
              <p className="block__about">I currently am working full time at LLT Group as a Web App Developer. I am hoping to build my experience as a developer and to give back to the open-source community</p>
            </div>
          </div>
          <div className="col">
            <i className="fas fa-briefcase"></i>            
            <h3>Work Experience</h3>
            <div className="block">
              <h5>Web Application Developer</h5>
              <ul className="icon-list">
                <li><i className="icon  far fa-building"></i>LLT Group</li>
                <li><i className="icon  far fa-clock"></i>2017 - Present</li>
              </ul>
            </div>
            <div className="block">
              <h5>QA & Forms Specialist</h5>
              <ul className="icon-list">
                <li><i className="icon far fa-building"></i>Best Case, LLC</li>
                <li><i className="icon  far fa-clock"></i>2016 - 2017</li>
              </ul>
            </div>
            <div className="block">
              <h5>Tech Support Specialist</h5>
              <ul className="icon-list">
                <li><i className="icon  far fa-building"></i>Best Case, LLC</li>
                <li><i className="icon  far fa-clock"></i>2013 - 2016</li>
              </ul>
            </div>
          </div>
          <div className="col">
            <i className="fas fa-certificate"></i>            
            <h3>Certifcations</h3>
            <div className="block">
              <h5>Full Stack Web Developer Certificate</h5>
              <ul className="icon-list">
                <li><i className="icon far fa-building"></i>Northwestern University Coding Bootcamp</li>
                <li><i className="icon far fa-clock"></i>2017</li>
              </ul>
            </div>
            <div className="block">
              <h5>Front-End Web Developer Nanodegree</h5>
              <ul className="icon-list">
                <li><i className="icon far fa-building"></i>UDACITY</li>
                <li><i className="icon far fa-clock-o"></i>2016</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;