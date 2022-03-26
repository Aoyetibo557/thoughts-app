import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "./firebase";
import { db, getAuth, setDoc, doc } from "./firebase";

const signUp = async(cred) => {
    await createUserWithEmailAndPassword(auth, cred.email, cred.password)
    .then((userCredentials) => {
        //signed in
        const user = userCredentials.user;
        return setDoc(doc(db, "users", user.uid), {
            email: cred.email,
            password: cred.password,
            firstname: cred.firstname,
            lastname: cred.lastname,
            username: cred.username,
            userId: user.uid
        })
        
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        return {errorCode,errorMessage};
    })
}

const signIn = async(cred) => {
    return await signInWithEmailAndPassword(auth, cred.email, cred.password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            // console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message
            return { errorCode,errorMessage};
        })
}

const logOut = () => {
    const localAuth = getAuth();
    signOut(localAuth)
        .then(() => {
            console.log("Sign Out Sucesssfull")
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            return {errorCode,errorMessage};

        })
}


export { signUp, signIn, logOut}