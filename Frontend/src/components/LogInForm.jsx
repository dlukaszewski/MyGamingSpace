import React, { useState } from 'react';
import Settings from '../settings';

export const LogInForm = (props) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [validate, setValidate] = useState({
        passwordText: "",
        loginText: "",
        errorText: ""
    })

    const LogIn = (event) => {
        event.preventDefault();
        setPassword("");
        setLogin("");

        const dataToSend = {
            "login": login,
            "password": password
        }

        fetch(`${Settings.server}/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify(dataToSend)
        })
            .then((res) => {
                console.log(res);
            })
            .catch(err => {
                setValidate({
                    ...validate,
                    errorText: "Nie udało się połączyć z serwerem! Spróbuj później!"
                })
            })
    }

    const validateForm = (event) => {
        event.preventDefault();
        let validateData = {
            passwordText: "",
            loginText: ""
        }

        !login ? validateData.loginText = "Login nie może być pusty!" : validateData.loginText = ""

        !password ? validateData.passwordText = "Hasło nie może być puste!" : validateData.passwordText = ""

        setValidate({ ...validateData })
        if (!validateData.passwordText && !validateData.loginText) {
            LogIn(event);
        }
    }

    return (
        <React.Fragment>
            <h1 className="LogIn_Header-text">Zaloguj się!</h1>

            {
                validate.errorText &&
                <div className="LogIn_Form--error-text">
                    {validate.errorText}
                </div>
            }

            <form className="LogIn_form" onSubmit={validateForm}>
                <input
                    className="LogIn_Form-item--input" type="text"
                    placeholder="Login"
                    value={login}
                    onChange={event => { setLogin(event.target.value) }} />

                {validate.passwordText &&
                    <div className="LogIn_Form--error-text">
                        {validate.loginText}
                    </div>}

                <input
                    className="LogIn_Form-item--input" type="password"
                    placeholder="Hasło"
                    value={password}
                    onChange={event => { setPassword(event.target.value) }} />

                {validate.passwordText &&
                    <div className="LogIn_Form--error-text">
                        {validate.passwordText}
                    </div>}

                <div className="LogIn_Form--Buttons">
                    <button
                        type="submit"
                        className="LogIn_Button LogIn_Button--login">
                        Zaloguj
                </button>
                    <button
                        type="button"
                        className="LogIn_Button LogIn_Button--register"
                        onClick={props.changeShowRegister}>
                        Zarejestruj
                </button>
                </div>
            </form>
        </React.Fragment>
    )
}