import { clientService } from "../Service/Client-service.js";

const formularioCrearUsuario = document.querySelector('[data-form]');

formularioCrearUsuario.addEventListener('submit', ( event ) => {
    event.preventDefault();
    const nombreRegitroCliente = document.querySelector('[data-nombre]').value;
    const emailRegitroCliente = document.querySelector('[data-email]').value;

    clientService.crearCliente( nombreRegitroCliente, emailRegitroCliente ).then( () => {
        window.location.href = "/screens/registro_completado.html"; 
    })
    .catch((error) =>{alert(`Error al crear el cliente: ${ error }`)});
});