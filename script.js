// Image data array
const images = [
  { url: "https://picsum.photos/id/1015/400/300", caption: "Mountain View", favorite: true },
  { url: "https://picsum.photos/id/1016/400/300", caption: "Forest Path", favorite: false },
  { url: "https://picsum.photos/id/1018/400/300", caption: "River Side", favorite: true },
  { url: "https://picsum.photos/id/1020/400/300", caption: "Snow Peaks", favorite: false },
  { url: "https://picsum.photos/id/1024/400/300", caption: "Puppy Love", favorite: true }
];

const gallery = document.getElementById("gallery");
const toggleBtn = document.getElementById("toggleMode");
const filterBtn = document.getElementById("filterFavorites");

let showFavorites = false;

// Function to render gallery
function renderGallery() {
  gallery.innerHTML = ""; // Clear existing
  const filtered = showFavorites ? images.filter(img => img.favorite) : images;

  filtered.forEach(img => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${img.url}" alt="${img.caption}">
      <div class="caption">${img.caption}</div>
    `;

    gallery.appendChild(card);
  });
}

// Toggle light/dark mode
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Filter favorites
filterBtn.addEventListener("click", () => {
  showFavorites = !showFavorites;
  filterBtn.textContent = showFavorites ? "Show All" : "Show Favorites Only";
  renderGallery();
});

// Initial render
renderGallery();
