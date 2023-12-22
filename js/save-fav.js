// A PARTIR DE AQUI EMPIEZA EL CODIGO 
const saveBtn = document.getElementById('saveBtn');
const olElement = document.querySelector('#pintar-links ol');
const nameFav = document.getElementById('name-fav').value;
const urlFav = document.getElementById('url-fav').value;
const liElement = document.getElementsByClassName("deleteLink");
let parsedLinks = [];

// TODO: comprobar si hay datos en localstorage y pintarlos (funcion)

function deleteLink(element, index) { // element = this = <button class="delete"...
    const removeLi = element.parentNode;
    olElement.removeChild(removeLi);
    let storedLinks = JSON.parse(localStorage.getItem("favLink"));
    if (storedLinks.length) {
        storedLinks.splice(index, index+1);
        localStorage.setItem("favLink", JSON.stringify(storedLinks));
        console.log(storedLinks);
    } 
}

document.addEventListener('DOMContentLoaded', () => {
    const storedLinks = localStorage.getItem("favLink");
    if (storedLinks) {
        parsedLinks = JSON.parse(storedLinks);
        parsedLinks.forEach((favLink, index) => {
            olElement.innerHTML += `<li><a href="${favLink.url}" target="_blank">${favLink.nombre}</a><button class="deleteLink" onclick="deleteLink(this, ${index})">x</button></li>`;
        });
    }

    document.querySelector('.deleteLink').addEventListener('click', function() {
        
    })
    
    function deleteEachLink() {
        const deleteEachLink = document.querySelector(".deleteLink");
        deleteEachLink.innerHTML = "";
    }
})

//Evento boton guardar
saveBtn.addEventListener('click', () => {
    const nameFav = document.getElementById('name-fav').value;
    const urlFav = document.getElementById('url-fav').value;
    let storedLinks = JSON.parse(localStorage.getItem("favLink"));
    addLink(nameFav, urlFav, storedLinks.length);
    saveLinkInLocalStorage();
});

//Funcion pintar nombre+enlace
const addLink = (nombreEnlace, URLDelEnlace, totalFavLinks) => {
    olElement.innerHTML += `<li><a href="${URLDelEnlace}" target="_blank">${nombreEnlace}</a><button class="deleteLink" onclick="deleteLink(this, ${totalFavLinks})">x</button></li>`;
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

