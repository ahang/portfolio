import React,  { Component } from 'react';
import './about.css';

class About extends Component {
  render() {
    const certificates = this.props.certificates;
    const experiences = this.props.experiences;
    const about = this.props.about;
    const skills = this.props.skills;

    const aboutMap = about.map((about, index) => {
      return <p className="block__about" key={index}>{about}</p>
      }
    );

    const certMap = certificates.map((certifcate, index) => {
      return( 
      <div className="block" key={index}>
        <h5>{certifcate.title}</h5>
        <ul className="icon-list">
          <li><i className="icon far fa-building"></i>{certifcate.company}</li>
          <li><i className="icon far fa-clock"></i>{certifcate.length}</li>
        </ul>
      </div>
      )
    });

    const expMap = experiences.map((experience, index) => {
      return (      
      <div className="block" key={index}>
        <h5>{experience.title}</h5>
        <ul className="icon-list">
          <li><i className="icon far fa-building"></i>{experience.company}</li>
          <li><i className="icon far fa-clock"></i>{experience.length}</li>
        </ul>
      </div>
      )
    });

    const skillsMap = skills.map((skill, index) => {
      return (
        <div className="block" key={index}>
          <h4>{skill.type}</h4>
          <h6>{skill.language}</h6>
          <h5>{skill.frameworks.map(framework => {return <p>{framework}</p>})}</h5>
        </div> 
      )
    })
    return(
      <div className="container">
        <div className="row">
          <div className="col">
            <i className="far fa-user"></i>
            <h3>About Me</h3>
            <div className="block">
              {aboutMap}
            </div>
          </div>
          <div className="col">
            <i className="fas fa-briefcase"></i>            
            <h3>Work Experience</h3>
            {expMap}
          </div>
          <div className="col">
            <i className="fas fa-certificate"></i>            
            <h3>Certifcations</h3>
            {certMap}
          </div>
        </div>
        <div className="row">{skillsMap}</div>
      </div>
    )
  }
}

export default About;