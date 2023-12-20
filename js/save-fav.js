// A PARTIR DE AQUI EMPIEZA EL CODIGO 
const saveBtn = document.getElementById('saveBtn');
const olElement = document.querySelector('#pintar-links ol');
const nameFav = document.getElementById('name-fav').value;
const urlFav = document.getElementById('url-fav').value;
let parsedLinks = [];

// TODO: comprobar si hay datos en localstorage y pintarlos (funcion)

document.addEventListener('DOMContentLoaded', () => {
    const storedLinks = localStorage.getItem("favLink");
    if (storedLinks) {
        parsedLinks = JSON.parse(storedLinks);
        parsedLinks.forEach(favLink => {
            olElement.innerHTML += `<li><a href="${favLink.url}" target="_blank">${favLink.nombre}</a></li>`;
        });
    }
})

//Evento boton guardar
saveBtn.addEventListener('click', () => {
    const nameFav = document.getElementById('name-fav').value;
    const urlFav = document.getElementById('url-fav').value;
    addLink(nameFav, urlFav);
    saveLinkInLocalStorage();
});
//Funcion pintar nombre+enlace
const addLink = (nombreEnlace, URLDelEnlace) => {
    olElement.innerHTML += `<li><a href="${URLDelEnlace}" target="_blank">${nombreEnlace}</a></li>`;
};

//Funcion guardar y recuperar del LocalStorage
function saveLinkInLocalStorage() {
    const nameFav = document.getElementById('name-fav').value;
    const urlFav = document.getElementById('url-fav').value;
    let storedLinks = localStorage.getItem("favLink")
    let arrFavLinkObj = []
    if (storedLinks) {
        arrFavLinkObj = JSON.parse(storedLinks);
    }
    const favLinkObj = {
        nombre:nameFav,
        url:urlFav,
    }
    arrFavLinkObj.push(favLinkObj)
    localStorage.setItem('favLink', JSON.stringify(arrFavLinkObj));
}
