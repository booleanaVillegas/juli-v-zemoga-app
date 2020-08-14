import React from 'react';
import './VotingBox.scss'

const VotingBox = (props) => {
    return ( 
    <li className="voting-box">
        <form method="put" action="">
          <fieldset>
                <legend>What is your opinion on {props.name}</legend>
            <input id="like" type="radio" name="opinion" value="Like"/>
            <label htmlFor="like"></label>
            <input id="dislike" type="radio" name="opinion" value="Dislike"/>
            <label htmlFor="dislike"></label>
            <input type="submit" value="Vote now"/>
          </fieldset>
        </form>
    </li> );
}
 
export default VotingBox;