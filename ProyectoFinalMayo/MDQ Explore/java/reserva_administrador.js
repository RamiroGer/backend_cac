const { createApp } = Vue
  createApp({
    data() {
      return {
        reservas:[],
    //    url:'http://localhost:5000/reservas', 
   // si el backend esta corriendo local  usar localhost 5000(si no lo subieron a pythonanywhere)
        url:'https://gracielagarcia.pythonanywhere.com/reservas',   // si ya lo subieron a pythonanywhere
        error:false,
        cargando:true,
        /*atributos para el guardar los valores del formulario */
        id:0,
        nombre:"", 
        dia:"",
        horario:"",
        precio:0,
        descripcion:"",
        foto:"",
    }  
    },
    methods: {                
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.reservas = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        eliminar(id) {
            const url = this.url+'/' + id;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
			 alert('Registro Eliminado')
                    location.reload(); // recarga el json luego de eliminado el registro
                })
        },
        grabar(){
            let reserva = {
                nombre:this.nombre,
                dia:this.dia,
                horario:this.horario,
                precio: this.precio,
                descripcion: this.descripcion,
                foto:this.foto
            }
            var options = {
                body:JSON.stringify(reserva),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "./reserva_administrador.html";  // recarga productos.html
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar")  // puedo mostrar el error tambien
                })      
        }
    },
    created()  {           //metodos a ejecutar al inicio 
        this.fetchData(this.url)
    },
  }).mount('#app')

