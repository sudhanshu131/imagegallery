// Lightbox functionality
function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  lightbox.style.display = "flex";
  img.src = src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Filter functionality
function filterImages(category) {
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
    const images = Array.from(document.querySelectorAll(".gallery-item"));
let currentIndex = 0;

// Open lightbox
function openLightbox(src, index) {
  currentIndex = images.findIndex(img => img.src === src);
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  lightbox.style.display = "flex";
  img.src = src;
}

// Close lightbox
function closeLightbox(event) {
  if (event.target.id === "lightbox" || event.target.classList.contains("close")) {
    document.getElementById("lightbox").style.display = "none";
  }
}

// Show next image
function showNext(event) {
  event.stopPropagation();
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

// Show previous image
function showPrev(event) {
  event.stopPropagation();
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}


