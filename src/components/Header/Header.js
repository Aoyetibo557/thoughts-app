import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Header.css";
import { VscClose } from 'react-icons/vsc';
import { CgMenuLeft } from 'react-icons/cg';
import { GrHomeRounded } from 'react-icons/gr';
import { BsCalendarWeek, BsLaptopFill } from 'react-icons/bs';
import { RiDraftLine } from 'react-icons/ri';
import { auth } from '../../firebase/firebase';
import ProfilePicture from '../../images/myPicture.jfif';
import Profile from "../Profile/Profile";
import Loading from '../Loading/Loading';
import { IoAddSharp, IoGameController, IoSettingsOutline } from 'react-icons/io5';
import { FaLightbulb } from 'react-icons/fa';
import { logOut } from '../../firebase/auth';
import { MdLogout } from 'react-icons/md';

function Header({name}) {
  const [isOpen, setIsOpen] = useState(false);
  let navigate = useNavigate();
  const handleLogOut =() =>{
      logOut()
      navigate("/")
    
  }

  return (
    <header className='header'>
        <div className='hamburger'> 
          {isOpen ? <VscClose className='hamburger-icon' onClick={() => setIsOpen(false)} /> : <CgMenuLeft className='hamburger-icon' onClick={() => setIsOpen(true)} />}
        </div>

        <Link className='header__logo' to="/app/feed">Mindhub</Link>

        <nav className={!isOpen ? 'header__nav' : 'header__nav active'}> 
          <div className='linkDiv'>
            {
              auth.currentUser ? 
              <Profile avatar={ProfilePicture} name={name?.length === 0 ? <Loading size={"small"} /> : name } />
              :
              <Loading size={"small"} />
            }

            <Link title='Create New Feed' to="/app/createfeed">
              <IoAddSharp className='header__icon' />  
            </Link>

            <Link onClick={() => setIsOpen(false)} title='settings' to="/app/settings">
              <IoSettingsOutline title='Settings' className='header__icon' />
            </Link>
          </div>

          <Link onClick={() => setIsOpen(false)} className='header__link' to="/app/feed">
            <GrHomeRounded className='linkDiv' />
            Feed
          </Link>

          <Link onClick={() => setIsOpen(false)} className='header__link' to="/app/events">
            <BsCalendarWeek className='linkDiv' />
            Events
          </Link>

          <Link onClick={() => setIsOpen(false)} className='header__link' to="/app/drafts">
            <RiDraftLine className='linkDiv' />
            Drafts
          </Link>
         
          <Link onClick={() => setIsOpen(false)} to="/app/community/ga" className='header__link'>
            <BsLaptopFill className='linkDiv' /> General Advice
          </Link>

          <Link onClick={() => setIsOpen(false)} to="/app/community/gz" className='header__link'>
            <IoGameController className='linkDiv' /> Game Zone
          </Link>
            
          <Link onClick={() => setIsOpen(false)} to="/app/community/ls" className='header__link'>
            <RiDraftLine className='linkDiv' /> Lifestyle
          </Link>

          <Link onClick={() => setIsOpen(false)} to="/app/community/ideas" className='header__link'>
            <FaLightbulb className='linkDiv' /> Ideas
          </Link>

          <button onClick={handleLogOut} className=' header__link header__button'>
            <MdLogout className='header__icon' />
            LogOut
          </button>


        </nav>
    </header>
  )
}

export default Header