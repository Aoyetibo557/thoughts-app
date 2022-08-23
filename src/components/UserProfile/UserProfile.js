import React from 'react';
import "./UserProfile.css";
import { RiLockPasswordLine} from "react-icons/ri";
import MyBoard from '../../pages/MyBoard';
import Loading from '../Loading/Loading';

// avatar,name, prononuns,profession, email, instagramlink,twitterlink,facebooklink, bio

function UserProfile({userData }) {
  return (
    <>
        <div className='userprofile'>
            <section className='userprofile__container'>
                <div className='userprofile__div'>
                    {userData.firstname ?
                        (
                            <img className='userprofile__img'  src={`https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${userData.firstname+" "+userData.lastname}`} alt={userData.name} />
                        ):(
                            <Loading />
                        )
                    }
                    <h4 className='userprofile__name'>{userData.firstname} {userData.lastname}</h4>
                    <p className='userprofile__p'>{userData.prononuns}</p>
                    {!userData.profession ? "" : <p className='userprofile__p'>{userData.profession}</p>}
                </div>

                {userData?.instagramlink?.length > 0 || userData.facebooklink?.lenngth > 0 || userData?.twitterlink?.length > 0 ? (
                    <div className='userprofile__div '>
                        <h4> Social Media Accounts</h4>
                        <div className='social__links'>
                            <p> {userData.instagramlink && <a aria-disabled={userData.instagramlink ? "true" : "false"} href={userData.instagramlink} target="_blank" rel="noreferrer">Instagram</a> }</p>
                            <p> {userData.twitterlink && <a aria-disabled={userData.twitterlink ? "true" : "false"} href={userData.twitterlink} target="_blank" rel="noreferrer" >Twitter</a> } </p>
                            <p> {userData.facebooklink && <a aria-disabled={userData.facebooklink ? "true" : "false"} href={userData.facebooklink} target="_blank" rel="noreferrer">Facebook</a> } </p>
                        </div>

                    </div>
                ):""}

                <div className='userprofile__div'>
                    <h4>Contact Information</h4>
                    <div className='userprofile__info__div'>
                        <RiLockPasswordLine className='userprofile__icon' />
                        <p>Only close friends can see your email address and phone number. To update this contact information, go to <b>Account Setting</b></p>
                    </div>

                    <p>{userData.email} (Primary) </p>
                </div>

                <div className='userprofile__div'>
                    <h4>About</h4>
                    <p>
                        {userData.bio}
                    </p>
                </div>

                <div className='userprofile__div'>
                    <h4>Posts</h4>
                    <p>These are the post from this user's account!</p>
                    {/* <MyBoard /> */}
                </div>
            </section>
        </div>
    </>
  )
}

export default UserProfile