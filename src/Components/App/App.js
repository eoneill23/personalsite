import React from 'react';
import NavBar from '../NavBar/NavBar';
import Content from '../Content/Content';
import ghLogo from '../../assets/github.svg';
import liLogo from '../../assets/linkedin.svg';
import resume from '../../assets/resume.svg';
import resumePDF from '../../assets/Eric_ONeill_Resume.pdf'
import './App.scss';

function App() {

  return (
    <main className="main">
      <NavBar />
      <Content />
      <footer className="footer-contact" id="contact">
        <h3 className="contact-header">Contact</h3>
        <a
          href="https://github.com/eoneill23"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="A small vector of the GitHub logo. It is Linked to Eric O'Neill's GitHub profile."
            className="contact-img"
            src={ghLogo}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/eoneill23"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="A small vector of the LinkedIn logo. It is linked to Eric O'Neill's LinkedIn profile."
            className="contact-img"
            src={liLogo}
          />
        </a>
        <a href={resumePDF} target="_blank" rel="noopener noreferrer">
          <img
            alt="A small vector of a resume. It is linked to a PDF version of Eric O'Neill's resume."
            className="contact-img"
            color={"#ff0000"}
            src={resume}
          />
        </a>
      </footer>
    </main>
  );
}

export default App;
