import React,  { Component } from 'react';
import './about.css';

class About extends Component {
  render() {
    const certificates = [
      {
        title: 'Full Stack Web Developer Certificate',
        company: 'Northwestern Coding Bootcamp',
        length: '2017'
      },
      {
        title: 'Front-End Web Developer Nanodegree',
        company: 'UDACITY',
        length: '2016'
      }
    ];
    const experiences = [
      {
        title: 'Web Application Developer',
        company: 'LLT Group',
        length: '2017 - Present'
      },
      {
        title: 'QA & Forms Specialist',
        company: 'Best Case, LLC',
        length: '2016 - 2017',
      },
      {
        title: 'Tech Support Specialist',
        company: 'Best Case, LLC',
        length: '2013 - 2016'
      }
    ];
    const certMap = certificates.map(certifcate => {
      return <div className="block">
        <h5>{ certifcate.title }</h5>
        <ul className="icon-list">
          <li><i className="icon far fa-building"></i>{ certifcate.company }</li>
          <li><i className="icon far fa-clock"></i>{ certifcate.length }</li>
        </ul>
      </div>
    });
    const expMap = experiences.map(experience => {
      return <div className="block">
        <h5>{ experience.title }</h5>
        <ul className="icon-list">
          <li><i className="icon far fa-building"></i>{ experience.company }</li>
          <li><i className="icon far fa-clock"></i>{ experience.length }</li>
        </ul>
      </div>
    })
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
            { expMap }
          </div>
          <div className="col">
            <i className="fas fa-certificate"></i>            
            <h3>Certifcations</h3>
            { certMap }
          </div>
        </div>
      </div>
    )
  }
}

export default About;