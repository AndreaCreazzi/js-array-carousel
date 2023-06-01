// xontrollo js
console.log(`JS OK`);

// elementi presi dal DOM

const prevElement = document.getElementById(`prev`);

const nextElement = document.getElementById(`next`);

const galleryElement = document.querySelector(`.gallery`);

// lista img

const sources = [`img/01.webp` , `img/02.webp` , `img/03.webp` , `img/04.webp` , `img/05.webp`];

// preparo l'html

let imageElements = ``;

// per ogni img inserisco il tag

for(let i = 0 ; i < sources.length ; i++){
    imageElements += `<img src="${sources[i]}" alt="Gaming ${i + 1}" >`;
};

// inserisco gli elemnti nel DOM

galleryElement.innerHTML = imageElements;

// recupero le img

const images = document.querySelectorAll(`#carousel img`);

// gestione index

let currentIndex = 0;

images[currentIndex].classList.add(`active`);

// metto in ascolto il prev

nextElement.addEventListener(`click` , function(){
    if(currentIndex === images.length - 1) return;

    images[currentIndex].classList.remove(`active`)

    currentIndex++;

    images[currentIndex].classList.add(`active`)
})


prevElement.addEventListener(`click` , function(){
    if(!currentIndex) return;

    images[currentIndex].classList.remove(`active`)

    currentIndex--;

    images[currentIndex].classList.add(`active`)
})

