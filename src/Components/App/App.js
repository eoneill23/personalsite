import React from 'react';
import NavBar from '../NavBar/NavBar';
import Content from '../Content/Content';
import content from '../../content';
import { Route } from 'react-router-dom';
import './App.scss';

function App() {
  const scrollTo = (ref) => {
    console.log('REF', ref)
    //window.scrollTo({ behavior: 'smooth', top: ref.clientY - ref.target.offsetTop})
  }

  return (
    <main className="main">
      <NavBar scrollTo={scrollTo}/>
      <Content />
      {/* <Route exact path='/' render={() => <Content pageContent={content.homeContent} />} />
      <Route exact path='/about' render={() => <Content pageContent= {content.aboutContent} />} /> */}
      <footer id="contact">
        <h3>Contact</h3>
        Github
        LinkedIn
        {/* TODO: Add GH/LI logos and style */}
      </footer>
    </main>
  );
}

export default App;
