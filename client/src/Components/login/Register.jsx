import React, { useState } from 'react';
import { postuser } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from '../../hook/useTranslation';
import Swal from 'sweetalert2';
import "../../styles/register.css";
import LanguageSwitcher from '../translate/LanguageSwitcher';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation();
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = { email, password, name };
            const response = await dispatch(postuser(user));
            if (response) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Welcome! Enjoy your new account',
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate("/login");
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Registration failed!',
                });
            }
        } catch (error) {
            console.error("Register error:", error);
          }
        };
        
        return (
          <div className="Registercontainer">
          <LanguageSwitcher>
        </LanguageSwitcher>
            <div className="Registercard">
                <div className="RegisterlogoContainer">
                    <img
                        src={"#"}
                        alt="Memorial Logo"
                        width={80}
                        height={80}
                    />
                </div>
                <h1 className="Registertitle">{t("register.registerTitle")}</h1>
                <p className="Registersubtitle">
                   {t("register.registerSubtitle")}
                </p>
                <form onSubmit={handleSubmit} className="Registerform">
                    <div className="RegisterinputGroup">
                        <label htmlFor="email" className="Registerlabel">
                            {t("register.emailLabel")}
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="Registerinput"
                            placeholder={t("register.email")}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            />
                            <label htmlFor="email" className="Registerlabel">
                            {t("register.NameLabel")}
                        </label>
                        <input
                            id="name"
                            type="text"
                            className="Registerinput"
                            placeholder={t("register.name")}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            />
                    </div>
                    <div className="RegisterinputGroup">
                        <label htmlFor="password" className="Registerlabel">
                            {t("register.PasswordLabel")}
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="Registerinput"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            />
                    </div>
                    <div className="rememberForgot">

                        <a href="#" className="forgotPassword">
                            {t("register.ForgotPassword")}
                        </a>
                    </div>
                    <Link>
                    <button type="submit" className="loginButton">
                {t("register.Register")}
                    </button>
                    </Link>
                </form>
                <div className="separator">
                    <span className="separatorText">{t("register.choose")}</span>
                </div>
                <button
                    className="registerButton"
                    onClick={() => navigate("/register")}
                    >
                      {t("register.Login")}
                </button>
               
            </div>
        </div>
    );
}
