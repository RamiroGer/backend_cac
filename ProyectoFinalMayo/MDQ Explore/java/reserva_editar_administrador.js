console.log(location.search)     // lee los argumentos pasados a este formulario
var id=location.search.substr(4)  // reserva_update.html?id=1
console.log(id)
const { createApp } = Vue
  createApp({
    data() {
      return {
        id:0,
        nombre:"",
        dia:"",
        horario:"",
        precio:0,
        descripcion:"",
        foto:"",
        url:'https://gracielagarcia.pythonanywhere.com/reservas/'+id, //aqui cambie el mio x el de marcela cerda
       }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id=data.id
                    this.nombre = data.nombre;
                    this.dia = data.dia;
                    this.horario = data.horario;
                    this.precio = data.precio;
                    this.descripcion = data.descripcion;
                    this.foto = data.foto                      
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        modificar() {
            let reserva = {
                nombre:this.nombre,
                dia: this.dia,
                horario: this.horario,
                precio: this.precio,
                descripcion: this.descripcion,
                foto: this.foto
            }
            var options = {
                body: JSON.stringify(reserva),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./reserva_administrador.html"; // navega a reservas.html          
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })      
        }
    },
    created() {
        this.fetchData(this.url)
    },
  }).mount('#app')
