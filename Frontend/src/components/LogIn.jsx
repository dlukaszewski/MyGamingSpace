export const LogIn = () => {
    return (
        <div className="LogIn_Body">
            <div className="LogIn_Body-container">
                <h1 className="LogIn_Header-text">Zaloguj się!</h1>
                <form className="LogIn_form" >
                    <input
                        className="LogIn_Form-item--input" type="text"
                        placeholder="Login" />
                    <input
                        className="LogIn_Form-item--input" type="text"
                        placeholder="Hasło" />
                    <div className="LogIn_Form--Buttons">
                        <button
                            type="submit"
                            className="LogIn_Button LogIn_Button--login">
                            Zaloguj
                        </button>
                        <button
                            type="button"
                            className="LogIn_Button LogIn_Button--register">
                            Zarejestruj
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )

}