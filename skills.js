document.addEventListener("DOMContentLoaded", function () {
  const skills = {
    languages: [
      { name: "C++", img: "/assets/img/c++.png" },
      { name: "JavaScript", img: "/assets/img/js.png" },
      { name: "Python", img: "/assets/img/python.png" },
      { name: "C", img: "/assets/img/c.png" },
    ],
    webTechnologies: [
      { name: "HTML5", img: "/assets/img/html-dark.png" },
      { name: "CSS3", img: "/assets/img/css-dark.png" },
      { name: "React", img: "/assets/img/react.png" },
      { name: "Next.js", img: "/assets/img/next-dark.png" },
      { name: "TypeScript", img: "/assets/img/ts.png" },
      { name: "Django", img: "/assets/img/django-logo.webp" },
      { name: "Flask", img: "/assets/img/flask-logo.png" },
    ],
    databasesAndLibraries: [
      { name: "PostgreSQL", img: "/assets/img/postgresql-logo.png" },
      { name: "MySQL", img: "/assets/img/mysql-logo-1-300x300.jpg" },
      { name: "MongoDB", img: "/assets/img/mongo.png" },
      { name: "NumPy", img: "/assets/img/numpy-logo-1-500x500.jpg" },
      { name: "Pandas", img: "/assets/img/pandas-logo-2-500x500.jpg" },
      { name: "OpenCV", img: "/assets/img/opencv-logo-1-500x500.jpg" },
      { name: "scikit-learn", img: "/assets/img/sk-learn-logo-1-500x500.jpg" },
      { name: "matplotlib", img: "/assets/img/matplotlib-logo-1-500x500.jpg" },
    ],
  };

  const skillsContainer = document.getElementById("skills-container");

  const createSkillCard = (title, skills) => {
    const card = document.createElement("div");
    card.className = "card";

    const cardContent = document.createElement("div");
    cardContent.className = "card-content";

    const cardTitle = document.createElement("h4");
    cardTitle.className = "light";
    cardTitle.textContent = title;

    const row = document.createElement("div");
    row.className = "row text-center";

    skills.forEach((skill) => {
      const col = document.createElement("div");
      col.className = "col s4 m2";

      const img = document.createElement("img");
      img.alt = skill.name;
      img.src = skill.img;
      img.className = "responsive-img";

      const skillName = document.createElement("div");
      skillName.className = "skill-name";
      skillName.textContent = skill.name;

      col.appendChild(img);
      col.appendChild(skillName);
      row.appendChild(col);
    });

    cardContent.appendChild(cardTitle);
    cardContent.appendChild(row);
    card.appendChild(cardContent);

    return card;
  };

  skillsContainer.appendChild(createSkillCard("Languages", skills.languages));
  skillsContainer.appendChild(
    createSkillCard("Web Technologies", skills.webTechnologies)
  );
  skillsContainer.appendChild(
    createSkillCard("Databases and Libraries", skills.databasesAndLibraries)
  );
});
