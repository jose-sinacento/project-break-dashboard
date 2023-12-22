let backgroundImages = [
    "./assets/background-images/ajeet-mestry-UBhpOIHnazM-unsplash-17.jpeg",
    "./assets/background-images/annie-spratt-PM4Vu1B0gxk-unsplash-6.jpeg",
    "./assets/background-images/arafah-n-iman-tPGsxOjNAWk-unsplash-2.jpeg",
    "./assets/background-images/austin-chan-ukzHlkoz1IE-unsplash-18.jpeg",
    "./assets/background-images/chris-liverani-YBR-AWm1HQ4-unsplash-15.jpeg",
    "./assets/background-images/cristian-escobar-abkEAOjnY0s-unsplash-12.jpeg",
    "./assets/background-images/david-kovalenko-G85VuTpw6jg-unsplash-16.jpeg",
    "./assets/background-images/emily-morter-8xAA0f9yQnE-unsplash-4.jpeg",
    "./assets/background-images/florian-klauer-mk7D-4UCfmg-unsplash-8.jpeg",
    "./assets/background-images/franz-harvin-aceituna-lAtB1MVe3S0-unsplash-3.jpeg",
    "./assets/background-images/icons8-team-dhZtNlvNE8M-unsplash-7.jpeg",
    "./assets/background-images/jake-blucker-tMzCrBkM99Y-unsplash-15.jpeg",
    "./assets/background-images/manki-kim-mv7kxYh5Rko-unsplash-1.jpeg",
    "./assets/background-images/namroud-gorguis-FZWivbri0Xk-unsplash-9.jpeg",
    "./assets/background-images/patrick-tomasso-n-vxsHr9jZA-unsplash-11.jpeg",
    "./assets/background-images/ryan-irwansyah-ExCx8e_I4-Y-unsplash-5.jpeg",
    "./assets/background-images/sebastian-svenson-d2w-_1LJioQ-unsplash.jpeg",
    "./assets/background-images/stormseeker-rX12B5uX7QM-unsplash-13.jpeg",
    "./assets/background-images/thought-catalog-9aOswReDKPo-unsplash-14.jpeg",
    "./assets/background-images/toa-heftiba-DUXACn8tgp4-unsplash-15.jpeg",
]
let bodyBackground = document.getElementById("body-background");

function imgDisplay() {
    let index = Math.floor(Math.random() * backgroundImages.length);
    document.body.style.backgroundImage = `url(${backgroundImages[index]})`;
    document.body.style.backgroundRepeat = "no-repeat";
    
};

setInterval(imgDisplay, 30000);

imgDisplay();