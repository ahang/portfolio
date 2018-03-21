import React, { Component } from 'react';
import About from './components/about';
import Header from './components/header';
import Footer from './components/footer';
import { resume } from './components/resume.json';
import './App.css';

class App extends Component {
  render() {
    console.log(resume)
    return (
      <div className="App container-fluid">
        <Header />
        <About 
          about={resume.about} 
          certificates={resume.certificates} 
          experiences={resume.experiences} 
          skills={resume.skills} />
        <Footer />
      </div>
    );
  }
}

export default App;