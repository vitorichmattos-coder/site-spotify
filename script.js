document.addEventListener("DOMContentLoaded", () => {
const artistsData = [
{ name: 'Henrique & Juliano', image: ' /img/spotiy — ImgBB_files/artista-henrique-juliano.jpg' }, 
{ name: 'Jorge & Mateus', image: ' /img/spotiy — ImgBB_files/artista-jorge-mateus.jpg' },
{ name:'Zé Neto & Cristiano', image: '/img/spotiy — ImgBB_files/artista-ze-neto.jpg'},
{ name: 'Gusttavo Lima', image: '/img/spotiy — ImgBB_files/artista-gustavo-limma.jpg'}, 
{ name: 'Luan Santana', image: '/img/spotiy — ImgBB_files/artista-luan-santana.jpg' },
 { name: 'Matheus & Kauan', image: '/img/spotiy — ImgBB_files/artista-mateus-kauan.jpg'},
 { name: 'Henrique & Juliano', image: ' /img/spotiy — ImgBB_files/artista-henrique-juliano.jpg' }, 
{ name: 'Jorge & Mateus', image: ' /img/spotiy — ImgBB_files/artista-jorge-mateus.jpg' },
{ name:'Zé Neto & Cristiano', image: '/img/spotiy — ImgBB_files/artista-ze-neto.jpg'},
{ name: 'Gusttavo Lima', image: '/img/spotiy — ImgBB_files/artista-gustavo-limma.jpg'}, 
{ name: 'Luan Santana', image: '/img/spotiy — ImgBB_files/artista-luan-santana.jpg' },
 { name: 'Matheus & Kauan', image: '/img/spotiy — ImgBB_files/artista-mateus-kauan.jpg'}
];

const albumsData = [
{ name: 'White Noise (Sleep & Relaxation Sounds)', artist: 'Sleepy John', image: './img/spotiy — ImgBB_files/album-white-noise.jpg'} ,
{ name: 'O Céu Explica Tudo (Ao Vivo)', artist: 'Henrique & Juliano', image: './img/spotiy — ImgBB_files/album-ceu-explica.jpg'},
{ name: 'Nada como um dia após o outro', artist: 'Racionais', image: '/img/album-racionais.jpg'},
 { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: '/img/spotiy — ImgBB_files/album-white-noise.jpg' },
 { name: 'CAJU', artist: 'Liniker', image: '/img/album-caju.jpg' }, 
 { name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image: '/img/album-escandalo.jpg' },
 { name: 'White Noise (Sleep & Relaxation Sounds)', artist: 'Sleepy John', image: './img/spotiy — ImgBB_files/album-white-noise.jpg'} ,
{ name: 'O Céu Explica Tudo (Ao Vivo)', artist: 'Henrique & Juliano', image: './img/spotiy — ImgBB_files/album-ceu-explica.jpg'},
{ name: 'Nada como um dia após o outro', artist: 'Racionais', image: '/img/album-racionais.jpg'},
 { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: '/img/spotiy — ImgBB_files/album-white-noise.jpg' },
 { name: 'CAJU', artist: 'Liniker', image: '/img/album-caju.jpg' }, 
 { name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image: '/img/album-escandalo.jpg' }
];

const albumstGrid = document.querySelector(".albums-grid")
const artistGrid = document.querySelector(".artist-grid")

artistsData.forEach( artist => {
const artistCard = document.createElement("div")
artistCard.classList.add("artist-card")

artistCard.innerHTML = `
<img src="${artist.image}" alt="${artist.name}">
<div><h3>${artist.name}</h3>
<p>artista</p></div>
`
artistGrid.appendChild(artistCard)

})

albumsData.forEach( album => {
const albumsCard= document.createElement("div");
albumsCard.classList.add("albunstiCard");
albumsCard.innerHTML =`
<img src="${album.image}" alt="${album.name}">

<div><h3>${album.name}</h3>
<p>${album.artist}</p></div>
`
albumstGrid.appendChild(albumsCard);
})

})




