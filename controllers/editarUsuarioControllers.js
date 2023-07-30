import { clientService } from "../Service/Client-service.js";

const formularioEditarCliente = document.querySelector('[data-form]');
let obtenerNombreCliente = document.querySelector("[data-nombre]");
let obtenerEmailCliente = document.querySelector("[data-email]");

const obtenerInformacionCliente = () => {
    const urlEditarCliente = new URL( window.location );
    const idUrlCliente = urlEditarCliente.searchParams.get( "id" );

    if( idUrlCliente === null){
        window.location.href = "../screens/error.html"
    }

    clientService.detalleCliente( idUrlCliente ).then(( perfil ) =>{
        obtenerNombreCliente.value = perfil.nombre;
        obtenerEmailCliente.value = perfil.email;
    });
}

formularioEditarCliente.addEventListener('submit', ( event ) =>{
    event.preventDefault();
    const urlEditarCliente = new URL( window.location );
    const idUrlCliente = urlEditarCliente.searchParams.get( "id" );

    const obtenerNombreCliente = document.querySelector("[data-nombre]").value;
    const obtenerEmailCliente = document.querySelector("[data-email]").value;

    clientService.actualizarCliente( obtenerNombreCliente, obtenerEmailCliente, idUrlCliente )
        .then( () =>{
            window.location.href = "../screens/edicion_concluida.html";
        })
        .catch( (error) => {
            window.location.href = "../screens/error.html";
        })
});
obtenerInformacionCliente();