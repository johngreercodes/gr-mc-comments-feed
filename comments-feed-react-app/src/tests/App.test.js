import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "../App"

// note: react-app/package.json modified to support axios; forces to Jest to accept Axios
// https://stackoverflow.com/questions/73958968/cannot-use-import-statement-outside-a-module-with-axios

describe("Comment Feed App tests", () => {

    test.todo(
        "Assert that InputForm.jsx/handleSubmit receives a 200 response when sending a POST request to the Comments API"
    )
    test.todo(
        "Assert that App.js/fetchComments receives a 200 response when sending a GET request to the Commends API"
    )
    test.todo(
        "Assert that App.js/setCommentSync can update the commentSync state successfully"
    )
    test(
        "Smoke test that all components load on page",
        () => {
            render(<App/>);
            const appHeader = screen.getByLabelText("Comments App");
                expect(appHeader).toBeInTheDocument();
            const inputFormNameField = screen.getByLabelText("name");
                expect(inputFormNameField).toBeInTheDocument();
            const inputFormCommentField = screen.getByLabelText("comment");
                expect(inputFormCommentField).toBeInTheDocument();
            const inputFormSubmitButton = screen.getByLabelText("submit comment")
                expect(inputFormSubmitButton).toBeInTheDocument();
            const appCommentFeed = screen.getByLabelText("Comments Feed");
                expect(appCommentFeed).toBeInTheDocument();
        }
    )
    test.todo(
        "Assert that new comment is added to the feed after submitting an input"
    )
    test.todo(
        "Assert that an error occurs when submitting the input form with empty Name or Comment"
    )
})