// fire-irror 코드 참고...
import {React, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import styles from "../../css/comm/splash.module.css"

const Splash = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/login')
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);


    return (
        <div className={styles['splash-screen']}>
            <div className={styles['splash-content']}>
                <img src={`${process.env.PUBLIC_URL}/img/comm/logo.svg`} className={styles['splashLogo']} />
                <img src={`${process.env.PUBLIC_URL}/img/comm/wordmark.svg`} className={styles['splashWordMark']} />
            </div>
        </div>
    );
}

export default Splash;

// fire-irror 코드 참고...