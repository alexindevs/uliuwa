const artistData = [
  {
    imageSrc: 'art/Watcher_1.jpg',
    alt: 'Watcher 1',
    name: 'Olumide Onadipe',
    year: 2021,
    title: 'Watcher 1'
  },
  
  {
    imageSrc: 'art/olumide (40).jpg',
    alt: 'Room Mates 4',
    name: 'Ogbemi Heymann',
    year: 2013,
    title: 'Room Mates 4'
  },
  {
    imageSrc: 'art/olumide (24).jpg',
    alt: 'Room Mates 4',
    name: 'Ogbemi Heymann',
    year: 2013,
    title: 'Room Mates 4'
  },
  {
    imageSrc: 'art/Desire III, Acrylic on canvas, 42in x 36in 2022.jpg',
    alt: 'Elation',
    name: 'Daniel Obiejesi',
    year: 2022,
    title: 'Desire III, Acrylic on canvas, 42in x 36in 2022.jpg'
  },
  {
    imageSrc: 'art/olumide (19).jpg',
    alt: 'Room Mates 4',
    name: 'Ogbemi Heymann',
    year: 2013,
    title: 'Room Mates 4'
  },
  {
    imageSrc: 'art/Circle of friends, Acrylic on canvas, 36in x 42in, 2022.jpg',
    alt: 'Room Mates 4',
    name: 'Ogbemi Heymann',
    year: 2013,
    title: 'Room Mates 4'
  },
];

function generateArtistHTML(data) {
  const artList = $('#artlist');

  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const artistDiv = entry.target;
        $(artistDiv).addClass('fadeInUp');
        observer.unobserve(artistDiv);
      }
    });
  };

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(callback, options);

  // Create three columns
  const numColumns = 3;
  const columns = Array.from({ length: numColumns }, () => $('<div>').addClass('art-column'));
  columns.forEach(column => artList.append(column));

  // Distribute artist items into columns
  data.forEach(artist => {
    const artistDiv = $('<div>').addClass('artist');
    const image = $('<img>').attr('src', artist.imageSrc).attr('alt', artist.alt).addClass('artwork');
    const artDetails = $('<div>').addClass('art-details');
    const textDiv = $('<div>').addClass('text');
    const nameHeading = $('<h4>').addClass('art_title').text(artist.name);
    const enquireButton = $('<button>').addClass('art-button').text('EXPLORE');
    const yearPara = $('<p>').addClass('year').text(artist.year);
    const titlePara = $('<p>').addClass('title').text(artist.title);

    textDiv.append(nameHeading);
    textDiv.append(yearPara);
    textDiv.append(titlePara);
    artDetails.append(textDiv);
    artDetails.append(enquireButton);
    artistDiv.append(image);
    artistDiv.append(artDetails);

    // Distribute artistDiv into columns
    const columnIndex = data.indexOf(artist) % numColumns;
    columns[columnIndex].append(artistDiv);

    observer.observe(artistDiv[0]);
  });
}





// JavaScript for Exhibition Slider

// Select all slides
const slides = $(".exhibition");

// Loop through slides and set each slide's opacity and z-index
slides.each(function(index) {
  const opacity = index === 0 ? 1 : 0; // First slide should be fully visible (opacity = 1)
  $(this).css({
    opacity: opacity,
    "z-index": slides.length - index // Higher z-index for the first slide, lower for subsequent slides
  });
});

// Select next slide button
const nextSlide = $(".exh-icon.right");

// Current slide counter
let curSlide = 0;
// Maximum number of slides
let maxSlide = slides.length - 1;

// Add event listener and navigation functionality
nextSlide.on("click", function() {
  // Check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  // Update the opacity and z-index of each slide
  slides.each(function(index) {
    const opacity = index === curSlide ? 1 : 0; // Set opacity to 1 for the current slide, 0 for others
    $(this).css({
      opacity: opacity,
      "z-index": slides.length - Math.abs(index - curSlide) // Higher z-index for the current slide, lower for others
    });
  });
});

// Select previous slide button
const prevSlide = $(".exh-icons .left");

// Add event listener and navigation functionality
prevSlide.on("click", function() {
  // Check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  // Update the opacity and z-index of each slide
  slides.each(function(index) {
    const opacity = index === curSlide ? 1 : 0; // Set opacity to 1 for the current slide, 0 for others
    $(this).css({
      opacity: opacity,
      "z-index": slides.length - Math.abs(index - curSlide) // Higher z-index for the current slide, lower for others
    });
  });
});

function toggleExhibitions(element) {
  var exhibitionId = '';

  if (element.textContent === 'Current') {
    exhibitionId = '#current';
  } else if (element.textContent === 'Past') {
    exhibitionId = '#past';
  } else if (element.textContent === 'Upcoming') {
    exhibitionId = '#upcoming';
  }

  // Remove the active class from all links
  $('.links a').removeClass('active');

  // Add the active class to the clicked link
  $(element).addClass('active');

  // Fade out all exhibition divs except the one with the selected ID
  $('.exhibitions').not(exhibitionId).fadeOut();

  // Fade in the exhibition div with the selected ID
  $(exhibitionId).fadeIn();
}



$(document).ready(function() {
  generateArtistHTML(artistData);

  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const h1Element = entry.target.querySelector('.art-title');
        const h4Element = entry.target.querySelector('.title');
  
        if (h1Element)
          h1Element.classList.add('fadeInUp');
        if (h4Element)
          h4Element.classList.add('fadeInUp');
      } else {
        const h1Element = entry.target.querySelector('.art-title');
        const h4Element = entry.target.querySelector('.title');
  
        if (h1Element)
          h1Element.classList.remove('fade-in');
        if (h4Element)
          h4Element.classList.remove('fade-in');
      }
    });
  };
  
  const targetElements = document.querySelectorAll('.text');
  
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7
  };
  
  const observer = new IntersectionObserver(callback, options);
  
  targetElements.forEach(element => {
    observer.observe(element);
  });  
})  

//Link Section

function toggleActiveLink(link) {
  const links = document.querySelectorAll('#links a');
  links.forEach(item => item.classList.remove('active'));
  link.classList.add('active');
}

const divsAndFontcolors = [
  {
    divName: "#about",
    color: "#1c1c1c"
  },
  {
    divName: "#artworks",
    color: "white"
  },
  {
    divName: "#biography",
    color: "#1c1c1c"
  },
  {
    divName: "#exhibitions",
    color: "white"
  }
];

function isInHeroViewport() {
  const hero = document.querySelector('#hero');
  if (!hero) return false;

  const rect = hero.getBoundingClientRect();
  const viewportTop = window.innerHeight * 0.97;
  return rect.top <= viewportTop;
}

const links = document.querySelectorAll('.jumplink');
const linksElement = document.getElementById('links');

if (window.innerWidth > 768) {
const callback = (entries) => {
  entries.forEach(entry => {
    const intersectingDivId = `#${entry.target.id}`;
    const colorObj = divsAndFontcolors.find(item => item.divName === intersectingDivId);

    if (colorObj) {
      links.forEach(link => {
        link.style.color = colorObj.color;
      });
    }
  });

  // Check if the top of the "hero" element is in the viewport
  if (isInHeroViewport()) {
    linksElement.style.display = 'none'; // Hide the links
  } else {
    linksElement.style.display = 'flex'; // Show the links
  }
};

const options = {
  threshold: 0 // Adjust as needed
};

const observer = new IntersectionObserver(callback, options);

divsAndFontcolors.forEach(item => {
  const div = document.querySelector(item.divName);
  if (div) {
    observer.observe(div);
  }
});

window.addEventListener('scroll', () => {
 
    if (!isInHeroViewport()) {
      linksElement.style.display = 'none'; // Hide the links
    } else {
      linksElement.style.display = 'flex'; // Show the links
    }
});
};