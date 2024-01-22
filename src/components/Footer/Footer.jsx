import './Footer.css';
import { BsArrowUp } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-text">
                <p>
                    By <a href="https://github.com/Ntarchini99?tab=repositories" target="_blank" rel="noopener noreferrer">Nazareno Tarchini</a> | Hora
                    de Programar.
                </p>
            </div>
            <div className="footer-iconTop">
                <a href="#home">
                    <BsArrowUp />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
