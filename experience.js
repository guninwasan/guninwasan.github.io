const ZenList = [
  `Developed features for a web application using React, Redux, and
  TypeScript allowing users to create and manage their insurance
  policies.`,
  `
    Worked closely with UI/UX designers to translate wireframes and
    mockups into functional code, ensuring a visually appealing and
    intuitive user interface.
  `,
  `
      Assisted in the development and implementation of a continuous integration and deployment (CI/CD) pipeline, automating the build, testing, and deployment processes, resulting in faster release cycles and improved software quality.
      `,
];

const CFCSList = [
  `Implemented features and modules for React Native and TypeScript
    applications that boosted the team's progress and helped reach the
    client's deadlines.`,
  `
    Reduced errors in the code by approximately 66% through
    participating in code reviews, debugging, and app testing.
      `,
  `
    Collaborated with cross-functional teams in an agile environment to
              build a mobile application for a client which is to be used in 8+
              countries.
      `,
];

document.addEventListener("DOMContentLoaded", function () {
  const experiences = [
    {
      company: "Zensurance",
      logo: "/assets/img/zen-logo.png",
      role: "Software Developer Co-op",
      description: ZenList,
      tools:
        "MongoDB, Salesforce, TypeScript, React, Redux, Sentry, Docker, Amplitude",
      period: "May 2023 - Sept. 2024",
      location: "Toronto, ON",
      link: "https://www.zensurance.com/",
    },
    {
      company: "CFCS Cloud Solutions",
      logo: "/assets/img/cfcs_logo.jpeg",
      role: "Software Developer Intern",
      description: CFCSList,
      tools: "React Native, Figma, TypeScript, Redux, Jest",
      period: "May 2022 - Aug. 2022",
      location: "Delhi, India",
      link: "https://www.cfcs.co.in",
    },
  ];

  const experienceContainer = document.getElementById("experience-container");

  experiences.sort(
    (a, b) =>
      new Date(b.period.split(" - ")[1]) - new Date(a.period.split(" - ")[1])
  );

  experiences.forEach((exp) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
            <div class="card-content">
                <div class="row">
                    <div class="col s12 m2">
                        <a href="${exp.link}" target="_blank"><img alt="${
      exp.company
    } logo" src="${exp.logo}" class="responsive-img center-block" /></a>
                    </div>
                    <div class="col s12 m10">
                        <p>
                            <span class="card-title"><a href="${
                              exp.link
                            }" target="_blank" class="teal-text hoverline">${
      exp.company
    }</a></span>
                        </p>
                    </div>
                </div>
                <div class="role text-darken-2">${exp.role}</div>
                <ul>
                    ${exp.description
                      .map((item) => `<li>${item}</li>`)
                      .join("")}
                    <li><b>Tools:</b> ${exp.tools}</li>
                </ul>
            </div>
            <div class="card-action">
                <span>${exp.period} | ${exp.location}</span>
            </div>
        `;

    experienceContainer.appendChild(card);
  });
});
