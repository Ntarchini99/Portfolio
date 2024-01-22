import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './HomePage.css';
import art from '../../assets/img/art.png';

const HomePage = () => {
    const multitextRef = useRef(null);

    useEffect(() => {
        const typedOptions = {
            strings: ["Desarrollador Web", "Web developer"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            showCursor: false,
            loop: true,
            smartBackspace: false
        };

        const typed = new Typed(multitextRef.current, typedOptions);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section id="home" className="home">
            <div className="home-content">
                <h3>Hola, me llamo</h3>
                <h1>Nazareno Tarchini</h1>
                <h4 className='text-homep'>Soy <span ref={multitextRef}></span></h4>
                <p>Tengo 24 años, vivo en Buenos Aires y puedo trabajar en remoto para cualquier parte del mundo.</p>
                <a href="https://drive.google.com/drive/folders/1mBJC80kaupvHgXTmGSBDywoFU-BlDai4?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <button className="shadow__btn">
                        Certificados
                    </button>
                </a>
            </div>
            <div className="home-img">
                <img src={art} alt="Home" />
            </div>
        </section>
    );
};

export default HomePage;
