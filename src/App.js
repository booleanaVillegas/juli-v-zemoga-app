import React from 'react';
import './App.scss';
import VotingBox from './components/VotingBox';

function App() {
  let celebrities = [
    {name: "Kanye"},
    {name: "Kim"},
    {name: "Taylor"},
  ]

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="/">Past trials</a></li>
            <li><a href="/">How it works?</a></li>
            <li><a href="/">Log-In / Sign-Up</a></li>
          </ul>
        </nav>
        <form method="put" action="">
          <fieldset>
            <legend>What is your opinion on Pope Francis?</legend>
            <input id="like" type="radio" name="opinion" value="Like"/>
            <label className="like-dislike-icon" htmlFor="like">L</label>
            <input id="dislike" type="radio" name="opinion" value="Dislike"/>
            <label className="like-dislike-icon" htmlFor="dislike">D</label>
            <input type="submit" value="Vote now"/>
          </fieldset>
        </form>
      </header>
      <h2>Previous polls</h2>
      <ul>
      {celebrities.map((celebrity)=>{
        return <VotingBox key={celebrity.name} name={celebrity.name}/>
      })}
      </ul>
    </div>
  );
}

export default App;
