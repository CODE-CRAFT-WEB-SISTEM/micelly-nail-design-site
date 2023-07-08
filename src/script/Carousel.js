const carousel = document.getElementById("carousel");

let imagens = {
  img1: "./src/images/modelos/mdl1.jpg",
  img2: "./src/images/modelos/mdl2.jpg",
  img3: "./src/images/modelos/mdl3.jpg",
  img4: "./src/images/modelos/mdl4.jpg",
  img5: "./src/images/modelos/mdl5.jpg",
  img6: "./src/images/modelos/mdl6.jpg",
  img7: "./src/images/modelos/mdl7.jpg",
  img8: "./src/images/modelos/mdl8.jpg",
  img9: "./src/images/modelos/mdl9.jpg",
  img10: "./src/images/modelos/mdl10.jpg",
  img11: "./src/images/modelos/mdl11.jpg",
  img12: "./src/images/modelos/mdl12.jpg",
};

const {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
} = imagens;

carousel.innerHTML = `
<div class="caroselAnimated">
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="${img1}" class="d-block w-100" alt="imageCarousel">
        </div>
        <div class="carousel-item">
            <img src="${img2}" class="d-block w-100" alt="imageCarousel">
        </div>
        <div class="carousel-item">
            <img src="${img3}" class="d-block w-100" alt="imageCarousel">
        </div>
        <div class="carousel-item">
            <img src="${img4}" class="d-block w-100" alt="imageCarousel">
        </div>
        <div class="carousel-item">
            <img src="${img5}" class="d-block w-100" alt="imageCarousel">
        </div>
        <div class="carousel-item">
            <img src="${img6}" class="d-block w-100" alt="imageCarousel">
        </div>
        <div class="carousel-item">
            <img src="${img7}" class="d-block w-100" alt="imageCarousel">
        </div>
        <div class="carousel-item">
            <img src="${img8}" class="d-block w-100" alt="imageCarousel">
        </div>
        <div class="carousel-item">
            <img src="${img9}" class="d-block w-100" alt="imageCarousel">
        </div>
        <div class="carousel-item">
            <img src="${img10}" class="d-block w-100" alt="imageCarousel">
        </div>
        <div class="carousel-item">
            <img src="${img11}" class="d-block w-100" alt="imageCarousel">
        </div>
        <div class="carousel-item">
            <img src="${img12}" class="d-block w-100" alt="imageCarousel">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
</div>
`;
