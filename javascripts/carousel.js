// Autoplay carousel logic
function autoplayCarousel() {
    const carousel = document.getElementById('carousel');
    let carouselWidth = carousel.offsetWidth;
    const carouselInner = carousel.querySelector('.carousel-inner');
    const carouselItems = carouselInner.getElementsByClassName('carousel-item');
    const totalItems = carouselItems.length;
    let currentItem = 0;
  
    function adjustCarouselWidth() {
      carouselWidth = carousel.offsetWidth;
      carouselInner.style.transform = `translateX(${currentItem * -carouselWidth}px)`;
    }
  
    window.addEventListener('resize', adjustCarouselWidth);
  
    setInterval(() => {
      const nextItem = (currentItem + 1) % totalItems;
      const transformValue = -1 * nextItem * carouselWidth;
      carouselInner.style.transform = `translateX(${transformValue}px)`;
      currentItem = nextItem;
    }, 3000);
  }
  
  // Run autoplay carousel when the page loads
  window.addEventListener('load', autoplayCarousel);