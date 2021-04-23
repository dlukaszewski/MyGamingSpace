import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const RegisterForm = (props) => {

    return (
        <React.Fragment>
            <h1 className="Register_Header-text">Zarejestruj się!</h1>

            <form>
                <input
                    type="text"
                    className="Register_Form--input"
                    placeholder="Login" />
                <input
                    type="email"
                    className="Register_Form--input"
                    placeholder="E-mail" />
                <input
                    type="password"
                    className="Register_Form--input"
                    placeholder="Hasło" />
                <input
                    type="password"
                    className="Register_Form--input"
                    placeholder="Potwierdz hasło" />
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