import React, { useState, useEffect, Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./formstyles.css";
import "../styles.css";
import { signIn } from '../../firebase/auth';


function LoginForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    let navigate = useNavigate();

    const login = (ev) => {
        ev.preventDefault();
        try{
            var data = new FormData(ev.target);
            const loginCredentials = {
                email: data.get("username"),
                password:data.get("password"),
            }

            console.log(loginCredentials)
            signIn(loginCredentials).then(() => {
                navigate("/app/feed")
            })
        }catch(error){
            console.log(error);
            setError(error.message)
        }
        
    }

  return (
    <Fragment>
        <div className='form__container'>
            <form method='POST' onSubmit={login} className='form'>
                <div>
                    <h4 className='form__h4'>Login</h4>
                </div>
                <div>
                    {error && <p>{error}</p>}
                </div>
                <div>
                    <label className='form__label' htmlFor='username'>Email</label>
                    <input required className='form__input' type="text" value={username} onInput={(e) =>setUsername(e.target.value) } name="username" placeholder="Email"  />
                </div>

                <div>
                    <label className='form__label' htmlFor='password'>Password</label>
                    <input required className='form__input' type="password" value={password} onInput={(e) => setPassword(e.target.value) } name="password" placeholder="Password"  />
                </div>
                
                <div>
                    <button className='button primary__button' type='submit' value="Login">Login</button>
                </div>
                
                <div>
                    <p>don't have an account? <Link to="/signup">Create an account</Link></p>
                </div>

                <div>
                    <Link to="/">forgot password?</Link>
                </div>
            </form>


            
        </div>
    </Fragment>
  )
}

export default LoginForm