import React from 'react';
import { Link } from 'react-router-dom';
import "./Profile.css";

function Profile({name}) {
  return (
    <Link to="/app/profile" className='profile'>
        <img className='profile__avatar' src={`https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${name}`} alt={name} />
        <h4 className='profile__name'>{name}</h4>
    </Link>
  )
}

export default Profile