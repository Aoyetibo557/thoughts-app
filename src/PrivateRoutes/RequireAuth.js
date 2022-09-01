import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Navigate, useNavigate } from 'react-router-dom';
import { auth, getAuth, onAuthStateChanged } from '../firebase/firebase';

function RequireAuth({ children, redirectTo}) {
    let isLoggedIn = getAuth();
    let navigate = useNavigate();
   
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                // console.log(user)
                const uid = user.uid;
            }else{
                console.log("Not Logged IN");
                navigate(redirectTo,{replace: true})
            }
        })
    },[isLoggedIn, redirectTo, navigate])
    return isLoggedIn ? children :<Navigate to= {redirectTo} />
}

export default RequireAuth

RequireAuth.propTypes = {
  children: PropTypes.array.isRequired,
};