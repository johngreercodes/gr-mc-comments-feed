import React from "react";
import axios from "axios";

const InputForm = ({setCommentSync}) => {

    const handleSubmit = async (event) => {
        event.preventDefault(); // prevents page from reloading
        try {
            const response = await axios.post("http://localhost:3001/createComment", {
                "name": document.getElementById("name").value,
                "message": document.getElementById("comment").value 
        })
        document.getElementById("name").value = ""
        document.getElementById("comment").value = ""
        setCommentSync(false)
        } catch (error) {
            alert("Sorry, an error occurred. Open the console to view the error.")
            console.log(error)
        }
    }
    return (
        <div className="container">
        <form onSubmit={handleSubmit}>
            <label htmlFor="name"></label>
            <input type="text" id="name" name="name" placeholder="Your name" required/>
            
            <label htmlFor="comment"></label>
            <textarea id="comment" name="comment" placeholder="Your comment" required/>
            
            <button name="submit" type="submit" aria-label="Comment">Comment</button>
        </form>
        </div>
    )
}

export default InputForm;