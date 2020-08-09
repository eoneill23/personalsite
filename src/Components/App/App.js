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
      <Route exact path='/' render={() => <Content pageContent={content.homeContent} />} />
    </main>
  );
}

export default App;
