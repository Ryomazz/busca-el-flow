import { useState } from "react";

function App() {
   const [fields, setFields] = useState({
      name: "",
      age: "",
      ci: "",
      phone: "",
   });
   const [isSubmitted, setIsSubmitted] = useState(false);

   const handleSubmit = (e) => {
      e.preventDefault();
      if (
         fields.ci.length < 11 ||
         fields.phone.length < 8 ||
         fields.age.length < 2
      ) {
         return;
      }
      sendData();
   };

   const handleChange = (e) => {
      //Validacines para solo numeros enteros positivos
      if (
         e.target.name === "age" &&
         !/^[0-9]+$/.test(e.target.value) &&
         e.target.value.length >= 1
      ) {
         return;
      }
      if (
         e.target.name === "ci" &&
         !/^[0-9]+$/.test(e.target.value) &&
         e.target.value.length >= 1
      ) {
         return;
      }
      if (
         e.target.name === "phone" &&
         !/^[0-9]+$/.test(e.target.value) &&
         e.target.value.length >= 1
      ) {
         return;
      }
      if (
         e.target.name === "name" &&
         !/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(e.target.value) &&
         e.target.value.length >= 1
      ) {
         return;
      }

      setFields({ ...fields, [e.target.name]: e.target.value });
   };

   const sendData = () => {
      //Crear FromData para enviar a FormSubmit
      const fromDataUser = new FormData();
      fromDataUser.append("nombre", fields.name);
      fromDataUser.append("edad", fields.age);
      fromDataUser.append("carnet", fields.ci);
      fromDataUser.append("telefono", fields.phone);

      fetch("https://formsubmit.co/ajax/ryuz1707@gmail.com", {
         method: "POST",
         body: fromDataUser,
         headers: { Accept: "application/json" },
      })
         .then((response) => response.json())
         .then((data) => console.log(data));

      setIsSubmitted(true);
      setFields({
         name: "",
         age: "",
         ci: "",
         phone: "",
      });
   };

   return (
      <section className="container">
         <h1>Busca el flow</h1>
         <h2>Evento de baile urbano</h2>
         {isSubmitted ? (
            <div className="submited">
               <h2>Datos enviados con exito </h2>
            </div>
         ) : (
            <form onSubmit={handleSubmit} className="form">
               <input
                  type="text"
                  name="name"
                  required
                  placeholder="Nombre"
                  minLength="0"
                  maxLength="50"
                  value={fields.name}
                  onChange={handleChange}
                  autoComplete="off"
               />
               <input
                  type="text"
                  name="age"
                  required
                  placeholder="Edad"
                  minLength="0"
                  maxLength="2"
                  value={fields.age}
                  onChange={handleChange}
                  autoComplete="off"
               />
               <input
                  type="text"
                  name="ci"
                  required
                  placeholder="Carnet de identidad"
                  minLength="0"
                  maxLength="11"
                  value={fields.ci}
                  onChange={handleChange}
                  autoComplete="off"
               />
               <input
                  type="text"
                  name="phone"
                  placeholder="Numero de telefono"
                  required
                  minLength="0"
                  maxLength="8"
                  value={fields.phone}
                  onChange={handleChange}
                  autoComplete="off"
               />
               <button>Enviar</button>
            </form>
         )}
         <footer className="footer">Made with 💜 by Ryo-ma</footer>
      </section>
   );
}
export default App;
