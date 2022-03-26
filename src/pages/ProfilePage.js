import React, {useEffect, useState} from 'react';
import "./styles.css"
import UserProfile from '../components/UserProfile/UserProfile'
import { getCurrentUserData } from '../util/util';
import { auth } from '../firebase/firebase';


function ProfilePage() {
  const [userObj, setUserObj] = useState({});

  useEffect(() => {
    setTimeout(() => {
      getCurrentUserData(auth.currentUser?.uid).then((response) => {
        setUserObj(response)
      })
    },1000)

  },[])

  return (
    <div>
        <UserProfile userData={userObj} />
    </div>
  )
}

export default ProfilePage