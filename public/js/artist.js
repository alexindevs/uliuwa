const artistData = [
  {
    imageSrc: 'art/Watcher_1.jpg',
    alt: 'Watcher 1',
    name: 'Olumide Onadipe',
    year: 2021,
    medium: 'Acrylic on canvas',
    dimensions: '42in x 36in',
    title: 'Watcher 1'
  },
  
  {
    imageSrc: 'art/olumide (40).jpg',
    alt: 'Room Mates 4',
    name: 'Ogbemi Heymann',
    year: 2013,
    medium: 'Digital',
    dimensions: '42in x 36in',
    title: 'Room Mates 4'
  },
  {
    imageSrc: 'art/olumide (24).jpg',
    alt: 'Room Mates 4',
    name: 'Ogbemi Heymann',
    year: 2013,
    medium: 'Digital',
    dimensions: '42in x 36in',
    title: 'Room Mates 4'
  },
  {
    imageSrc: 'art/Desire III, Acrylic on canvas, 42in x 36in 2022.jpg',
    alt: 'Elation',
    name: 'Daniel Obiejesi',
    year: 2022,
    medium: 'Acrylic on canvas',
    dimensions: '42in x 36in',
    title: 'Desire III, Acrylic on canvas, 42in x 36in 2022.jpg'
  },
  {
    imageSrc: 'art/olumide (19).jpg',
    alt: 'Room Mates 4',
    name: 'Ogbemi Heymann',
    year: 2013,
    medium: 'Digital',
    dimensions: '42in x 36in',
    title: 'Room Mates 4'
  },
  {
    imageSrc: 'art/Circle of friends, Acrylic on canvas, 36in x 42in, 2022.jpg',
    alt: 'Room Mates 4',
    name: 'Ogbemi Heymann',
    year: 2013,
    medium: 'Digital',
    dimensions: '42in x 36in',
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
  
  const numColumns = 3;
  const columns = Array.from({ length: numColumns }, () => $('<div>').addClass('art-column'));
  columns.forEach(column => artList.append(column));

   
   
  data.forEach(artist => {
    const artistDiv = $('<div>').addClass('artist');
    const image = $('<img>').attr('src', artist.imageSrc).attr('alt', artist.alt).addClass('artwork');
    const artDetails = $('<div>').addClass('art-details');
    const textDiv = $('<div>').addClass('text');
    const artMedium = $('<p>').addClass('art_medium').text(artist.medium);
    const artDimensions = $('<p>').addClass('art_dimensions').text(artist.dimensions);
    const nameHeading = $('<h4>').addClass('art_title').text(artist.name);
    const enquireButton = $('<button>').addClass('art-button').text('ENQUIRE');
    const yearPara = $('<p>').addClass('year').text(artist.year);
    const titlePara = $('<p>').addClass('title').text(artist.title);

    textDiv.append(nameHeading);
    textDiv.append(titlePara);
    textDiv.append(yearPara);
    textDiv.append(artMedium);
    textDiv.append(artDimensions);
    artDetails.append(textDiv);
    artDetails.append(enquireButton);
    artistDiv.append(image);
    artistDiv.append(artDetails);

     
    const columnIndex = data.indexOf(artist) % numColumns;
    columns[columnIndex].append(artistDiv);

    enquireButton.on('click', showOneView);

    observer.observe(artistDiv[0]);
  });
}

const form_x_icon = document.querySelector("#one-view .form svg");
const view_x_icon = document.querySelector("#one-view svg");
const oneView = document.querySelector("#one-view");
const oneView_form = document.querySelector("#one-view .form")
const enquireButton = document.querySelector(".art-display #enquireHref") 

view_x_icon.addEventListener("click", () => {
    oneView.style.display = "none";  
})

enquireButton.addEventListener("click", (e) => {
    e.preventDefault();
    oneView_form.style.display = "block";  
})

form_x_icon.addEventListener("click", () => {
    oneView_form.style.display = "none";
})


const showOneView = () => {
  oneView.style.display = "block";
}

 
const slides = $(".exhibition");

 
slides.each(function(index) {
  const opacity = index === 0 ? 1 : 0;  
  $(this).css({
    opacity: opacity,
    "z-index": slides.length - index  
  });
});

 
const nextSlide = $(".exh-icon.right");

 
let curSlide = 0;
 
let maxSlide = slides.length - 1;

 
nextSlide.on("click", function() {
   
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

   
  slides.each(function(index) {
    const opacity = index === curSlide ? 1 : 0;  
    $(this).css({
      opacity: opacity,
      "z-index": slides.length - Math.abs(index - curSlide)  
    });
  });
});

 
const prevSlide = $(".exh-icons .left");

 
prevSlide.on("click", function() {
   
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

   
  slides.each(function(index) {
    const opacity = index === curSlide ? 1 : 0;  
    $(this).css({
      opacity: opacity,
      "z-index": slides.length - Math.abs(index - curSlide)  
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

   
  $('.links a').removeClass('active');

   
  $(element).addClass('active');

   
  $('.exhibitions').not(exhibitionId).fadeOut();

   
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

   
  if (isInHeroViewport()) {
    linksElement.style.display = 'none';  
  } else {
    linksElement.style.display = 'flex';  
  }
};

const options = {
  threshold: 0  
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
      linksElement.style.display = 'none';  
    } else {
      linksElement.style.display = 'flex';  
    }
});
};

