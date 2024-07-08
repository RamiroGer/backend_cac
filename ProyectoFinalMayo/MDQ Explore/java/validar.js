function validar() {
    let usuario = document.getElementById("usuario");
    let clave = document.getElementById("clave");
    let error = false;
    document.getElementById("validar_usuario").innerHTML = "&nbsp;";
    document.getElementById("validar_clave").innerHTML = "&nbsp;";
    if (usuario.value.length <8) {
        document.getElementById("validar_usuario").innerHTML = "Por favor ingrese un usuario con 8 caracteres como minimo";
        error = true;
        usuario.focus();
    }
    //if (usuario.value = "graciela") {
    //    error = false
    //}

    document.getElementById('validar_usuario').addEventListener('submit'), function(event) {
        event.preventDefault();

        const username = document.getElementById('usuario').value;
        const password = document.getElementById('clave').value;
    }


      if (username === 'graciela' && password === '1234567890') {
             window.location.href = './reserva_administrador.html'; 
          } // Cambia 'pagina_destino.html' por la URL de tu destino

        else {
            document.getElementById('error').textContent = 'Nombre de usuario o contraseña incorrectos.';
        }


    if (clave.value.length < 8) {
        document.getElementById("validar_clave").innerHTML = "La clave debe tener 8 carateres como mínimo";
        error = true;
        clave.focus();
     
    }
    if (error == false) {
        document.getElementById("usuario").value = ""
        document.getElementById("validar_usuario").innerHTML = "&nbsp;";
        document.getElementById("clave").value = ""
        document.getElementById("validar_clave").innerHTML = "&nbsp;";
        alert("Dato enviado - Te enviaremos informacion de proximas excursiones")
    }
    return !error
  
}