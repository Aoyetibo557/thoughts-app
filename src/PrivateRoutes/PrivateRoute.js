import { onAuthStateChanged } from 'firebase/auth';
import React, {useState, useEffect} from 'react'
import { Navigate, Redirect, Route } from 'react-router-dom';
import { auth } from '../firebase/firebase';

// This is for the router-dom v4/v5 version

function PrivateRoute({component: Component, ...rest}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        loggedIn();
    },[])

    const loggedIn = () => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setIsLoggedIn(true)
            }else{
                setIsLoggedIn(false);
            }
        })
    }
  return (
    <Route
        {...rest}
        render={props => 
            isLoggedIn ? (
                <Component {...props} />
            ):(
                // <Redirect to={{ pathname: '/', state: {from: props.location}}} />
                <Navigate to="/" />
            )
        }
    />
  )
}

export default PrivateRoute