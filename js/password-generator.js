const randomCharacteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";
const passwordBtn = document.getElementById('passwordBtn');
let numDigPasswoord = document.getElementById('numCharacters');
let inputValue
const printPassword = document.getElementById('print-password');

numDigPasswoord.addEventListener('change',function () {
    inputValue = numDigPasswoord.value;
});

function passwoordGenerator() {
    let result = "";
    for (let i=0; i < inputValue; i++) {
        result += randomCharacteres.charAt(Math.floor(Math.random() * randomCharacteres.length))
    }
    printPassword.innerHTML = `Tu contraseña es: ${result}`;
;    return result;
}
passwordBtn.addEventListener('click', passwoordGenerator)

//TODO: (1) Validar min 12 y max 50 caracteres 
//TODO: (2) La contrasena debe tener 1 caracter de cada tipo. 
 

///////

function guardar_localStorage() {
    
    let persona = {
        nombre: "Jose",
        edad: 36,
        email: "334435@343.com",
        address: "skhfds"
    }

    let nombre = "Juan";

    localStorage.setItem("nombre", JSON.stringify(persona)) 
};

guardar_localStorage();