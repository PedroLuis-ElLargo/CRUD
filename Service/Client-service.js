const CrearClienteLinea = ( nombre, email ) =>{

    const trClienteLinea = document.createElement('tr')
    const contenidoCliente = `
            <td class="td" data-td>${ nombre }</td>
                <td>${ email }</td>
                <td>
                <ul class="table__button-control">
                    <li>
                    <a
                        href="../screens/editar_cliente.html"
                        class="simple-button simple-button--edit"
                        >Editar</a
                    >
                    </li>
                    <li>
                    <button
                        class="simple-button simple-button--delete"
                        type="button"
                    >
                        Eliminar
                    </button>
                    </li>
                </ul>
            </td>
    `;
    //agregar el codigo html a cada linea de cliente en la tabla
    trClienteLinea.innerHTML = contenidoCliente;
    return trClienteLinea;
}

const tableClientes = document.querySelector( "[data-table]" );
const http = new XMLHttpRequest();

//codigo para enviae la peticion al servidor
http.open( "GET", "http://localhost:3000/perfil" );
http.send();

//metodo para recibir la peticion dada
http.onload = () => {
    const dataCliente = JSON.parse( http.response );
    dataCliente.forEach(perfil => {
        const nuevoClienteLinea = CrearClienteLinea( perfil.nombre, perfil.email );
        tableClientes.appendChild( nuevoClienteLinea )
    });

    //peticion para los perfiles creados
    const http2 = new XMLHttpRequest();
    http2 = open( "GET", "http://localhost:3000/perfil/hoy" );
    http2.send();

    http2.onload = () =>{
        const dataClientePeticion = JSON.parse( http2.response );
    }
}

