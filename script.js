const itemsPerPage = 9;
let currentPage = 1;
const gallery = document.querySelector('.gallery');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const items = document.querySelectorAll('.item');
const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');
const overlayTitle = document.getElementById('overlay-title');
const overlayDescription = document.getElementById('overlay-description');
const closeBtn = document.getElementById('closeBtn');
const downloadBtn = document.getElementById('downloadBtn');
const shareBtn = document.getElementById('shareBtn');
const likeBtn = document.getElementById('likeBtn');
const imageSound = document.getElementById('imageSound');

function playImageSound() {
  imageSound.currentTime = 0;
  imageSound.play();
}

function showPage(page) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  items.forEach((item, index) => {
    if (index >= startIndex && index < endIndex) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function updatePaginationButtons() {
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === Math.ceil(items.length / itemsPerPage);
}

function showLargeImage(imageSrc, title, description) {
  overlayImg.src = imageSrc;
  overlayTitle.textContent = title;
  overlayDescription.textContent = description;
  overlay.classList.add('active');
  playImageSound(); // Memainkan efek suara saat gambar diperbesar
}

function closeLargeImage() {
  overlay.classList.remove('active');
}

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
    updatePaginationButtons();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < Math.ceil(items.length / itemsPerPage)) {
    currentPage++;
    showPage(currentPage);
    updatePaginationButtons();
  }
});

closeBtn.addEventListener('click', closeLargeImage);

showPage(currentPage);
updatePaginationButtons();
