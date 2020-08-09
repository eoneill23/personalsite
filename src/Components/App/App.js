import React from 'react';
import NavBar from '../NavBar/NavBar';
import './App.scss';

function App() {
  return (
    <main className="main">
      <NavBar />
      <section className="main-content">
        <h2 className="">Hello! I'm Eric.</h2>
          <p>
          I am a former communications and marketing professional-turned software developer fascinated by the problem-solving and continual learning aspects of programming.
          </p>
          {/* My name is Eric O'Neill and I am a software developer with experience primarily in React, AngularJS, XAML, and SQL.
        </p>
        <p>
          I am currently working at Escape Velocity Systems, LLC in Broomfield, Colorado helping to build Mobe3, an enterprise Warehouse Management Software (WMS). */}
      </section>
    </main>
  );
}

export default App;
