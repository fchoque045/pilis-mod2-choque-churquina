
// Función para realizar la petición post enviando los datos del formulario
function onClick (event) {
    event.preventDefault();
    
    const formulario = {
        comercio: document.getElementById('comercio').value,
        titular: document.getElementById('titular').value,
        email: document.getElementById('email').value,
        celular: document.getElementById('celular').value
    }
    console.log(formulario);
  
  
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(formulario),
        headers: { "Content-type": "application/json; charset=UTF-8" },
    })
        .then((response) => response.json())
        .then((json) => { 
            console.log(json);
            Swal.fire(
                'Enviado',
                'Gracias por inscribite al evento', 
                'success'
            );
            cleanForm();
    })
    .catch((err) => console.log(err));
    
}

function cleanForm() {
    let formulario = document.getElementById('formulario');    
    formulario.reset();    
}
	
let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);