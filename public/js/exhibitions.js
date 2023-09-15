// Object for past exhibitions
const pastExhibitions = [
    {
      name: "Chairman 1",
      date: "July 12 to July 24, 2022",
      location: "A shady hotel in Barbados",
      description: "A short line giving a little detail about the exhibition. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, aperiam.",
      imageSrc: "art/Homeostasis.jpg"
    },
    // Add more past exhibitions as needed
  ];
  
  // Object for upcoming exhibitions
  const upcomingExhibitions = [
    {
      name: "Chairman 1",
      date: "July 12 to July 24, 2023",
      location: "A shady hotel in Barbados",
      description: "A short line giving a little detail about the exhibition. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, aperiam.",
      imageSrc: "art/Homeostasis.jpg"
    },
    {
        name: "Chairman 1",
        date: "July 12 to July 24, 2023",
        location: "A shady hotel in Barbados",
        description: "A short line giving a little detail about the exhibition. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, aperiam.",
        imageSrc: "art/Homeostasis.jpg"
      },
      {
        name: "Chairman 1",
        date: "July 12 to July 24, 2023",
        location: "A shady hotel in Barbados",
        description: "A short line giving a little detail about the exhibition. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, aperiam.",
        imageSrc: "art/Homeostasis.jpg"
      },
    // Add more upcoming exhibitions as needed
  ];
  
  // Object for current exhibitions
  const currentExhibitions = [
    {
      name: "Chairman 1",
      date: "June 12 to July 24, 2023",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nisi magnam officia, a porro eligendi quod facere, maiores suscipit harum dolorum voluptas sapiente quae. Ipsum neque illo quibusdam, dicta impedit, veritatis ullam iure accusamus aut fuga asperiores modi natus amet praesentium recusandae eos, fugiat reiciendis dolore. Ab culpa pariatur nesciunt consequuntur repellat sint, doloribus dignissimos possimus iste dolorem nemo excepturi.",
      imageSrc: "art/olumide (16).jpg"
    },
    {
        name: "Chairman 1",
        date: "June 12 to July 24, 2023",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nisi magnam officia, a porro eligendi quod facere, maiores suscipit harum dolorum voluptas sapiente quae. Ipsum neque illo quibusdam, dicta impedit, veritatis ullam iure accusamus aut fuga asperiores modi natus amet praesentium recusandae eos, fugiat reiciendis dolore. Ab culpa pariatur nesciunt consequuntur repellat sint, doloribus dignissimos possimus iste dolorem nemo excepturi.",
        imageSrc: "art/olumide (16).jpg"
      },
      {
        name: "Chairman 1",
        date: "June 12 to July 24, 2023",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nisi magnam officia, a porro eligendi quod facere, maiores suscipit harum dolorum voluptas sapiente quae. Ipsum neque illo quibusdam, dicta impedit, veritatis ullam iure accusamus aut fuga asperiores modi natus amet praesentium recusandae eos, fugiat reiciendis dolore. Ab culpa pariatur nesciunt consequuntur repellat sint, doloribus dignissimos possimus iste dolorem nemo excepturi.",
        imageSrc: "art/olumide (16).jpg"
      },
    // Add more current exhibitions as needed
  ];
  

  // Function to render exhibitions
  // Function to render archive exhibitions
function renderArchiveExhibitions(archiveExhibitions) {
    const archiveContainer = document.getElementById("archive");
  
    archiveExhibitions.forEach((exhibition) => {
      const exhibitionDiv = createExhibitionDiv(exhibition, "past-exhibition"); // Specify the exhibition type
      archiveContainer.appendChild(exhibitionDiv);
    });
}

// Function to render current exhibitions
function renderCurrentExhibitions(currentExhibitions, featuredIndex) {
    const currentContainer = document.getElementById("current");
  
    // Check if the main and side divisions exist; if not, create them
    let main = document.querySelector(".main");
    let side = document.querySelector(".side");
  
    if (!main) {
        main = document.createElement("div");
        main.classList.add("main");
        currentContainer.appendChild(main);
    }
  
    if (!side) {
        side = document.createElement("div");
        side.classList.add("side");
        currentContainer.appendChild(side);
    }
  
    currentExhibitions.forEach((exhibition, index) => {
        const exhibitionType = index === featuredIndex ? "current-exhibition" : "current-exhibition"; // Determine the exhibition type
        const exhibitionDiv = createExhibitionDiv(exhibition, exhibitionType);
  
        if (index === featuredIndex) {
            main.appendChild(exhibitionDiv);
        } else {
            side.appendChild(exhibitionDiv);
        }
    });
}


// Function to render upcoming exhibitions
function renderUpcomingExhibitions(upcomingExhibitions) {
    const upcomingContainer = document.getElementById("upcoming");
  
    upcomingExhibitions.forEach((exhibition) => {
      const exhibitionDiv = createExhibitionDiv(exhibition, "future-exhibition"); // Specify the exhibition type
      upcomingContainer.appendChild(exhibitionDiv);
    });
}

// Helper function to create an exhibition div
function createExhibitionDiv(exhibition, exhibitionType) {
    const exhibitionDiv = document.createElement("div");
    exhibitionDiv.classList.add(exhibitionType); // Add the appropriate class based on exhibition type
    
    const image = document.createElement("img");
    image.src = exhibition.imageSrc;
    image.alt = exhibition.name;
    image.classList.add("exh-img"); // Add image class
    
    const textDiv = document.createElement("div");
    textDiv.classList.add("text");
    
    const nameHeading = document.createElement("h2");
    nameHeading.classList.add("exh-name"); // Add name class
    nameHeading.textContent = exhibition.name;
    
    const dateHeading = document.createElement("h4");
    dateHeading.classList.add("exh-date"); // Add date class
    dateHeading.textContent = exhibition.date;
    
    const descriptionPara = document.createElement("p");
    descriptionPara.classList.add("description"); // Add description class
    descriptionPara.textContent = exhibition.description;
    
    textDiv.appendChild(nameHeading);
    textDiv.appendChild(dateHeading);
    textDiv.appendChild(descriptionPara);
    
    exhibitionDiv.appendChild(image);
    exhibitionDiv.appendChild(textDiv);
    
    return exhibitionDiv;
}

// Call the rendering functions
renderArchiveExhibitions(pastExhibitions);
renderCurrentExhibitions(currentExhibitions, 0); // 0 represents the featured index, change as needed
renderUpcomingExhibitions(upcomingExhibitions);


// Get references to the links and sections
const archiveLink = document.querySelector('a[href="#archive"]');
const currentLink = document.querySelector('a[href="#current"]');
const upcomingLink = document.querySelector('a[href="#upcoming"]');
const archiveSection = document.getElementById('archive');
const currentSection = document.getElementById('current');
const upcomingSection = document.getElementById('upcoming');

// Function to toggle the active link and display the corresponding section

function toggleSection(sectionToShow, linkToActivate) {
  const mediaQuery = window.matchMedia('(max-width:500px)')
  // Hide all sections
    archiveSection.style.display = 'none';
    currentSection.style.display = 'none';
    upcomingSection.style.display = 'none';

    // Deactivate all links
    archiveLink.classList.remove('active');
    currentLink.classList.remove('active');
    upcomingLink.classList.remove('active');

    if(mediaQuery.matches) {
      sectionToShow.style.display = 'grid';
      // sectionToShow.style. = 'row';
    } else {
    sectionToShow.style.display = 'flex';
    }
    // Display the selected section

    // Activate the selected link
    linkToActivate.classList.add('active');
}

// Event listeners for link clicks
archiveLink.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    toggleSection(archiveSection, archiveLink);
});

currentLink.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    toggleSection(currentSection, currentLink);
});

upcomingLink.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    toggleSection(upcomingSection, upcomingLink);
});
