import React, { useState, useEffect, Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./formstyles.css";
import "../styles.css";
import LoginImage from "../../images/loginimage.svg";
import LogoImage from "../../images/logoNoBg.png";
import { signIn } from '../../firebase/auth';
import Loading from "../Loading/Loading.js"

function LoginForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    let navigate = useNavigate();

    const login = (ev) => {
        ev.preventDefault();
        try{
            setLoading(true);
            var data = new FormData(ev.target);
            const loginCredentials = {
                email: data.get("username"),
                password:data.get("password"),
            }

            console.log(loginCredentials)
            setLoading(false);
            signIn(loginCredentials).then(() => {
                navigate("/app/feed")
            })
        }catch(error){
            console.log(error);
            setError(error.message)
        }
        
    }

  return (
    <div className='loginform'>
        <div className='form__container'>
            <div className='form__container__left'>
               <img style={{ width: "15vw", objectFit: "contain"}} src={LogoImage} alt = " " />
                <img className='form__img' src={LoginImage} alt='login' />

                <div>
                    <h3 className='form__container__left__h3'>Hello again!</h3>
                    <Link to='/signup'>Create an account</Link>
                </div>
            </div>
            <form method='POST' onSubmit={login} className='form'>
                <div>
                    <h4 className='form__h4'>Sign in</h4>
                </div>
                <div>
                    {error && <p>{error}</p>}
                </div>
                <div>
                    <input required className='form__input' type="text" value={username} onInput={(e) =>setUsername(e.target.value) } name="username" placeholder="Email"  />
                </div>

                <div>
                    <input required className='form__input' type="password" value={password} onInput={(e) => setPassword(e.target.value) } name="password" placeholder="Password"  />
                </div>
                
                <div>
                    {loading ? (
                       <button  className='button form__button' type="submit">
                            <Loading size="small" />
                       </button>
                    ) : <button className='button primary__button' type="submit">Login</button>}
                </div>
                
                <div>
                    <p>don't have an account? <Link to="/signup">Create an account</Link></p>
                </div>

                <div>
                    <Link to="/">forgot password?</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginForm