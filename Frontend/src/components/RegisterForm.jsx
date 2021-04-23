import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Settings from '../settings';

export const RegisterForm = (props) => {

    const [newUser, setNewUser] = useState({
        login: "",
        email: "",
        password: "",
        confirmPassword: ""

    });

    const handleChange = (event) => {
        console.log(event.target.getAttribute('name'));
        setNewUser({
            ...newUser,
            [event.target.getAttribute('name')]: event.target.value
        })
    }

    const checkLogin = () => {

    }

    const registerNewUser = (event) => {
        event.preventDefault();

        const dataToSend = {
            login: newUser.login,
            email: newUser.email,
            password: newUser.password
        }

        fetch(`${Settings.server}/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify(dataToSend)
        })
    }

    return (
        <React.Fragment>
            <h1 className="Register_Header-text">Zarejestruj się!</h1>

            <form onSubmit={registerNewUser}>
                <input
                    type="text"
                    className="Register_Form--input"
                    placeholder="Login"
                    name="login"
                    value={newUser.login}
                    onChange={handleChange} />
                <input
                    type="email"
                    className="Register_Form--input"
                    placeholder="E-mail"
                    name="email"
                    value={newUser.email}
                    onChange={handleChange} />
                <input
                    type="password"
                    className="Register_Form--input"
                    placeholder="Hasło"
                    name="password"
                    value={newUser.password}
                    onChange={handleChange} />
                <input
                    type="password"
                    className="Register_Form--input"
                    placeholder="Potwierdz hasło"
                    name="confirmPassword"
                    value={newUser.confirmPassword}
                    onChange={handleChange} />
                <div className="Register_Form--Buttons">

                    <button
                        type="submit"
                        className="Register_Button Register_Button--login"
                        onClick={props.changeShowRegister}>
                        Zaloguj
                    </button>
                    <button
                        type="submit"
                        className="Register_Button Register_Button--register">
                        Zarejestruj
                    </button>
                </div>
            </form>
        </React.Fragment>
    )

}