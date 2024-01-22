import React from "react";

const CommentCard = (props) => {

    return (
        <> {/* using a fragment here to help save space as comments scale in number */}
            {props.comments.map((comment)=>(
                <div key={comment.id} id="commentCard" className="container">
                    <div className="commentCardMessage">{comment.message}</div>
                    <div className="commentCardAuthor">@{comment.name}</div>
                    <div className="commentCardTimestamp">{comment.created} UTC</div>
                </div>
            ))}   
        </>
    )
}

export default CommentCard;