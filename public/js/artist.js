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

  data.forEach((artist, index) => {
    const artistDiv = $('<div>').addClass('artist fade-in-up');
    artistDiv.css('animation-delay', `${index * 400}ms`);

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
    artDetails.append(enquireButton)
    artistDiv.append(image);
    artistDiv.append(artDetails);
    artList.append(artistDiv);
  });
}

// JavaScript for Exhibition Slider

// Select all slides
const slides = $(".exhibition");

// Loop through slides and set each slide's translateX property to index * 100%
slides.each(function(index) {
  $(this).css("transform", `translateX(${index * 100}%)`);
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

  // Move slide by -100%
  slides.each(function(index) {
    $(this).css("transform", `translateX(${100 * (index - curSlide)}%)`);
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

  // Move slide by 100%
  slides.each(function(index) {
    $(this).css("transform", `translateX(${100 * (index - curSlide)}%)`);
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

  
});

