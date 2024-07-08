console.log(location.search)  // lee los argumentos pasados a este formulario
var id = location.search.substr(4)  // usuario_update.html?id=1
console.log('ID del usuario a editar:', id)

const { createApp } = Vue
createApp({
  data() {
    return {
      id: 0,
      usuario: "",
      clave: "",
      rol: 0,
      url: 'https://gracielagarcia.pythonanywhere.com/usuarios/' + id,
    }
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log('Datos del usuario:', data)
          this.id = data.id
          this.usuario = data.usuario
          this.clave = data.clave
          this.rol = data.rol
        })
        .catch(err => {
          console.error('Error al cargar datos del usuario:', err)
          this.error = true
        })
    },
    modificar() {
      let usuario = {
        id: this.id,
        usuario: this.usuario,
        clave: this.clave,
        rol: this.rol,
      }
      console.log('Datos a modificar:', usuario)
      var options = {
        body: JSON.stringify(usuario),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
      }
      fetch(this.url, options)
        .then(response => {
          console.log('Respuesta del servidor:', response)
          if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText)
          }
          return response.json()
        })
        .then(data => {
          console.log('Respuesta JSON del servidor:', data)
          alert("Registro modificado")
          window.location.href = "./usuario_administrador.html"
        })
        .catch(err => {
          console.error('Error al modificar:', err)
          alert("Error al Modificar")
        })
    }
  },
  created() {
    this.fetchData(this.url)
  },
}).mount('#app')
