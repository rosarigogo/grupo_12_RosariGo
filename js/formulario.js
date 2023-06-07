document.addEventListener("DOMContentLoaded", function() {
    var contactForm = document.getElementById("contactForm");
  
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Evitar que el formulario se envíe por defecto
  
      // Obtener los valores de los campos del formulario
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;
  
      // Aquí puedes realizar alguna acción con los datos del formulario, como enviarlos a un servidor o mostrarlos en la consola
      console.log("Nombre: " + name);
      console.log("Correo electrónico: " + email);
      console.log("Mensaje: " + message);
  
      // Mostrar mensaje de éxito
      var successMessage = document.createElement("p");
      successMessage.textContent = "¡El formulario se ha enviado con éxito!";
      successMessage.style.color = "green";
      contactForm.appendChild(successMessage);
  
      // Limpiar los campos del formulario
      contactForm.reset();
    });
  });