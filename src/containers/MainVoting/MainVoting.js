import React from 'react';
import "./MainVoting.scss"

const MainVoting = (props) => {
    return (
        <section className="hero" style={{backgroundImage: "url("+props.celebrity.image+")"}}>
            <form method="put" action="">
                <div className="info-container">
                    <h3 className="space-up">What is your opinion on</h3>
                    <h1>{props.celebrity.name}?</h1>
                    <p>{props.celebrity.description}</p>
                    <a style={{ color: 'white', fontWeight: 700 }} href="wikipedia.com">See more information</a>
                    <br/>
                    <h3>What is your veredict?</h3>
                </div>
                <div className="like-dislike-containter">
                    
                    <label htmlFor="like" className="like"><img src="https://firebasestorage.googleapis.com/v0/b/juli-v-zemoga-app.appspot.com/o/like.svg?alt=media&token=89fdc956-4def-4cba-a24f-9f91e1d579cd" alt="" />
                    <input id="like" type="radio" name="opinion" value="Like" />
                    </label>
                    
                    <label htmlFor="dislike" className="dislike"><img src="https://firebasestorage.googleapis.com/v0/b/juli-v-zemoga-app.appspot.com/o/like.svg?alt=media&token=89fdc956-4def-4cba-a24f-9f91e1d579cd" alt="" />
                    <input id="dislike" type="radio" name="opinion" value="Dislike" />
                    </label>
                </div>
            </form>
        </section>
    );
}
export default MainVoting;