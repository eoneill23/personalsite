import React from 'react';
import NavBar from '../NavBar/NavBar';
import Content from '../Content/Content';
import content from '../../content';
import { Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <main className="main">
      <NavBar />
      <Content />
      {/* <Route exact path='/' render={() => <Content pageContent={content.homeContent} />} />
      <Route exact path='/about' render={() => <Content pageContent= {content.aboutContent} />} /> */}
      <footer className="contact-info">
        <h3 className="">Contact</h3>
        Github
        LinkedIn
        {/* TODO: Add GH/LI logos and style */}
      </footer>
    </main>
  );
}

export default App;
