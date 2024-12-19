document.addEventListener('DOMContentLoaded', function () {
    const mainTitles = document.querySelectorAll('.main-title, .main-title-2, .main-title-3');

    function animateTitles() {
        mainTitles.forEach((title, index) => {
            let positionX = -title.offsetWidth;
            title.style.transform = `translateX(${positionX}px)`;

            function moveTitles() {
                positionX += 1;

                if (positionX >= window.innerWidth) {
                    positionX = -title.offsetWidth;
                }

                title.style.transform = `translateX(${positionX}px)`;

                requestAnimationFrame(moveTitles);
            }

            setTimeout(() => {
                moveTitles();
            }, index * 5000);
        });
    }

    animateTitles();
});

const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');


const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Image is in the viewpoint
        entry.target.classList.add('animate');
      } else {
        // Image is out of the viewpoint
        entry.target.classList.remove('animate');
      }
    });
  },
  {
    rootMargin: '0px',
    threshold: 0.5, // Trigger the animation when the image is 50% in the viewport
  }
);

// Observe the images
observer.observe(img1);
observer.observe(img2);
observer.observe(img3);