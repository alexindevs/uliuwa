           // Define the artist data
            
           const artistData = [
            {
              name: "Artist 1",
              image: "art/Watcher_1.jpg",
              title: "WATCHER 1",
              description: "Olumide Onadipe",
            },
            {
              name: "Artist 2",
              image: "art/Caretaker, Acrylic on canvas, 48 inches by 48 inches, 2019.jpg",
              title: "CARETAKER",
              description: "Ogbemi Heymann",
            },
            {
              name: "Artist 3",
              image: "art/Shadow of Self.png",
              title: "SHADOW OF SELF",
              description: "Daniel Obiejesi",
            }
            // Add more artists as needed
          ];
          
          // Get the swiper wrapper element
          const swiperWrapper = document.querySelector('.swiper-wrapper');
          
          // Dynamically generate carousel slides based on artist data
          artistData.forEach(artist => {
            // Create the necessary elements for a slide
            const slide = document.createElement('div');
            slide.classList.add('swiper-slide');
          
            const artContainer = document.createElement('div');
            artContainer.classList.add('art');
          
            const image = document.createElement('img');
            image.classList.add('artwork');
            image.src = artist.image;
            image.alt = artist.title;
          
            const attribution = document.createElement('div');
            attribution.classList.add('attribution');
          
            const title = document.createElement('h2');
            title.classList.add('art_title', 'animate__animated', 'animate__fadeInUp');
            title.textContent = artist.title;
           
            const name = document.createElement('h5');
            name.textContent = artist.description;
          
            const exploreButton = document.createElement('button');
            exploreButton.classList.add('explore');
            exploreButton.textContent = 'Explore Now';
          
            // Append elements to the slide
            attribution.appendChild(title);
            attribution.appendChild(name);
            attribution.appendChild(exploreButton);
          
            artContainer.appendChild(image);
            artContainer.appendChild(attribution);
          
            slide.appendChild(artContainer);
          
            // Append the slide to the swiper wrapper
            swiperWrapper.appendChild(slide);
          });
          
          const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
          
            pagination: {
              el: '.swiper-pagination',
            }
                  });
          
          swiper.update();          
          const callback = (entries, observer) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const h2Elements = entry.target.querySelectorAll('h2');
                h2Elements.forEach(h2 => {
                  h2.classList.add('fade-in');
                });
                const buttonElements = entry.target.querySelectorAll('button');
                buttonElements.forEach(button => {
                  button.classList.add('fade-in');
                });
                const h5Elements = entry.target.querySelectorAll('h5');
                h5Elements.forEach(h5 => {
                  h5.classList.add('fade-in');
                });
              } else {
                const h2Elements = entry.target.querySelectorAll('h2');
                h2Elements.forEach(h2 => {
                  h2.classList.remove('fade-in');
                });
                const buttonElements = entry.target.querySelectorAll('button');
                buttonElements.forEach(button => {
                  button.classList.remove('fade-in');
                });
                const h5Elements = entry.target.querySelectorAll('h5');
                h5Elements.forEach(h5 => {
                  h5.classList.remove('fade-in');
                });
              }
            });
          };
          
          // Select the elements you want to observe
          const targetElements = document.querySelectorAll('.art');
          
          // Define the options for the Intersection Observer
          const options = {
            root: null, // Use the viewport as the root
            rootMargin: '0px', // No margin added to the root
            threshold: 0.7// 15% visibility threshold
          };

          


          
          
          // Create a new instance of the Intersection Observer
          const observer = new IntersectionObserver(callback, options);
          
          // Start observing the target elements
          targetElements.forEach(element => {
            observer.observe(element);
          });
          
          
          
          
          
        let carousel = document.querySelector('.swiper').swiper;
        function slideNext() {
            carousel.slideNext();
        }
        setInterval(slideNext, 11000);

          
              // Get all custom select elements on the page
const customSelects = document.querySelectorAll('.custom-select');

// Iterate over each custom select element
customSelects.forEach(selectContainer => {
  const selectSelected = selectContainer.querySelector('.select-selected');
  const selectItems = selectContainer.querySelector('.select-items');
  const selectOptions = Array.from(selectContainer.querySelectorAll('.select-item'));
  const originalSelect = selectContainer.querySelector('select');

  // Toggle the display of options when the select is clicked
  selectSelected.addEventListener('click', () => {
    selectItems.style.display = selectItems.style.display === 'block' ? 'none' : 'block';
  });

  // Set the selected option when an option is clicked
  selectOptions.forEach(option => {
    option.addEventListener('click', () => {
      selectSelected.innerHTML = option.innerHTML;
      originalSelect.value = option.getAttribute('data-value');
      selectItems.style.display = 'none';
    });
  });
});


window.addEventListener('load', () => {
  setTimeout(() => {
    const registerForm = document.getElementById('register');
    registerForm.style.display = 'block';
  }, 200000); // 60000 milliseconds = 1 minute
});

window.addEventListener('load', () => {
  const divElement = document.getElementById('your-div-id');
  const footerElement = document.getElementById('your-footer-id');
  
  // Set initial height on page load
  setDivHeight();

  // Set the height whenever the window is resized
  window.addEventListener('resize', setDivHeight);

  function setDivHeight() {
    const footerHeight = footerElement.offsetHeight;
    divElement.style.height = `${footerHeight}px`;
  }
});

window.addEventListener('load', () => {
  const footerElement = document.querySelector('footer');
  const mainAfterElement = document.querySelector('.after');

  // Set initial height on page load
  setMainAfterHeight();

  // Set the height whenever the window is resized
  window.addEventListener('resize', setMainAfterHeight);

  function setMainAfterHeight() {
    const footerHeight = footerElement.offsetHeight;
    mainAfterElement.style.height = `${footerHeight}px`;
  }
});

