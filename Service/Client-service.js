//fetch api
const ListaClientes = () => fetch( "http://localhost:3000/perfil" ).then((respuesta) => respuesta.json());

const crearCliente = ( nombre, email) => {
    return fetch( "http://localhost:3000/perfil", {
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({nombre , email, id: uuid.v4()})
    })
}

// //funcion para eliminar cliente

// const borraRegistroCliente = ( id ) => {
//     return fetch( `http://localhost:3000/perfil/${id}`, {
//         method:"DELETE",
//     })
// }

const detalleCliente = ( id ) => {
    return fetch( `http://localhost:3000/perfil/${ id }`).then( respuesta => respuesta.json())
}

const actualizarCliente = ( nombre, email, id) => {
    //implementar funcion de update Cliente
    return fetch(`http://localhost:3000/perfil/${ id }`, {
        method:'PUT',
        headers :{ 'content-type':'application/json' },
        body:JSON.stringify({ nombre, email }),    
    })
    .then( respuesta => respuesta )
    .catch((error) => console.log( error ))
}

export const clientService = {
    ListaClientes,
    crearCliente,
    //borraRegistroCliente,
    detalleCliente,
    actualizarCliente,  
}