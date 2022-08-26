const url = 'http://localhost:4000/clientes'

//Cuando se obtiene un nuevo cliente
export const nuevoCliente = async cliente => {
    
    try {
        await fetch(url,{
                method: 'POST',  //Siempre que se utilice un nuevo registro se utiliza el metodo 'POST'
                body: JSON.stringify(cliente),  //contenido de esta peticion 'post' hacia la url/clientes, este body se envia de dos formas como string o como objeto (en este caso lo pedimos como string)
                headers: { //Informacion de que tipo de datos estamos enviando, varia de acuerdo a lo que estas enviando al servidor...
                    'Content-Type': 'application/json'
                }
        });
        window.location.href = 'index.html'  //enviamos al usuario a index.html una vez que se haya completado la accio (fetch)
    } catch (error) {
        console.log(error)
    }
}

//Obtiene todos los clientes
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url);  //por default await envia un get
        const clientes = await resultado.json();
        return clientes
    } catch (error) {
        console.log(error)
    }
}

//Elimina un clinete
export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`,{
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error)
    }
}

//Obtiene un cliente por ID
export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return cliente
    } catch (error) {
        console.log(error)
    }
}

//Actualiza un registro
export const editarCliente = async cliente => {
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',  //PUT reescribe el objeto completo, mientras que PATCH es parcial...
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}