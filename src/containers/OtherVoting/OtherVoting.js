import React from 'react';
import VotingBox from "./../../components/VotingBox/VotingBox";
import "./OtherVoting.scss"

const OtherVoting = (props) => {

    return (
    <section className="other-celebrities">
    <article className="other-voting__msj">
      <div>
        <h4>Speak out. Be heard.</h4>
        <h1>Be counted.</h1>
        </div>
        <p className="small">Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. 
          It’s easy: You share your opinion, we analyze and put the data in a public report.</p>
        <button><span>X</span></button>  
      </article>  
    <h2 className="other-voting__title">Votes</h2>
    <ul className="celebrities-container">
      {props.celebrities.map((celebrity) => {
        return <VotingBox updateVotes={(id,obj)=>props.updateVotes(id,obj)} key={celebrity.id} 
        character={celebrity}
        />
      })}
    </ul>
    <article className="other-voting__msj__2">
        <h4>Is there anyone else you would want us to add?</h4>
        <button className="black-normal">Submit a name</button>  
      </article> 
  </section>
  );
}
 
export default OtherVoting;