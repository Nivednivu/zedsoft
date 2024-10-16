import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [currState, setCurrState] = useState("Login");

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (currState === "Sign Up") {
            alert('Registration successful');
            setCurrState("Login");
        } else if (currState === "Login") {
            alert('Login successful');
            navigate('/list');
        }
    };

    return (
        <div className='login-popup'>
            <form className='login-popup-container' onSubmit={handleSubmit}>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                </div>
                <div className='login-popup-input'>
                    {currState === "Sign Up" &&
                        <input
                            onChange={onChangeHandler}
                            value={data.name}
                            name='name'
                            type="text"
                            placeholder='Your Name'
                            required
                        />
                    }
                    <input
                        onChange={onChangeHandler}
                        value={data.email}
                        name='email'
                        type="email"
                        placeholder='Your Email'
                        required
                    />
                    <input
                        onChange={onChangeHandler}
                        value={data.password}
                        name='password'
                        type="password"
                        placeholder='Password'
                        required
                    />
                </div>
                <button type='submit'>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
                {currState === "Login" ? (
                    <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
                ) : (
                    <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                )}
            </form>
        </div>
    );
}

export default Login;
