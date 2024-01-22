import {render, screen} from "@testing-library/react";
import App from "../App"
import AppName from "../components/AppName";
import CommentCard from "../components/CommentCard"
import InputForm from "../components/InputForm"

// note: react-app/package.json modified to support axios; forces to Jest to accept Axios despite ECMA/CommonJS discrepancy
// https://stackoverflow.com/questions/73958968/cannot-use-import-statement-outside-a-module-with-axios

describe("Comment Feed App", () => {

    test(
        "displays page with title, form and comment container (container may be empty)",
        () => {
            render(<App/>);
            console.log(screen)
        }
    )
    test.todo("Submits a new comment and validates new comment was added to feed")
    test.todo("Triggers an error after submitting an empty comment")

})