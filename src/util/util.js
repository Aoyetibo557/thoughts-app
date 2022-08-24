import { db, addDoc, collection, setDoc, doc, query, orderBy, limit, getDocs, where, auth,increment, updateDoc,onSnapshot, deleteField, deleteDoc } from "../firebase/firebase"

const AUTHUSER = auth.currentUser?.uid;

const createPost = async(feedContent, feedLocation) => {
    
    try{
        const postRef = doc(collection(db, 'feeds'));
        const uniqueId = postRef.id;

        const postDetails = {
            author: auth.currentUser?.email,
            comments: 0,
            content: feedContent,
            date: new Date(),
            likes:0,
            location: feedLocation,
            postId: uniqueId,
            userId: auth.currentUser.uid,
        }
        const newCard =  await setDoc(postRef, postDetails);
        return newCard
    }catch(error) {
        return error.message
    }    
}



/**
 * This uses the user id to query the card's collection and find a match with the user id
 * @param {*} userId  - Logged in user/Account 
 * @returns object of both the 
 */
const getUsersCard = async (userId) => {
    // console.clear();
    const cardsRef = collection(db , "cards");
    const cardsQuery = query(cardsRef, where("userId", "==", userId))
    const querySnapShot = await getDocs(cardsQuery);
    var cardObj=[]
    
    await querySnapShot.forEach((doc) => {
        cardObj.push(doc.data())
    })

    return cardObj
}

const createNewComment = async(text, parentId, postId) => {
    try{
        const newCommentRef = doc(collection(db, 'comments'));

        const commentDetails = {
            avatar:"",
            id:newCommentRef.id,
            parentId: "null",
            postId: postId,
            userId: auth.currentUser.uid,
            author: auth.currentUser.email,
            comment: text,
            createdAt: new Date()

        }

        try{
            const currentPostRef = doc(db, "feeds", postId);
            await updateDoc(currentPostRef, {
                comments: increment(1)
            })
        }catch(updateError){
            const updateErrorCode = updateError.code;
            const updateErrorMsg = updateError.message;

            return {updateErrorCode, updateErrorMsg}
        }

       
     
        return await setDoc(newCommentRef, commentDetails);
    }catch(error) {
        const errorCode = error.code;
        const errorMesg = error.message;
        return { errorCode, errorMesg};
    }
}


const getComments = async(postId) => {
    // console.clear();
    const commentsRef = collection(db, "comments");

    const commentsQuery = query(commentsRef, where("postId", "==", postId));        
    const querySnapShot =  getDocs(commentsQuery);
    var commentObj =[];

    (await querySnapShot).forEach((doc) => {
        commentObj.push(doc.data())
    })
    
    return commentObj;
}

const deleteSelectedComment = async(commentId, postId) => {
    const commentRef = doc(db, "comments", commentId);

    const postRef = doc(db, "feeds", postId);
    // if(window.confirm('Delete Comment?')){
        updateDoc(postRef,{
            comments:increment(-1)
        })

        return await deleteDoc(commentRef)
    // }
    
}


const getFeed = async() => {
    const feedRef = collection(db, "feeds")
    const querySnapShot = await getDocs(feedRef);
    var feedsObj = [];

    await querySnapShot.forEach((doc) => (
        feedsObj.push(doc.data())
    ))

    // onSnapshot(querySnapShot, (snap)=>{
    //     snap.docChanges().forEach((temp) =>{
    //         console.log(temp.type)
    //     })
    // },
    // (error) => {   
    //     console.log("Err", error)
    // })

    // unsub();

    return feedsObj
}



const updateSelectedComment = async(newInput, commentId) => {
    try{
        const updateCommentRef = doc(db, "comments",commentId);
        await updateDoc(updateCommentRef, {
            comment: newInput
        })
    }catch(error){
        const errorCode = error.code;
        const errorMsg = error.message;
        return {errorCode, errorMsg};
    }
}


const commentListner = async (postId) =>{
    const currentPostRef = await collection(db, "comments");
    const listnerQuery = query(currentPostRef, where("postId", "==", postId));
    const unSub = onSnapshot(listnerQuery, (snap) => {
       snap.docChanges().forEach((change) => {
           if(change.type === "added"){
               getComments(postId)
           }
           if(change.type === "modified"){
               getComments(postId);
           }
           if(change.type === "removed") {
               getComments(postId)
           }
       })
    })
    unSub();
}


const getCurrentUserData = async(currentUID) => {
    const userRef = collection(db, "users");
    const userQuery = query(userRef, where("userId", "==", currentUID ))
    const userSnapshot =  getDocs(userQuery);
    const userdata = {avatar:"", email:"", userId:"", username:"", firstname:"", lastname:"", userId:"", prononuns:"", profession:"", twitterlink:"", instagramlink:"", facebooklink:"", bio:"" };

    (await userSnapshot).forEach((doc) => {
        userdata.email= doc.data().email;
        userdata.firstname= doc.data().firstname;
        userdata.lastname= doc.data().lastname;
        userdata.prononuns= doc.data().prononuns;
        userdata.username= doc.data().username;
        userdata.bio= doc.data().bio;
        userdata.instagramlink= doc.data().instagramlink;
        userdata.facebooklink= doc.data().facebooklink;
        userdata.twitterlink= doc.data().twitterlink;
        userdata.profession= doc.data().profession;
        userdata.userId = doc.data().userId
    })
    
    return userdata;
}


const getAllEvents = async() => {
    const eventsRef = collection(db, "events");
    const eventQuerySnapshot = await getDocs(eventsRef)
    var allEventsArr = [];

    await eventQuerySnapshot.forEach((doc) => {
        allEventsArr.push(doc.data())
    })

    return allEventsArr;
}


const createNewMessage = async(msgGroup, uid, msg, currentUser ) => {
    try{
        const newMessageRef = collection(db, `${msgGroup}`);
        const newMsgRef = await addDoc(newMessageRef, {
            message: msg,
            uid: auth.currentUser.uid || uid,
            createdAt: new Date(),
            author:currentUser,
        })
        return newMsgRef.id
    }catch(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return { errorCode, errorMessage}
    }   
}

const getGroupMessage = async (chatGroup) => {
    const messageRef = collection(db, chatGroup);
    const messageQuery = query(messageRef, orderBy("createdAt"), limit(25)); 
    const querySnapShot = await getDocs(messageQuery);
    var groupMsg = [];
    // const unsub = onSnapshot(messageRef, (snap) => {
    //     const obj =[]
    //     snap.forEach((doc) => {
    //         console.log(doc.data())
    //         obj.push(doc.data().message)
    //     })

    //     console.log(obj)
    // })

    // unsub();


    querySnapShot.forEach((doc) => {
        groupMsg.push(doc.data())
    })

    return groupMsg;
}


const updateUserProfile =async(newProfileDetail, profileUID)=> {
   try{
        const userRef = doc(db, "users", profileUID)

        await updateDoc(userRef, {
            username: newProfileDetail.username,
            bio:newProfileDetail.bio,
            profession: newProfileDetail.profession,
            altEmail: newProfileDetail.altEmail
        })

        return "Profile Updated Sucessfully"
   }catch(error){
       const errCode = error.code
       const errMsg = error.message

       return {errCode,errMsg}
   }


}

export { 
        createPost,
        commentListner, 
        createNewComment, 
        getUsersCard, 
        getComments, 
        getFeed, 
        getCurrentUserData, 
        deleteSelectedComment, 
        updateSelectedComment,
        AUTHUSER,
        getAllEvents,
        createNewMessage,
        getGroupMessage,
        updateUserProfile
    }
