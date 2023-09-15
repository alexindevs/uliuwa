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
  
  generateArtistHTML(artistData);