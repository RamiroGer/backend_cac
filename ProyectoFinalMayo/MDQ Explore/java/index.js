//objeto vue para reservas y usuarios
const { createApp } = Vue
createApp({
  data() {
   return {
      url:'https://gracielagarcia.pythonanywhere.com/reservas',
        
      reservas : [],
      error: false,
    }
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(
          data => {
            console.log(data)
            this.reservas = data
          }
        )
       .catch(error => {
         console.log("Error:" + error)
          this.error = true
        });
    }
  },
  created() {  // created() se ejecuta cada vez que se crea el objeto VUE
    this.fetchData(this.url)
  }
}).mount('#app')


// // escuchar todos los clicks de links en las tarjetas a la vez
// var opciones = document.getElementsByClassName("opcion");
// for (var i = 0; i < opciones.lengh; i++) {
//   opciones[i].addEventListener("click",
//     function () {
//       console.log(i);
//       localStorage.setItem("opcion", i);
//     }, false)
// }



//const { createApp } = Vue;

//createApp({
//  data() {
//    return {
//      url: 'https://gracielagarcia.pythonanywhere.com/reservas'       //'./datos.json', // Cambia la URL para apuntar al archivo local
//      reservas: [],
//      error: false,
//    };
//  },
//  methods: {
//    fetchData(url) {
//      fetch(url)
//        .then(response => {
//          if (!response.ok) {
//            throw new Error('Network response was not ok ' + response.statusText);
//          }
//          return response.json();
//        })
//        .then(data => {
//          console.log(data);
//          this.reservas = Array.isArray(data) ? data : data.reservas || [];
//          this.validateImages();
//        })
//        .catch(error => {
//          console.log("Error: " + error);
//          this.error = true;
//        });
//    },
//    validateImages() {
//      this.reservas.forEach(reserva => {
//        const img = new Image();
//        img.src = reserva.foto;
//        img.onload = () => console.log(`Loaded image: ${reserva.foto}`);
//        img.onerror = () => console.log(`Failed to load image: ${reserva.foto}`);
//      });
//    }
//  },
//  created() {
//    this.fetchData(this.url);
//  }
//}).mount('#app');
