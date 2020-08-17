import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import "@testing-library/jest-dom";

import VotingBox from './VotingBox';


describe("VotingBox unit tests", () => {

    const propsCelebrity = {
        name: "John Doe",
        image: "/",
        description: "This is a description",
        likes: 10,
        dislikes: 23,
        dateAdded: {}
    }

    const mockFn = (param1,param2)=>{console.log("yeeehaaaah!")};

    it("should render the name sent in props", () => {
        // Arrange
        const renderResult = render(<VotingBox character={propsCelebrity}/>);
        // Act

        let nameElem = renderResult.container.querySelector("h1");

        // Assert
        expect(nameElem.textContent).toBe(propsCelebrity.name);

    });
    it("enable the 'vote now' btn when i click the like btn", () => {
        // Arrange
        const renderResult = render(<VotingBox character={propsCelebrity}/>);
        // Act
        let voteNow = renderResult.container.querySelector("button");
        let like = renderResult.container.querySelector(".like");

        fireEvent.click(like);

        // Assert
        expect(voteNow.disabled).toBe(false);

    });
    it("change text btn to 'vote again' when the like or dislike is sent", () => {
        // Arrange

        const renderResult = render(<VotingBox character={propsCelebrity} updateVotes={(id,obj)=>mockFn(id,obj)}/>);
        // Act
        let voteNow = renderResult.container.querySelector("button");
        let like = renderResult.container.querySelector(".like");

        fireEvent.click(like);
        fireEvent.click(voteNow);

        // Assert

        expect(voteNow.textContent).toBe("Vote Again?");

    });
    it("change the like/dislike buttons back to visible when i click voteAgain", () => {
        // Arrange

        const renderResult = render(<VotingBox character={propsCelebrity} updateVotes={(id,obj)=>mockFn(id,obj)}/>);
        // Act
        let voteNow = renderResult.container.querySelector("button");
        let like = renderResult.container.querySelector(".like");

        fireEvent.click(like);
        fireEvent.click(voteNow);
        fireEvent.click(voteNow);

        // Assert

        expect(like.style.display).toBe("flex");

    });
})
