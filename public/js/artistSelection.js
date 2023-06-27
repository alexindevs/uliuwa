document.addEventListener('DOMContentLoaded', function() {
    // Sample JSON data
    const artistData = [
      {
        imageSrc: 'art/Watcher_1.jpg',
        alt: 'Watcher 1',
        name: 'Olumide Onadipe',
        location: 'Lagos, Nigeria'
      },
      {
        imageSrc: 'art/Elation_1.jpg',
        alt: 'Elation',
        name: 'Daniel Obiejesi',
        location: 'Lagos, Nigeria'
      },
      {
        imageSrc: 'art/Room Mates 4, Acrylic on canvas, 42 inches by 42 inches, 2013.jpg',
        alt: 'Room Mates 4',
        name: 'Ogbemi Heymann',
        location: 'Lagos, Nigeria'
      }
    ];
  
    // Function to generate the HTML structure
    function generateArtistHTML(data) {
      const artList = document.getElementById('artlist');
  
      data.forEach((artist, index) => {
        const artistDiv = document.createElement('div');
        artistDiv.classList.add('artist', 'fade-in-up');
        artistDiv.style.animationDelay = `${index * 400}ms`;
        artistDiv.setAttribute('onclick', `document.querySelector('.preloader').classList.add('fadeInBlack'); setTimeout(() => { window.location.href = '/artist'; }, 4000);`);
        const image = document.createElement('img');
        image.src = artist.imageSrc;
        image.alt = artist.alt;
        image.classList.add('artwork');
  
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
  
        // const enquireButton = document.createElement('button');
        // enquireButton.classList.add('art-button');
        // enquireButton.textContent = 'EXPLORE';
  
        textDiv.appendChild(nameHeading);
        textDiv.appendChild(locationPara);
        artDetails.appendChild(textDiv);
        // artDetails.appendChild(enquireButton);
        artistDiv.appendChild(image);
        artistDiv.appendChild(artDetails);
        artList.appendChild(artistDiv);
      });
    }
  
    // Call the function with the artistData
    generateArtistHTML(artistData);
  });
  