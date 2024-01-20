import React from "react";

const CommentCard = (props) => {

    return (
        <> {/* using a fragment here so I can style the commentCardContainer with flex */}
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