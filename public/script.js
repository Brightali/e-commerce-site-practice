const productPhoto = document
  .getElementById("main-product-photo")
  .querySelector("img");
const productThumbnails = document.getElementById("product-thumbnails");
const cart = document.getElementById("cart");

function showCart() {
  cart.classList.toggle("hidden");
}

function openNav() {
  const mobileNav = document.getElementById("mobile-nav");
  const mobileNavList = document.getElementById("mobile-nav-list");

  mobileNavList.classList.remove("movingbackward");
  mobileNav.classList.toggle("hidden");
  mobileNavList.classList.add("movingforward");

  cart.classList.add("hidden");
}

function closeNav() {
  const mobileNav = document.getElementById("mobile-nav");
  const mobileNavList = document.getElementById("mobile-nav-list");
  mobileNavList.classList.add("movingbackward");
  setTimeout(() => {
    mobileNav.classList.toggle("hidden");
    mobileNavList.classList.remove("movingforward");
  }, 510);
}

const displayProductDetailPage = (id) => {
  // Use map to create the thumbnails HTML string
  productThumbnails.innerHTML = product[id].images
    .map(
      (image) =>
        `<button id="thumbnail-image" class="rounded-md overflow-hidden max-w-36" onclick="productThumbnailDisplay() ">
        <img src="${image.thumbnail}" alt="" class="w-full">
    </button>`
    )
    .join("");

  productPhoto.src = `${product[id].images[0].image}`;
};

displayProductDetailPage(0);

// click on the thumbnail to view larger image
const productThumbnailDisplay = () => {
  const thumbnails = document.querySelectorAll("#thumbnail-image");
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      const thumbnailIndex = Array.from(thumbnails).indexOf(thumbnail);
      productPhoto.src = `${product[0].images[thumbnailIndex].image}`;
    });
  });
};
