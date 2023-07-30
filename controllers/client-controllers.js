import { clientService } from "../Service/Client-service.js";
import { funcionEliminarUsuario } from "../Service/popUp_alerta_eliminar.js"

// Función para crear una nueva fila de cliente en la tabla
const CrearClienteLinea = ( nombre, email, id ) =>{

    const trClienteLinea = document.createElement('tr');
    const contenidoCliente = `
            <td class="td" data-td>${ nombre }</td>
                <td>${ email }</td>
                <td>
                <ul class="table__button-control">
                    <li>
                        <a href="../screens/editar_cliente.html?id=${ id }" class="simple-button simple-button--edit">
                        Editar
                        </a>
                    </li>
                    <li>
                        <button class="simple-button simple-button--delete" type="button" id="${ id }">
                            Eliminar
                        </button>
                    </li>
                </ul>
            </td>
    `;
    //agregar el codigo html a cada linea de cliente en la tabla
    trClienteLinea.innerHTML = contenidoCliente;

    //boton para eliminar un cliente
    const btnEliminarCliente = trClienteLinea.querySelector("button");

            btnEliminarCliente.addEventListener('click', function(){
                const idCliente = btnEliminarCliente.id;
                funcionEliminarUsuario.mostrarAlerta();
                funcionEliminarUsuario.borraRegistroCliente( idCliente ).then( respuesta => {
                    location.reload();
                }).catch((error) => alert("Ha ocurrido un error", error));
            });

    return trClienteLinea;
}


const tBodyTablaClientes = document.querySelector( "[data-table]" );

clientService.ListaClientes().then( ( dataCliente )  => { dataCliente.forEach( ({nombre, email, id}) => {
    const nuevoClienteLinea = CrearClienteLinea( nombre, email, id );
    tBodyTablaClientes.appendChild( nuevoClienteLinea )
    });
}).catch(( error ) => alert("Ha ocurrido un error", error));
