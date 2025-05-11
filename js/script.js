"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const message = document.getElementById("message");
  const charCount = document.getElementById("charCount");

  if (message && charCount) {
    message.addEventListener("input", () => {
      charCount.textContent = `${message.value.length} / 500`;
    });
  }

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const msg = document.getElementById("message").value;

      Swal.fire({
        title: "¡Formulario enviado!",
        html: `
          <p style="color: black;"><strong>Nombre:</strong> ${name}</p>
          <p style="color: black;"><strong>Correo:</strong> ${email}</p>
          <p style="color: black;"><strong>Mensaje:</strong> ${msg}</p>
        `,
        icon: "success",
        confirmButtonText: "Aceptar",
        customClass: {
          popup: 'text-start'
        }
      });
      form.reset();
      charCount.textContent = "0 / 500";
    });
  }
});