import React, {useState, useEffect} from 'react';
import "./commentstyles.css";
import Comment from './Comment';
import CommentForm from './CommentForm';
import { commentListner, createNewComment, deleteSelectedComment, getComments, updateSelectedComment } from '../../util/util';



function Comments({postId, currentUserId}) {
    const [comments, setComments] = useState([]);
    const [error, setError] = useState("");
    const [activeComment, setActiveComment] = useState(null);


    useEffect(() => {
        getComments(postId).then((data) => {
            setComments(data);
        }) 
    },[])


    //uses parent id to find all related replies
    const getReplies = (commentId) => {
        return comments.filter(allComments => allComments?.parentId === commentId).sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    }

    // for replies parentId is mandatory
    const addComment = (text, parentId) => {
        // new comment created and added to the array state
        createNewComment(text, parentId, postId).then(comment => {
            setComments([comment, ...comments])
            setActiveComment(null)
        })
    }

    const updateComment = (input, commentId) => {
        updateSelectedComment(input, commentId).then(() => {
            const updatedComments = comments.map(comment => {
                if(comment.id === commentId){
                    return {...comment, body: input};
                }

                return comment
            });
            setComments(updatedComments);
            setActiveComment(null); //this is to get rid of the form after button click
        })
    }


    
    /**
     * This uses a function from util to delete a specific comment using both the postId and Comment Id to find it in the 
     * comments collection
     */
    const deleteComment = (commentId, postId) => {
        deleteSelectedComment(commentId, postId).then(() => {
            const updatedComments = comments.filter(comment => comment.id !== commentId);
            setComments(updatedComments);
            setActiveComment(null); //this is to get rid of the form after button click
        }).catch(err => {
            setError(err.message);
        }).finally(() => {
            setError("");
        } )
    }

    
  return (
    <div className='comments'>
        <div>
            <CommentForm submitLabel="comment" handleSubmit={addComment}  />
        </div>
        <div className='comments__container'>
            {comments.filter(comment => comment?.parentId === "null").sort((a, b) => new Date(a.createdAt.seconds) - new Date(b.createdAt.seconds)).map((rtComment) => (
                <Comment 
                    key={rtComment.id}
                    comment={rtComment}
                    replies={getReplies(rtComment.id)}
                    currentUserId={currentUserId}
                    postId={postId}
                    activeComment={activeComment}
                    setActiveComment = {setActiveComment}
                    addComment={addComment}
                    updateComment={updateComment}
                    deleteComment={() => deleteComment(rtComment.id, rtComment.postId)}
                />
            ))}

           
        </div>
        
    </div>
  )
}

export default Comments