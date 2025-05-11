// Contador de caracteres y manejo del formulario de contacto
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

      // Obtener los valores del formulario
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const msg = document.getElementById("message").value;

      // Mostrar en la consola
      console.log("Formulario enviado:");
      console.log("Nombre:", name);
      console.log("Correo:", email);
      console.log("Mensaje:", msg);

      // Limpiar formulario
      form.reset();
      charCount.textContent = "0 / 500";
    });
  }
});