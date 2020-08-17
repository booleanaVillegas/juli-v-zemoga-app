import React from 'react';
import { render, queryByLabelText } from '@testing-library/react';
import "@testing-library/jest-dom";
import MainVoting from './MainVoting';

describe("MainVoting component unit testing", ()=>{

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
        const renderResult = render(<MainVoting celebrity={propsCelebrity} />);

        let nameElem = renderResult.container.querySelector("h1");

        // Assert
        expect(nameElem.textContent).toBe(propsCelebrity.name+"?");
    
    });
}
); 