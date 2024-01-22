import React, { useState } from "react";
import "./Contact.css";
import Swal from "sweetalert2";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const resetForm = () => {
    document.getElementById("form").reset();
    setMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);

    try {
      const response = await fetch(event.target.action, {
        method: event.target.method,
        body: formData,
      });

      if (response.ok) {
        Swal.fire({
          title: "¡Éxito!",
          text: "Su consulta se envió correctamente.",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
        resetForm();
      } else {
        throw new Error(
          "Hubo un problema al enviar su consulta. Por favor, inténtalo de nuevo."
        );
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="container" id="contact">
      <h2 className="heading-contact">Contac<span>tame</span></h2>
      <form
        id="form"
        className="form"
        action="https://formsubmit.co/ntarchini.developer@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="form-control">
          <label htmlFor="username">Nombre</label>
          <input
            type="text"
            id="username"
            name="name"
            required
            placeholder="Escribe tu nombre aquí"
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Escribe tu correo aquí"
          />
        </div>

        <div className="form-message">
          <label htmlFor="message">Mensaje</label>
          <textarea
            name="message"
            value={message}
            onChange={handleMessageChange}
            placeholder="Por favor escribe tu mensaje aquí..."
            id="textarea"
            rows="10"
            cols="50"
            required
          ></textarea>
        </div>

        {isSubmitting ? (
          <button className="ButtonSending" disabled={isSubmitting}>
            Enviando...
          </button>
        ) : (
          <button className="Button">Enviar</button>
        )}

        <input
          type="hidden"
          name="_next"
          value="http://localhost:5173/"
        ></input>
        <input type="hidden" name="_captcha" value="false"></input>
      </form>
    </div>
  );
};

export default Contact;
