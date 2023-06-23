import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.sass";
/*@ts-ignore*/
export default function ContactUs (){
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  function sendEmail(e: any) {
    e.preventDefault();
    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };
    emailjs
      .send(
        "service_vupqagh",
        "template_duq4jbo",
        templateParams,
        "zFCKx9Pt_lW33qmvO"
      )
      .then(
        (response) => {
          console.log("Email Enviado", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("Erro: ", err);
        }
      );
  }
  return (
    <section className="sectionContactUs" id="ContactUs">
      <h2>Fale Conosco</h2>
      <form
        className="formContactUs"
        action="https://formsubmit.co/vozavidacontatos@gmail.com"
        method="POST"
        onSubmit={sendEmail}
        id="form"
      >
        <label htmlFor="Nome">Nome:</label>
        <input 
        type="text" 
        name="Nome" 
        id="Nome"
        placeholder="Digite seu nome aqui."
        onChange={(e) => setName(e.target.value)}
        value={name}
        required
         />
        <label htmlFor="Email">Email:</label>
        <input 
        type="email" 
        name="Email" 
        id="Email" 
        placeholder="Digite seu email aqui."
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required />
        <label htmlFor="Mensagem">Mensagem:</label>
        <textarea
          name="Mensagem"
          id="Mensagem"
          cols={30}
          rows={10}
          placeholder="Digite sua mensagem aqui."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};
