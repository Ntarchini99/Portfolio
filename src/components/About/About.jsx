import './About.css';
import perfil from '../../assets/img/perfil.png';
import cv from '../../assets/pdf/Curriculum-frontend.pdf';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-img">
                <img src={perfil} alt="About" />
            </div>
            <div className="about-content">
                <h2 className="heading">Sobre <span>Mi</span></h2>
                <p>
                    Estoy familiarizado con FIGMA para crear prototipos acorde al pedido del cliente. También tengo buen manejo de HTML5, CSS3, Bootstrap, Sass, JavaScript y ReactJS. Tengo conocimientos en SEO y SERVIDORES. Me encanta trabajar en equipo, me adapto muy rápido y siempre estoy dispuesto a aprender cosas nuevas y seguir nutriéndome de otras personas. Estudié la carrera de Frontend Developer en el Bootcamp de CoderHouse, en el cual quedé dentro del top 10 de mejores alumnos.
                </p>
                <a href={cv} target="_blank" className="btn-cv">
                    Descargar CV
                </a>
            </div>
        </section>
    );
};

export default About;