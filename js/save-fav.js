

// PRACTICA LOCALSTORAGE 
function guardar_localStorage() {
    
    let persona = {
        nombre: "Jose",
        edad: 36,
        email: "334435@343.com",
        address: "skhfds"
    }

    let nombre = "Juan";

    localStorage.setItem("nombre", JSON.stringify(persona))
    localStorage.setItem("nombre2", nombre);
};

guardar_localStorage();

// CON ESTA FUNCION PUEDO PINTAR LO QUE ESTA GUARDADO SI HAY ALGO EN LOCAL STORAGE
function obtener_localStorage() {

    if (localStorage) {
        console.log('Si hay informacion')
        let nombre = JSON.parse(localStorage.getItem("nombre"));
        let nombre2 = localStorage.getItem("nombre2");
        console.log(nombre);
        console.log(nombre2);
    } else {
        console.log("no hay nada en localStorage");
    }

}

obtener_localStorage();
