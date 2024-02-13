import './Services.css'
import React from 'react';

const Service = ({ icon, title, description }) => (
  <div className="services-box">
    <i className={`fa-solid fa-${icon}`}></i>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Services = () => {
  const servicesData = [
    { icon: 'business-time', title: 'NEGOCIOS', description: 'Marca presencia y muestra tus servicios, a tu equipo y ofrece oportunidades para hacer contacto.' },
    { icon: 'briefcase', title: 'PORTFOLIOS', description: 'Muestra tus habilidades y trabajos previos para atraer clientes o empleadores.' },
    { icon: 'shop', title: 'E-COMMERCE', description: 'Ofrece tus productos físicos o digitales a través de un diseño bonito y elegante para atraer más clientes.' },
    { icon: 'blog', title: 'BLOG PERSONAL', description: 'Comparte experiencias personales o pasatiempos para comunicar a otros usuarios que estén interesados.' },
    { icon: 'mobile', title: 'DISEÑO RESPONSIVE', description: 'Adaptar cualquier sitio web ya creado a los diferentes tamaños de pantalla, desde Desktop a Mobile o Mobile First.' },
    { icon: 'laptop', title: 'PROTOTIPADO', description: 'Mediante FIGMA, se crean prototipos que cumplan con las necesidades de los clientes.' },
    { icon: 'globe', title: 'SEO Y POSICIONAMIENTO', description: 'Se aplican Técnicas de SEO para lograr un buen posicionamiento de tu sitio web en internet.' },
    { icon: 'server', title: 'DOMINIO Y SERVIDORES', description: 'Te ayudo a adquirir un dominio web y a subir tu sitio web a un servidor (los valores son a cargo del cliente).' },
  ];

  return (
    <section className="services" id="services">
      <h2 className="heading">Mis <span>Servicios ⬇️</span></h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <Service key={index} {...service} />
        ))}
      </div>
    </section>
  );
}

export default Services;


