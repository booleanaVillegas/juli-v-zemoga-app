import React from 'react';
import './App.scss';
import VotingBox from './components/VotingBox/VotingBox';

function App() {
  let celebrities = [
    { name: "Kanye" },
    { name: "Kim" },
    { name: "Taylor" },
    { name: "Malala" },
  ]

  return (
    <div className="App">
      <div className="hero">
        <header>
          <span>
            <a href="/">logo</a>
          </span>
          <nav className="nav-container">
            <ul>
              <li><a href="/">Past trials</a></li>
              <li><a href="/">How it works?</a></li>
              <li><a href="/">Log-In / Sign-Up</a></li>
            </ul>
          </nav>
        </header>
        <form method="put" action="">
          <fieldset>
            <legend>What is your opinion on Pope Francis?</legend>
            <input id="like" type="radio" name="opinion" value="Like" />
            <label className="like-dislike-icon" htmlFor="like">L</label>
            <input id="dislike" type="radio" name="opinion" value="Dislike" />
            <label className="like-dislike-icon" htmlFor="dislike">D</label>
            <input type="submit" value="Vote now" />
          </fieldset>
        </form>
      </div>
      <main>
        <section>
          <h2>Votes</h2>
          <ul>
            {celebrities.map((celebrity) => {
              return <VotingBox key={celebrity.name} name={celebrity.name} />
            })}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
