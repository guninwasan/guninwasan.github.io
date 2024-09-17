const projectsContent = [
  {
    title: "PacBots",
    subTitle: "University of Toronto Robotics Association (UTRA)",
    date1: "Apr. 2023",
    date2: "May 2024",
    location: "Toronto, ON",
    image: "/assets/img/project-aim_bert-bias.png",
    description:
      "Pacbots is a robotics competition hosted by Harvard University.",
    details: [
      "Spearheaded the strategic planning and execution of software and algorithm development for the highly competitive Harvard PacBots competition.",
      "Utilized industry-leading practices in software development to ensure robustness, efficiency, and scalability of codebase.",
    ],
    liveLink: "https://www.utra.ca/teams/pacbot/",
    sourceLink: "https://www.utra.ca/teams/pacbot/",
  },
  {
    title: "University of Toronto Hackathon (UofTHacks)",
    subTitle: "University of Toronto Hackathon (UofTHacks)",
    date1: "Jul. 2022",
    date2: "Mar. 2024",
    location: "Toronto, ON",
    image: "/assets/img/project-quizup-logo-1.png",
    description: "We created portals for hackers and executives.",
    details: [
      "Orchestrated the development of hacker and executive dashboard, leveraging Next.js, Stitches, Redux, and REST APIs, to deliver an unparalleled UX for a community of 1000+ applicants and executives.",
      "Coordinated cross-functional collaboration with designers, backend developers, and Project Manager to ensure seamless integration and delivery of hackathon web projects.",
      "Streamlined team operations by implementing agile methodologies, resulting in increased productivity, enhanced collaboration, and timely project deliveries.",
    ],
    liveLink: "https://uofthacks.com",
    sourceLink: "https://uofthacks.com",
  },
  {
    title: "RoomTone",
    subTitle: "MakeUofT",
    date1: "Feb. 2023",
    image: "/assets/img/project-music-player.png",
    description: "A simple and extensible blog web-app based on Flask.",
    details: [
      "Collaborated with a team of 4 to develop a hardware-software combo package, integrating Ray Tracing Algorithm with Qualcomm Snapdragon HDK to enable accurate acoustical analysis of room environments for optimal speaker placement.",
      "Designed and developed an interactive 3D visualization website, leveraging React.js and RESTful API integration, to provide users with an immersive experience of room acoustics and analysis results.",
      "Received recognition from the event judges for exemplary resource allocation, and the best use of Qualcomm Snapdragon HDK.",
    ],
    liveLink: "https://room-tone.vercel.app",
    sourceLink: "https://devpost.com/software/room-tone",
  },
  {
    title: "Lyft Mobile Engineering Virtual Experience",
    subTitle: "Lyft & Forage",
    date1: "Aug. 2022",
    image: "/assets/img/project-blog-logo.jpg",
    description:
      "An attention-based classification model that aims at generating an answer for a given input image.",
    details: [
      "Engaged in Lyft's iOS App Development Program, actively coding in Swift to contribute to the development of various projects.",
      "Formulated a visually appealing user interface for the ride history feature, proficiently categorizing rides into personal and business segments.",
      "Engineered a sophisticated system to retrieve the user's precise location while concurrently ensuring seamless verification and management of location permissions on the device.",
    ],
    liveLink: "https://github.com/guninwasan/Lyft-Mobile-Engineering",
    sourceLink: "https://github.com/guninwasan/Lyft-Mobile-Engineering",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const recentProjectsContainer = document.getElementById("recent-projects");
  const allProjectsContainer = document.getElementById("all-projects");
  const loadMoreButton = document.getElementById("load-more");

  let projectsDisplayed = 2;

  function createProjectCard(project) {
    const card = document.createElement("div");
    card.className = "col s12 m6 l4";

    card.innerHTML = `
        <div class="card medium">
          <div class="card-image waves-effect waves-block waves-light">
            <img alt="${project.description}" src="${
      project.image
    }" style="height: 100%; width: 100%" class="activator" />
          </div>
          <div class="card-content">
            <span class="card-title activator teal-text hoverline">${
              project.title
            }<i class="mdi-navigation-more-vert right"></i></span>
            <p>${project.description}</p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text"><small>Accomplishments</small><i class="mdi-navigation-close right green-text"></i></span>
            <div class="card-reveal-content">
              <ul>
                ${project.details
                  .map((detail) => `<li>${detail}</li>`)
                  .join("")}
              </ul>
              <div class="card-action">
                ${
                  project.liveLink
                    ? `<a aria-label="Visit" href="${project.liveLink}" target="_blank" data-position="top" data-tooltip="View Online" class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i class="fa fa-external-link"></i></a>`
                    : ""
                }
                <a aria-label="Visit the GitHub repo for project" href="${
                  project.sourceLink
                }" target="_blank" data-position="top" data-tooltip="View Source" class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i class="fa fa-github"></i></a>
              </div>
            </div>
          </div>
        </div>
      `;

    return card;
  }

  function displayProjects() {
    recentProjectsContainer.innerHTML = "";
    allProjectsContainer.innerHTML = "";

    const recentProjects = projectsContent.slice(0, projectsDisplayed);
    recentProjects.forEach((project) => {
      recentProjectsContainer.appendChild(createProjectCard(project));
    });

    if (projectsDisplayed < projectsContent.length) {
      loadMoreButton.style.display = "block";
    } else {
      loadMoreButton.style.display = "none";
    }
  }

  function loadMoreProjects() {
    projectsDisplayed = projectsContent.length;
    displayProjects();
  }

  loadMoreButton.addEventListener("click", loadMoreProjects);

  // Initial display
  projectsContent.sort((a, b) => new Date(b.date1) - new Date(a.date1));
  displayProjects();
});
