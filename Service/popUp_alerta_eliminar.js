function mostrarAlerta() {
    document.style.display = "block";
}

function cerrarAlerta() {
    document.getElementById("popup").style.display = "none";
}

function eliminarUsuario() {

    //funcion para eliminar cliente
    const borraRegistroCliente = ( id ) => {
        return fetch( `http://localhost:3000/perfil/${id}`, {
            method:"DELETE",
        })
    }

    return borraRegistroCliente( cerrarAlerta() )
    //cerrarAlerta();
}

export const funcionEliminarUsuario = {
    eliminarUsuario,
    mostrarAlerta,
}