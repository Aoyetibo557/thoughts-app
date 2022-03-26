import React, {useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../../firebase/auth';
import "../LoginForm/formstyles.css";

function SignupForm() {
    const [email, setEmail] = useState("")
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");

    useEffect(() => {

        return () =>{

        }
    },[])

    const navigate = useNavigate();

    const handleSubmit = (ev) => {
        ev.preventDefault();

        try {
            var data = new FormData(ev.target);
            const credentials = {
                email: data.get("email"),
                password: data.get("password"),
                firstname: data.get("firstname"),
                lastname: data.get("lastname"),
                username: data.get("username"),
            }

            // console.log(credentials);
            signUp(credentials).then(() => {
                navigate("/app/feed")
            })
            try{
                resetForm();
            }catch(clearError) {
                console.log(clearError.message)
            }

        }catch(error) {
            console.log(error.message)
        }
    }

    const resetForm = () => {
        setFirstname("")
        setLastname("")
        setEmail("")
        setPassword("")
        setUsername("")
    }

  return (
    <>
        <div className='form__container'>
            <form method='POST' onSubmit={handleSubmit} className='form'>
                <div>
                    <h4 className='form__h4'>Create an Account</h4>
                </div>

                <div>
                    <label className='form__label' htmlFor='lfirstname'>Firstname</label>
                    <input className='form__input' type="text" value={firstname} onInput={(e) =>setFirstname(e.target.value) } name="firstname" placeholder="Fistname"  />
                </div>

                <div>
                    <label className='form__label' htmlFor='lastname'>Lastname</label>
                    <input className='form__input' type="text" value={lastname} onInput={(e) =>setLastname(e.target.value) } name="lastname" placeholder="Lastname"  />
                </div>

                <div>
                    <label className='form__label' htmlFor='email'>Email Address</label>
                    <input className='form__input' type="text" value={email} onInput={(e) =>setEmail(e.target.value) } name="email" placeholder="youraddress@mail.com"  />
                </div>
                <div>
                    <label className='form__label' htmlFor='username'>Username</label>
                    <input className='form__input' type="text" value={username} onInput={(e) =>setUsername(e.target.value) } name="username" placeholder="Username"  />
                </div>

                <div>
                    <label className='form__label' htmlFor='password'>Password</label>
                    <input className='form__input' type="password" value={password} onInput={(e) => setPassword(e.target.value) } name="password" placeholder="Password"  />
                </div>
                
                <div>
                    <button className='button primary__button' type='submit' value="Sign Up">Sign Up</button>
                </div>
                
                <div>
                    <p>already an account? <Link to="/">Login</Link></p>
                </div>

                <div>
                    <Link to="/">forgot password?</Link>
                </div>
            </form>
        </div>
    </>
  )
}

export default SignupForm