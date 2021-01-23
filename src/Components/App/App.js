import React from 'react';
import NavBar from '../NavBar/NavBar';
import Content from '../Content/Content';
import ghLogo from '../../images/github.svg';
import liLogo from '../../images/linkedin.svg';
import resume from '../../images/resume.svg';
import './App.scss';

function App() {

  return (
    <main className="main">
      <NavBar />
      <Content />
      {/* <Route exact path='/' render={() => <Content pageContent={content.homeContent} />} />
      <Route exact path='/about' render={() => <Content pageContent= {content.aboutContent} />} /> */}
      <footer className="footer-contact" id="contact">
        <h3>Contact</h3>
        <img src={ghLogo} className="contact-img"></img>
        <img src={liLogo} className="contact-img"></img>
        <img src={resume} className="contact-img"></img>
      </footer>
    </main>
  );
}

export default App;
