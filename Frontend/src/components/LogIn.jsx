import React, { useState } from 'react';
import Settings from '../settings';
import { Link } from 'react-router-dom';
import { LogInForm } from './LogInForm';
import { RegisterForm } from './RegisterForm';



export const LogIn = () => {

    const [showRegister, setShowRegister] = useState(false);

    const changeShowRegister = () => {
        setShowRegister(!showRegister)
    }




    return (
        <div className="LogIn_Body">
            <div className="LogIn_Body-container">
                {!showRegister &&
                    <LogInForm changeShowRegister={changeShowRegister} />
                }

                {showRegister &&
                    <RegisterForm changeShowRegister={changeShowRegister} />
                }

            </div>
        </div>
    )

}