document.addEventListener('DOMContentLoaded', function() {
  function generateArtistHTML(data) {
    const artList = document.getElementById('artlist');
  
    data.forEach((artist, index) => {
      const artistDiv = document.createElement('div');
      artistDiv.classList.add('artist', 'fade-in-up');
      artistDiv.style.animationDelay = `${index * 400}ms`;
      artistDiv.setAttribute('onclick', `document.querySelector('.preloader').classList.add('fadeInBlack'); setTimeout(() => { window.location.href = '/artist'; }, 4000);`);
  
      const artContainer = document.createElement('div');
      artContainer.classList.add('art');
  
      const image = document.createElement('img');
      image.src = artist.imageSrc;
      image.alt = artist.alt;
      image.classList.add('artwork');
  
      const description = document.createElement('h2');
      description.classList.add('description');
      description.textContent = artist.alt;
  
      artContainer.appendChild(image);
      artContainer.appendChild(description);
  
      const artDetails = document.createElement('div');
      artDetails.classList.add('art-details');
  
      const textDiv = document.createElement('div');
      textDiv.classList.add('text');
  
      const nameHeading = document.createElement('h4');
      nameHeading.classList.add('art_title');
      nameHeading.textContent = artist.name;
  
      const locationPara = document.createElement('p');
      locationPara.classList.add('location');
      locationPara.textContent = artist.location;
  
      textDiv.appendChild(nameHeading);
      textDiv.appendChild(locationPara);
      artDetails.appendChild(textDiv);
  
      artistDiv.appendChild(artContainer);
      artistDiv.appendChild(artDetails);
  
      artList.appendChild(artistDiv);
    });
  }
  
  const artistData = [
    {
      imageSrc: 'art/Watcher_1.jpg',
      alt: 'Watcher 1 by Olumide Onadipe',
      name: 'Olumide Onadipe',
      location: 'Lagos, Nigeria'
    },
    {
      imageSrc: 'art/Elation_1.jpg',
      alt: 'Elation by Daniel Obiejesi',
      name: 'Daniel Obiejesi',
      location: 'Lagos, Nigeria'
    },
    {
      imageSrc: 'art/Room Mates 4, Acrylic on canvas, 42 inches by 42 inches, 2013.jpg',
      alt: 'Room Mates 4 by Ogbemi Heymann',
      name: 'Ogbemi Heymann',
      location: 'Lagos, Nigeria'
    }
  ];
    generateArtistHTML(artistData);
  });
  