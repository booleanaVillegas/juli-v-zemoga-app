import React from 'react';
import './VotingBox.scss';



const VotingBox = (props) => {

    let likeSelected = false;
    let btnSelected = false;
    let voting= false;
    let tempCharacter;
    let btn;

    let likePercentage = props.character.likes / (props.character.likes + props.character.dislikes) * 100;
    let dislikePercentage = props.character.dislikes / (props.character.likes + props.character.dislikes) * 100;

    const vote = (e) => {
        e.preventDefault();
        if (voting) {
            tempCharacter = props.character;
            console.log(e);
            likeSelected ? tempCharacter.likes++ : tempCharacter.dislikes++;
            btn = e.target.parentElement.querySelector("button");
            disapearLikeDislikeBtns();
            props.updateVotes(tempCharacter.id, tempCharacter);
        } else {
            btn = e.target.parentElement.parentElement.querySelector("button");
            voteAgain(e.target.querySelector("button"));
        }

    }

    const enableButton = (e) => {
        voting = true;
        btnSelected = true;
        btn = e.target.parentElement.parentElement.querySelector("button");
        btn.removeAttribute("disabled");
    }

    const voteAgain = (btnElem) => {
        btn = btnElem;
        btn.textContent = "Vote Now";
        btn.disabled= true;
        btn.parentElement
            .querySelectorAll("label").forEach((elem) => {
               elem.style.display = "flex";
            })
        voting = true;
    }
    const disapearLikeDislikeBtns = () => {
        console.log(btn);
        btn.textContent = "Vote Again?";
        voting = false;
        console.log(voting);
        btn.parentElement
            .querySelectorAll("label").forEach((elem) => {
                elem.style.display = "none";
            })
        
    }



    return (
        <li className="voting-box">
            <form onSubmit={(e) => vote(e)} style={{ backgroundImage: "url(" + props.character.image + ")" }}>
                <div className="voting-box__title-container">
                    <span className={"voting-box__summary " + ((props.character.likes > props.character.dislikes) ? "like" : "dislike")}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/juli-v-zemoga-app.appspot.com/o/like.svg?alt=media&token=89fdc956-4def-4cba-a24f-9f91e1d579cd" alt="" />
                    </span>
                    <h1>{props.character.name}</h1>
                </div>

                <div className="voting-box__other-info-container">
                    <p className="x-small"><b>{new Date(props.character.dateAdded.seconds * 1000).toString().substring(0, 15)}</b></p>
                    <p className="small">{props.character.description}</p>
                    <div className="voting-box__like-dislike-container">

                        <label className="like" htmlFor="like">
                            <img src="https://firebasestorage.googleapis.com/v0/b/juli-v-zemoga-app.appspot.com/o/like.svg?alt=media&token=89fdc956-4def-4cba-a24f-9f91e1d579cd" alt="" />
                            <input onClick={(e) => {
                                enableButton(e);
                                likeSelected = true;
                            }}
                                onFocus={(e) => {
                                    enableButton(e);
                                    likeSelected = true;
                                }} id="like" type="radio" name="opinion" value="Like" />
                        </label>

                        <label className="dislike" htmlFor="dislike">

                            <img src="https://firebasestorage.googleapis.com/v0/b/juli-v-zemoga-app.appspot.com/o/like.svg?alt=media&token=89fdc956-4def-4cba-a24f-9f91e1d579cd" alt="" />
                            <input onClick={(e) => {
                                enableButton(e);
                                likeSelected = false;
                            }}
                                onFocus={(e) => {
                                    enableButton(e);
                                    likeSelected = false;
                                }} id="dislike" type="radio" name="opinion" value="Dislike" />
                        </label>
                        <button disabled={!btnSelected} type="submit" onClick={(e) => {
                            vote(e);
                        }} className="small" value="Vote now">Vote Now</button>
                    </div>
                </div>
                <div className="votingbox__percentages-container">
                    <span className="like" style={{ width: likePercentage + "%" }}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/juli-v-zemoga-app.appspot.com/o/like.svg?alt=media&token=89fdc956-4def-4cba-a24f-9f91e1d579cd" alt="" />
                        <h3>{Math.round(likePercentage * 10) / 10 + "%"}</h3>
                    </span>
                    <span className="dislike" style={{ width: dislikePercentage + "%" }}>
                        <h3>{Math.round(dislikePercentage * 10) / 10 + "%"}</h3>
                        <img src="https://firebasestorage.googleapis.com/v0/b/juli-v-zemoga-app.appspot.com/o/like.svg?alt=media&token=89fdc956-4def-4cba-a24f-9f91e1d579cd" alt="" />
                    </span>
                </div>
            </form>
        </li>);
}

export default VotingBox;