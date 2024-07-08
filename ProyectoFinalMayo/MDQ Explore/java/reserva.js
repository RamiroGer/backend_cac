// lee el parametro enviado en la url
const parametrosUrl = window.location.search;
const objetoParametro = new URLSearchParams(parametrosUrl);
const elegido = objetoParametro.get ("reservas")  //("dato");



//Lee el JSON local
fetch  ('https://gracielagarcia.pythonanywhere.com/reservas') //("..//JSON/datos.Json")
    .then((response) => response.json())
    .then((tours) => {

        //Agrega al select del formulario las opciones desde el JSON y pone como opción 
        //seleccionada por defecto la elegida

        var opciones = "";
        var index = 0;
        for (x of tours) {
            index++;
            if ((index-1) === parseInt(elegido)){
                opciones = opciones + "<option value=" + index + " selected>" + x.Nombre + "</option>"
            }
            else{ 
                    opciones = opciones + "<option value=" + index + ">" + x.Nombre + "</option>"
            }
        }
        document.getElementById("excursion").innerHTML = opciones;

        //Agrega el título , foto, dias, horarios, etc. de arranque
        document.getElementById("titulo").innerHTML = tours[elegido].nombre;
        document.getElementById("informacion").innerHTML = tours[elegido].informacion;
        document.querySelector("#muestra").src = tours[elegido].foto;
        //document.querySelector("#maps").src = tours[elegido].maps;
        document.querySelector("#diasVisita").innerHTML = tours[elegido].dia;
        document.querySelector("#horarioVisita").innerHTML = tours[elegido].horario;
        document.querySelector("#precioPorPersona").innerHTML = "Precio por persona $ " + tours[elegido].precio;
        document.querySelector("#dato").value = elegido;
        var valor = tours[elegido].precio;

        //obtiene la opción seleccionada en el select del formulario y carga del JSON 
        //la foto, dias , horarios, ubnicación y títulos correspondientes
        var eleccion = document.querySelector("#excursion");
        eleccion.addEventListener("change",
            function () {
                var opcionElegida = this.options[eleccion.selectedIndex];
                document.getElementById("titulo").innerHTML = opcionElegida.text;
                document.querySelector("#muestra").src = tours[parseInt(opcionElegida.value) - 1].foto;
                document.querySelector("#muestra").alt = tours[parseInt(opcionElegida.value) - 1].Nombre;
                document.querySelector("#maps").src = tours[parseInt(opcionElegida.value) - 1].maps;
                document.querySelector("#info").innerHTML = tours[parseInt(opcionElegida.value) - 1].info;
                document.querySelector("#diasVisita").innerHTML = tours[parseInt(opcionElegida.value) - 1].Días;
                document.querySelector("#horarioVisita").innerHTML = tours[parseInt(opcionElegida.value) - 1].Horario;
                document.querySelector("#precioPorPersona").innerHTML = "Precio por persona $ " + tours[parseInt(opcionElegida.value) - 1].Precio;
                document.querySelector("#dato").value = elegido;
                valor = tours[parseInt(opcionElegida.value) - 1].Precio;
            });

        //Toma del formulario la cantidad de personas y después calcula el precio total
        var integrantesMa = document.querySelector("#cantidadAdultos");
        var integrantesMe = document.querySelector("#cantidadMenores");
        integrantesMa.addEventListener("input",
            function () {
                var total = parseInt(document.querySelector("#cantidadAdultos").value) + parseInt(document.querySelector("#cantidadMenores").value);
                document.querySelector("#precio").innerHTML = `El costo total es: ${total * valor}$`;
            });
        integrantesMe.addEventListener("input",
            function () {
                var total = parseInt(document.querySelector("#cantidadAdultos").value) + parseInt(document.querySelector("#cantidadMenores").value);
                document.querySelector("#precio").innerHTML = `El costo total es: ${total * valor}$`;
            });
    })
    .catch((error) => {
        console.error("Error al leer el archivo JSON:", error);
    });