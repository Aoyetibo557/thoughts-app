import React, {useState, useEffect} from 'react';
import { updateUserProfile } from '../../util/util';
import "./SettingComp.css";
import { IoMdClose } from "react-icons/io";
import AOS from "aos"
import "aos/dist/aos.css";
import ProfilepageSkeleton from '../Skeleton/ProfilepageSkeleton';



function SettingComp({userData}) {

    // updatefields
    const [newUsername, setNewUsername] = useState("");
    const [newBio, setNewBio] = useState("");
    const [newJobTitle, setNewJobTitle] = useState("");
    const [altEmail, setAltEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [succState, setSuccState] = useState(false)

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing:"ease-in"
        })
    },[])

    useEffect(() => {
        setTimeout(() => {
            setNewUsername(userData?.username);
            setNewBio(userData?.bio);
            setNewJobTitle(userData?.profession);
        },2500)

    },[userData?.bio, userData?.profession, userData?.username])


    const compareData = (object1)=>{
        return object1.username === newUsername && object1.bio === newBio && object1.profession === newJobTitle ? false : true;
    }

    const updateProfile = (ev) => {
        ev.preventDefault();
        const profileData ={
            username: newUsername,
            bio: newBio,
            profession: newJobTitle,
            altEmail: altEmail,
        }

        if(!compareData(userData)){
            setMsg("Update Rejected!. No Change was detected");
            setSuccState(false);
        }
        else{
            updateUserProfile(profileData, userData.userId).then((res) => {
                setMsg("Update Sucessful!", res);
                setSuccState(true)
            }).catch((error) =>{
                const errCode = error.code;
                const errMsg = error.message;
                setMsg(errCode, errMsg);
            })
            
        }


    }

  return newUsername?.length > 0 || newBio?.length > 0 ? (
    <div className='settingcomp'>

       {msg && (
            <div data-aos="fade-left" className={!succState ? 'settingcomp__error': 'settingcomp__success'}>
                <p>
                    {msg && msg}
                </p>

                <button onClick={() => setMsg("")} className='error__button'>
                    <IoMdClose className='error__icon' />
                </button>
            </div>
       )}
        <form className='settingcomp__form' onSubmit={updateProfile}> 
            <div className='settingcomp__top'>
                <img className='settingcomp__img' src={`https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${userData?.firstname + " " + userData?.lastname}`} alt={userData?.email} />
                <div>
                    <h4>Profile</h4>
                    <h5>{userData?.firstname} {userData?.lastname}</h5>
                </div>
            </div>

            <div className='settingcomp__form__div'>
                <p>Username</p>
                <input className='settingcomp__input' type="text" name="username" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
            </div>

            <div className='settingcomp__form__div'>
                <div>
                    <h4>Your bio</h4>
                    <p>Write a short introuction.</p>
                </div>
                <textarea className='settingcomp__textarea' type="text" name="bio" value={newBio} onChange={(e) => setNewBio(e.target.value)} />
            </div>

            <div className='settingcomp__form__div'>
                <div>
                    <h4>Job title</h4>
                    <p>Enter your current job title if you'd like</p>
                </div>
                <input className='settingcomp__input' type="text" name="username" value={newJobTitle} onChange={(e) => setNewJobTitle(e.target.value)} />
            </div>

            <div className='settingcomp__form__div'>
                <div>
                    <h4>Alternative contact email</h4>
                    <p>Enter an alternative email if you'd like </p>
                </div>
                <input className='settingcomp__input' type="text" name="username" value={altEmail} onChange={(e) => setAltEmail(e.target.value)} />
            </div>

            <div className='settingcomp__button__div'>
                <button type='submit' className='settingcomp__button'>Update</button>
            </div>


        </form>
    </div>
  ): <ProfilepageSkeleton />
}

export default SettingComp