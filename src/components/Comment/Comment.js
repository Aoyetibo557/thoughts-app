import React from 'react';
import "./commentstyles.css";
import { FaRegEdit, FaReply } from "react-icons/fa";
import { FiDelete } from "react-icons/fi";
import { deleteSelectedComment } from '../../util/util';
import CommentForm from './CommentForm';

// the parentId is the same as the comment id of a diffrent comment that would malke it a sub comment of that comment

function Comment({comment, replies, currentUserId, addComment,deleteComment,  postId, activeComment, setActiveComment, updateComment,  parentId=null}) {
    // These are to make sure a user can only edit the comments the logged in user created
    const canReply = Boolean(currentUserId);
    const canEdit = currentUserId === comment.userId;
    const canDelete = currentUserId === comment.userId;

    // console.log(currentUserId, comment.userId, comment.id)

    //Conditional statement to check if the user is either replying or editing based on the click event
    const isReplying = activeComment && activeComment.type === "replying" && activeComment.id === comment.id
    const isEditing = activeComment && activeComment.type === "editing" && activeComment.id === comment.id
    
    // this handles the parentId portion, checks is the parentId  == null, if so it is a root comment otherwise pass in the comment id
    const replyId = parentId ? parentId : comment.id;

    /**
     * This uses a function from util to delete a specific comment using both the postId and Comment Id to find it in the 
     * comments collection
     */
    // const deleteComment = () => {
    //     deleteSelectedComment(comment.id, postId).then((response) => {
    //         // alert("Comment Deleted")
    //         // console.log(response)
    //     }) 
    // }

  return (
    <div className='comment'>
       <div className='comment__container'>
            <div>
                
                <img className='comment__img' src={ !comment.avatar ? `https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${comment.author}` : comment.avatar} alt={comment.avatar} />
            </div>

            <div className='comment__info'>
                <h4>{comment.author}</h4>
                <p>{comment.createdAt.toDate().toDateString() + ' , ' + new Date(comment.createdAt.seconds  * 1000).toLocaleTimeString()}</p>

            </div>
       </div>
       {!isEditing && (
           <div className='comment__body'>
                <p>{comment.comment}</p>
            </div>
       )}

       {isEditing && (
            <CommentForm 
                submitLabel="Update" 
                hasConcelButton 
                handleCancel ={() => setActiveComment(null)} 
                initialText={comment.comment} 
                handleSubmit={(text) => updateComment(text, comment.id)} 
            />
       )}
       
       <div className='comment__actions'>
            {canReply && (
                <div>
                    <FaReply />
                    <button type='submit' className='comment__button' 
                        onClick={() => setActiveComment({id: comment.id, type:"replying"})}
                    >
                            reply
                    </button>
                </div>
            )}

            {canEdit && (
                <div>
                    <FaRegEdit />
                    <button type='submit' className='comment__button'
                        onClick={() => setActiveComment({id: comment.id, type:"editing"}) }
                    >edit</button>
                </div>
            )}

            {canDelete && (
                <div>
                    <FiDelete />
                    <button type='submit' className='comment__button' onClick={deleteComment} >delete</button>
                </div>
            )}
       </div>

                {/* This to render the comment form if the reply condition above is met and add a new comment using the input and 
                    comment parentId
                */}
        {isReplying && (
            <CommentForm submitLabel="Reply" handleSubmit={(text) => addComment(text, replyId)} />
        )}

        

        {replies.length > 0 && (
            <div className='comment__replies'>
                {replies.map((reply) => (
                    <Comment 
                        comment={reply} 
                        key={reply.id} 
                        replies={[]} 
                        currentUserId={currentUserId} 
                        addComment={addComment} 
                        activeComment={activeComment} 
                        setActiveComment={setActiveComment} 
                        parentId={comment.id} 
                        updateComment={updateComment}
                    />
                ))}
            </div>
        )}

    </div>
  )
}

export default Comment