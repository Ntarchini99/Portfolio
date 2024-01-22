import './Portfolio.css';
import React, { useState } from 'react';

const Portfolio = () => {
    const [projects] = useState([
        {
            id: 1,
            title: 'Biblioteca de Online',
            description: 'Un sitio web para ver y descargar libros sobre programación',
            imageUrl: 'https://i.postimg.cc/rF8GG70t/biblio.png',
            link: 'https://biblioteccaonline.netlify.app/',
        },
        {
            id: 2,
            title: 'ShopLine Tienda',
            description: 'Tienda para una marca que vende productos de tecnología',
            imageUrl: 'https://i.postimg.cc/KYgtv2VC/shopline.png',
            link: 'https://shoplinee.netlify.app/',
        },
        {
            id: 3,
            title: 'BlackLab Strategies',
            description: 'Sitio web para asesoria financiera y de Trading',
            imageUrl: 'https://i.postimg.cc/rwfftMfm/blacklab.png',
            link: 'https://blacklabstrategies.netlify.app/home',
        },
        {
            id: 4,
            title: 'ViteDev Agencia',
            description: 'Landing Page para mi agencia de marketing integral',
            imageUrl: 'https://i.postimg.cc/xddFscXM/vitedev.png',
            link: 'https://vitedevagencia.com.ar/',
        },
        {
            id: 5,
            title: 'Vite Store',
            description: 'Landing Page con catalogo para venta de impresiones 3D',
            imageUrl: 'https://i.postimg.cc/FsDyTG3C/vitestore.png',
            link: 'https://vitestore.netlify.app/',
        },
        {
            id: 6,
            title: 'Crypto',
            description: 'Sitio web con informacion y el valor de criptomonedas en tiempo real',
            imageUrl: 'https://i.postimg.cc/cJ074jRm/crypto.png',
            link: 'https://cryptossoftware.netlify.app/',
        },

    ]);

    return (
        <section id="portfolio" className="portfolio">
            <h2 className="heading">Mi <span>Portfolio</span></h2>
            <div className="portfolio-container">
                {projects.map((project) => (
                    <div key={project.id} className="portfolio-box">
                        <img height="250" src={project.imageUrl} alt={`Project${project.id}`} />
                        <div className="portfolio-layer">
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">Ver sitio</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
