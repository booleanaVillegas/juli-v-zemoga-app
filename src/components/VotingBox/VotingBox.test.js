import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom";
import VotingBox from './VotingBox';

describe("VotingBox unit tests", ()=>{

    const propsCelebrity ={
        name: "John Doe",
        image: "/",
        description: "This is a description",
        likes: 10,
        dislikes: 23,
        dateAdded: {}
    }
    it("should render the name sent in props",()=>{
        // Arrange
        // Act
        const renderResult = render(<VotingBox character={propsCelebrity} />);

        let nameElem = renderResult.container.querySelector("h1");

        // Assert
        expect(nameElem.textContent).toBe(propsCelebrity.name);

    });
    it("enable the 'vote now' btn when i click the like btn",()=>{
        // Arrange
        // Act
        const renderResult = render(<VotingBox character={propsCelebrity} />);

        let voteNow = renderResult.container.querySelector("button");
        let like = renderResult.container.querySelector(".like");

        like.dispatchEvent(new Event("click"));

        // Assert
        expect(voteNow.disabled).toBe(false);

    });
})
