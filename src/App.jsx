import { useState } from "react";

function App() {
   const [fields, setFields] = useState({
      name: "",
      age: "",
      ci: "",
      phone: "",
      province: "",
      participants: "",
      teamName: "",
   });
   const [isSubmitted, setIsSubmitted] = useState(false);

   const handleSubmit = (e) => {
      e.preventDefault();
      if (
         fields.ci.length < 11 ||
         fields.phone.length < 8 ||
         fields.age.length < 2 ||
         Number(fields.participants) < 5
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
         e.target.name === "participants" &&
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
      if (
         e.target.name === "province" &&
         !/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(e.target.value) &&
         e.target.value.length >= 1
      ) {
         return;
      }
      if (
         e.target.name === "teamName" &&
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
      fromDataUser.append("provincia", fields.province);
      fromDataUser.append("participantes", fields.participants);
      fromDataUser.append("nombre del equipo", fields.teamName);

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
         province: "",
         participants: "",
         teamName: "",
      });
   };

   return (
      <section className="container">
         <h1>Busca el flow</h1>
         <h2>Evento de baile urbano</h2>
         <p>
            Esta competencia se realizará con el fin de hacernos un espacio a
            todos los bailarines aficionados o profesionales amantes de baile
            urbano, se enfrentarán 16 equipos para demostrar sus habilidades,
            creatividad y carisma, solo uno de ellos se llevara el gran premio,
            pero el mayor objetivo es crear una comunidad donde abunda el
            respeto, la humildad y el compañerismo. Los invitamos a formar parte
            de este gran movimiento para rescatar esa cultura de las calles y
            sobre todo hacer mucho ruido.
         </p>

         <h3>Atención</h3>
         <p>
            Se recaudará 150 MN por integrante del equipo, el representante del
            mismo será el responsable de realizar el pago ya sea por
            transferencia o en efectivo. <br />
            <strong>Contactar al 58052991 para realizar el pago.</strong>
         </p>

         <h3>Datos del Capitán o Representante del Equipo</h3>
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
               <input
                  type="text"
                  name="province"
                  required
                  placeholder="Provincia"
                  minLength="0"
                  maxLength="30"
                  value={fields.province}
                  onChange={handleChange}
                  autoComplete="off"
               />
               <input
                  type="text"
                  name="participants"
                  required
                  placeholder="Numero de participantes"
                  minLength="0"
                  maxLength="2"
                  value={fields.participants}
                  onChange={handleChange}
                  autoComplete="off"
               />
               <input
                  type="text"
                  name="teamName"
                  required
                  placeholder="Nombre del Equipo"
                  minLength="0"
                  maxLength="25"
                  value={fields.teamName}
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
