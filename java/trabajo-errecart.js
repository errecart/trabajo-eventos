// class cuenta {
//     constructor(usuario, contrasenia) {
//         this.usuario = usuario;
//         this.contrasenia = contrasenia;
//         this.miembros = [];
//     }
//     agregarMiembros(miembro) {
//         this.miembros.push(miembro);
//     }
// }

// class miembro {
//     constructor(nombre) {
//         this.nombre = nombre;
//     }
// }


// // Cuenta =======================================================================

// const usuario = prompt("ingrese nombre de usuario")
// const contrasenia = prompt("ingrese contrasenia")


// const cuentaP = new cuenta(usuario, contrasenia)

// console.log(cuentaP);


// // Usuario ======================================================================


// let opcion = prompt("ingrese Y para agregar Miembro y enter para salir ")

// while (opcion == "Y") {
//     const nombre = prompt("ingrese nombre")
//     const miembroCreada = new cuenta (nombre);
//     cuentaP.agregarMiembros(miembroCreada);
//     opcion = prompt("ingrese Y para agregar Miembro y enter para salir")
// }

// console.log(cuentaP.miembros)

// DOM ========================================================================

let navTrabajo = document.getElementById("navB");
let nav1 = document.createElement("nav");
navTrabajo.innerHTML = `<nav class="navbar navbar-expand-lg bg-light">
<div class="container-fluid">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
  </div>
</div>
</nav>`;


let foot = document.getElementById("footerF");
let footer1 = document.createElement("footer");
foot.innerHTML = `        
<p>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
</p>

</svg>
<div class="reds">
<a href="https://www.instagram.com/" target="_blanck">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="44"
        height="44" viewBox="0 0 24 24" stroke-width="2" stroke="#fd0061" fill="none" stroke-linecap="round"
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3" />
        <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
    </svg>
</a>
<a href="https://www.facebook.com/" target="_blanck">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="44"
        height="44" viewBox="0 0 24 24" stroke-width="2" stroke="#00abfb" fill="none" stroke-linecap="round"
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
    </svg>
</a>

<a href="">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="44"
        height="44" viewBox="0 0 24 24" stroke-width="2" stroke="#00b341" fill="none" stroke-linecap="round"
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
            d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
    </svg>
</a>
</div>`

let explicacion = document.createElement("div");
explicacion.innerHTML = "<p>   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum obcaecati nihil voluptatum mollitia quae corporis tempora commodi deleniti minima sed aut adipisci, molestiae error harum tempore? Assumenda eos tenetur nulla.   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum obcaecati nihil voluptatum mollitia quae corporis tempora commodi deleniti minima sed aut adipisci, molestiae error harum tempore? Assumenda eos tenetur nulla.   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum obcaecati nihil voluptatum mollitia quae corporis tempora commodi deleniti minima sed aut adipisci, molestiae error harum tempore? Assumenda eos tenetur nulla.</p>";
document.body.append(explicacion);

// Cuenta ==========================================================================

let botonC = document.getElementById("submit")
botonC.addEventListener("click", respuestaClick)
function respuestaClick(){
  let usuario = document.getElementById("usuario").value
  let email = document.getElementById("email").value
  document.getElementById("info").innerText = `se a registrado la cuenta con el nombre de usuario de ${usuario} y con le email de ${email}`
}



form.addEventListener('mouseover',registro)
function registro(){
  console.log("ya te registraste?");
}

//  Juego =================================================================


const pregunta1 = document.getElementById('question1');
pregunta1.addEventListener('change', respuestaA =>{
  document.querySelector('resultado1');
  resultado1.innerText = `sos un  ${respuestaA.target.value}`
  document.getElementsByClassName("infoQ1").innerText = `Sos un: ${respuestaA}`
})

const pregunta2 = document.getElementById('question2');
pregunta2.addEventListener('change', respuestaB =>{
  document.querySelector('resultado2');
  resultado2.innerText = `Tu comida favorito es la: ${respuestaB.target.value}`
})

const pregunta3 = document.getElementById('question3');
pregunta3.addEventListener('change', respuestaC =>{
  document.querySelector('resultado3');
  resultado3.innerText = `Tu destino favorito es la/el: ${respuestaC.target.value}`
})


// Juego ==================================================================

// const listaJugadores = [];
// let jugadores = parseInt(prompt("Ingresar Numero de Jugadores"));
// do{
//    let entrada = prompt("Ingresar nombre");
//    listaJugadores.push(entrada.toUpperCase());
//    console.log(listaJugadores);
// }while(listaJugadores.length != jugadores)

