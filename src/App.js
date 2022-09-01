import React, {useEffect, useState} from "react"
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import ProfilePage from "./pages/ProfilePage";
import RequireAuth from './PrivateRoutes/RequireAuth';
import NewFeed from './pages/NewFeed';
import EventsPage from './pages/EventsPage';
import SettingsPage from "./pages/SettingsPage";
import Sidebar from './components/Sidebar/Sidebar';
import { getCurrentUserData } from "./util/util";
import { auth } from "./firebase/firebase";
import ChatRoom from "./pages/ChatRoom";
import DraftsPage from "./pages/DraftsPage";
import Header from "./components/Header/Header";


function App() {
  const [user, setUser] = useState({})
  const [name, setName] = useState("");

  useEffect(() => {
    setTimeout(() => {
      getCurrentUserData(auth.currentUser.uid).then((response) => {
        setName(response.firstname + " " + response.lastname)
        setUser(response)
      })
    },3000)
    return () => {
      setName("")
      setUser({})
    }
  }, [])
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />

          <Route path='/signup' element={<Signup />} />

          <Route
            path='/app/createfeed' 
            element={
              <RequireAuth redirectTo={"/"}>
                <Header name={name} />
                <Sidebar authedUsersName={name} />
                <NewFeed />
              </RequireAuth>
            } 
          />
         
          <Route 
            path='/app/feed'
            element={
              <RequireAuth redirectTo={"/"}>
                <Sidebar authedUsersName={name} />
               <Dashboard name={name} />  
              </RequireAuth>
            }
          />

          <Route 
            path='/app/events'
            element={
              <RequireAuth redirectTo={"/"}>
                <Header name={name} />
                <Sidebar authedUsersName={name} />
                <EventsPage />
              </RequireAuth>
            }
          />

          <Route 
            path='/app/drafts'
            element={
              <RequireAuth redirectTo={"/"}>
                <Header name={name} />
                <Sidebar authedUsersName={name} />
                <DraftsPage />
              </RequireAuth>
            }
          />

          {/* <Route 
            path='/app/inbox'
            element={
              <RequireAuth redirectTo={"/"}>
                <Sidebar authedUsersName={name} />
                <InboxPage />
              </RequireAuth>
            }
          /> */}


          <Route 
            path='/app/settings'
            element={
              <RequireAuth redirectTo={"/"}>
                <Header name={name} />
                <Sidebar authedUsersName={name} />
                <SettingsPage userdata={user} />
              </RequireAuth>
            }
          />

          <Route 
            path='/app/profile'
            element={
              <RequireAuth redirectTo={"/"}>
                <Header name={name} />
                <Sidebar authedUsersName={name} />
                <ProfilePage />
              </RequireAuth>
            }
          />

          <Route 
            path='/app/community/ga'
            element={
              <RequireAuth redirectTo={"/"}>
                <Header name={name} />
                <Sidebar authedUsersName={name} />
                <ChatRoom author={name} chatGroup={"general-advice"} />
              </RequireAuth>
            }
          />

          <Route 
            path='/app/community/gz'
            element={
              <RequireAuth redirectTo={"/"}>
                <Header name={name} />
                <Sidebar authedUsersName={name} />
                <ChatRoom author={name} chatGroup={"gamezone"} />
              </RequireAuth>
            }
          />

          <Route 
            path='/app/community/ls'
            element={
              <RequireAuth redirectTo={"/"}>
                <Header name={name} />
                <Sidebar authedUsersName={name} />
                <ChatRoom author={name} chatGroup={"lifestyle"} />
              </RequireAuth>
            }
          />

          <Route 
            path='/app/community/ideas'
            element={
              <RequireAuth redirectTo={"/"}>
                <Header name={name} />
                <Sidebar authedUsersName={name} />
                <ChatRoom author={name} chatGroup={"ideas"} />
              </RequireAuth>
            }
          />

          <Route 
            path="*"
            element={
              <RequireAuth redirectTo={"/"}>
                <Sidebar authedUsersName={name} />
                <Dashboard name={name} />
              </RequireAuth>
            }
          />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
