const educationContent = [
  {
    title: "University of Toronto",
    subTitle: `Bachelor’s, Computer Engineering with a minor in Business and
      Artificial Intelligence + Professional Experience Year (PEY)`,
    date1: "Sept. 2020",
    date2: "May 2025 [Expected]",
    location: "Toronto, ON",
    relevantCourses: [
      "Data Structures and Algorithms",
      "Deep Learning and Neural Networks",
      "Computer Networks",
      "Introduction to Machine Learning",
      "Engineering Economics and Entrepreneurship",
    ],
    honors: ["Dean’s Honor List", "ECE Ambassador"],
  },
  {
    title: "FAIPS, DPS Kuwait",
    subTitle: "AISSCE, CBSE",
    date1: "Sept. 2006",
    date2: "Jul. 2020",
    location: "Kuwait",
    honors: ["President Student Council 2019-20", "Computer Science: Rank # 1"],
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const educationContainer = document.getElementById("education-container");

  educationContent.forEach((edu) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <div class="card-content">
          <p>
            <span class="card-title teal-text hoverline">${edu.title}</span>
          </p>
          <p class="brown-text">${edu.location}</p>
          <p>
            <b>Degree: </b>${edu.subTitle}
            <br>
            <b>Dates: </b>${edu.date1} - ${edu.date2 || ""}
          </p>
          ${
            edu.relevantCourses
              ? `
          <p>
            <b>Relevant Coursework:</b>
            <ul>
              ${edu.relevantCourses
                .map((course) => `<li>${course}</li>`)
                .join("")}
            </ul>
          </p>`
              : ""
          }
          ${
            edu.honors
              ? `
          <p>
            <b>Honors:</b>
            <ul>
              ${edu.honors.map((honor) => `<li>${honor}</li>`).join("")}
            </ul>
          </p>`
              : ""
          }
        </div>
      `;

    educationContainer.appendChild(card);
  });
});
