import './Services.css'

const Services = () => {
  // Define an array of service objects with their respective content
  const servicesData = [
    {
      title: 'NEGOCIOS',
      description: 'Marca presencia y muestra tus servicios, a tu equipo y ofrece oportunidades para hacer contacto',
    },
    {
      title: 'PORTFOLIOS',
      description: 'Muestra tus habilidades y trabajos previos para atraer clientes o empleadores.',
    },
    {
      title: 'E-COMMERCE',
      description: 'Ofrece tus productos físicos o digitales a través de un diseño bonito y elegante para atraer mas clientes',
    },
    {
      title: 'BLOG PERSONAL',
      description: 'Comparte experiencias personales o pasatiempos para comunicar a otros usuarios que estén interesados.',
    },
    {
      title: 'CONTEO DE STOCK',
      description: 'Te ayudo a llevar el conteo de tu STOCK mediante un sistema con codigo JavasCript .',
    },
    {
      title: 'DISEÑOS RESPONSIVE',
      description: 'Adaptar cualquier sitio web ya creado a los diferentes tamaños de pantalla, desde Desktop a Mobile o Mobile First.',
    },
    {
      title: 'PROTOTIPADO',
      description: 'Mediante FIGMA, se crean prototipos que cumplan con las necesidades de los clientes.',
    },
    {
      title: 'POSICIONAMIENTO',
      description: 'Se aplican Técnicas de SEO para lograr un buen posicionamiento de tu sitio web en internet',
    },
    {
      title: 'DOMINIO Y SERVIDORES',
      description: 'Te ayudo a adquirir un dominio web y de subir tu sitio web a un servidor (los valores son a cargo del cliente).',
    },

  ];

  return (
    <section className="services" id="services">
      <h2 className="heading">Mis <span>Servicios</span></h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="services-box" key={index}>
            <i className={`fa-solid fa-${service.icon}`} style={{ color: service.color }}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
