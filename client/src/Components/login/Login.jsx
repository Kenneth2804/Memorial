import React, { useState } from 'react';
import { loginUser } from '../../redux/actions/index';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from '../../hook/useTranslation';
import Swal from 'sweetalert2';
import "../../styles/login.css";
import LanguageSwitcher from '../translate/LanguageSwitcher';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = { email, password };
            const response = await dispatch(loginUser(user));
            if (response) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: t('messages.successMessage'),
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate("/home");
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: t('login.failureMessage'),
                });
            }
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    return (
        <div className="Logincontainer">
            <LanguageSwitcher />
            <div className="Logincard">
                <div className="LoginlogoContainer">
                    <img
                        src={"#"}
                        alt="Memorial Logo"
                        width={80}
                        height={80}
                    />
                </div>
                <h1 className="Logintitle">{t("login.Logintitle")}</h1>
                <p className="Loginsubtitle">
                    {t("login.Loginsubtitle")}
                </p>
                <form onSubmit={handleSubmit} className="Loginform">
                    <div className="LogininputGroup">
                        <label htmlFor="email" className="Loginlabel">
                            {t("login.emailLabel")}
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="Logininput"
                            placeholder={t("login.email")}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="LogininputGroup">
                        <label htmlFor="password" className="Loginlabel">
                            {t("login.PasswordLabel")}
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="Logininput"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="rememberForgot">
                        <a href="#" className="forgotPassword">
                            {t("login.ForgotPassword")}
                        </a>
                    </div>
                    <button type="submit" className="loginButton">
                        {t("login.Login")}
                    </button>
                </form>
                <div className="separator">
                    <span className="separatorText">{t("login.choose")}</span>
                </div>
                <button
                    className="registerButton"
                    onClick={() => navigate("/register")}
                >
                    {t("login.Register")}
                </button>
            </div>
        </div>
    );
}
