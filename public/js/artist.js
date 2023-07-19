const artistData = [
  {
    imageSrc: 'art/Watcher_1.jpg',
    alt: 'Watcher 1',
    name: 'Olumide Onadipe',
    year: 2021,
    title: 'Watcher 1'
  },
  {
    imageSrc: 'art/Desire III, Acrylic on canvas, 42in x 36in 2022.jpg',
    alt: 'Elation',
    name: 'Daniel Obiejesi',
    year: 2022,
    title: 'Desire III, Acrylic on canvas, 42in x 36in 2022.jpg'
  },
  {
    imageSrc: 'art/Room Mates 4, Acrylic on canvas, 42 inches by 42 inches, 2013.jpg',
    alt: 'Room Mates 4',
    name: 'Ogbemi Heymann',
    year: 2013,
    title: 'Room Mates 4'
  }
];

function generateArtistHTML(data) {
  const artList = $('#artlist');

  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const artistDiv = entry.target;
        const index = $(artistDiv).index();

        $(artistDiv).addClass('fadeInUp');
        $(artistDiv).css('animation-delay', `${index * 400}ms`);

        observer.unobserve(artistDiv);
      }
    });
  };

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(callback, options);

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
    artList.append(artistDiv);

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
  generateArtistHTML(artistData);
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

