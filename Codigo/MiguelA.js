const images = [
    "../imagenes/Izuku-Midoriya-Transparent.png",
    "../imagenes/Kachan.png",
    "../imagenes/Shoto.png",
    "../imagenes/lida.png",
    "../imagenes/Tokoyami.png",
    "../imagenes/Uraraka.png"
];

let currentIndex = 0;

const imageDisplay = document.getElementById("imageDisplay");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateImage() {
    imageDisplay.src = images[currentIndex];
}

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});
