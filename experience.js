document.addEventListener("DOMContentLoaded", function () {
  const experiences = [
    {
      company: "Zhiffy",
      logo: "/assets/img/exp-zhiffy-logo-1.webp",
      role: "Software Engineer",
      description: [
        "Developed and managed the backend of an e-commerce platform using Flask, MongoDB, and AWS.",
        "Worked on three web applications targeting customers, selling vendors, and admin users; built 50+ RESTful APIs with functionalities such as login/sign up, view a product, add a product to cart, checkout the order, etc.",
        "Improved the response time by 20% by refactoring the codebase and changing database design and queries.",
        "Added a bulk upload feature which reduced the manual work of adding products into a database.",
      ],
      tools: "Python, Flask, MongoDB",
      period: "July 2020 - Nov 2020",
      location: "Hyderabad, India",
      link: "https://www.zhiffy.com/",
    },
    {
      company: "Meditab",
      logo: "/assets/img/exp-meditab-logo-500x500.jpg",
      role: "Programmer Analyst",
      description: [
        "Customized a tree-based optimization algorithm that separates drugs into distinct groups to maximize the concurrent execution of drug dispenser robots; improved an optimization algorithm that reduced the cycle-time of the automation process by 25%.",
        "Devised a customized recursion algorithm to extend the functionality of the current environment to a multi-robot and multi-system environment.",
        "Built a modular video analytics app using Flask, OpenCV that tracks the location of each human in a multi-camera environment; utilized perspective transformation, object detection, and object tracking to find the location of a human.",
        "Increased the speed of the video analytics app by 20% by using a customized YOLOv3 algorithm to perform object detection and DeepSORT algorithm for multi-object tracking.",
      ],
      tools: "Python, Flask, OpenCV, Keras, Tensorflow, PyTorch",
      period: "Dec 2018 - July 2019",
      location: "Ahmedabad, India",
      link: "https://www.meditab.com",
    },
    {
      company: "Mtag Innovations",
      logo: "/assets/img/exp-mtag-logo-250x250.jpg",
      role: "Software Developer",
      description: [
        "Programmed a cloud-based web app using Flask and JavaScript aimed at storing, visualizing, and tracking temperature and humidity of each drug container to estimate the degradation of the drug.",
        "Created an alert system to send notifications and emails when the parameters exceed the threshold.",
      ],
      tools: "Python, Flask, JavaScript",
      period: "July 2018 - Nov 2018",
      location: "Ahmedabad, India",
      link: "#experience",
    },
    {
      company: "CIGNEX Datamatics",
      logo: "/assets/img/exp-cignex-logo.png",
      role: "Project Trainee",
      description: [
        "Designed a library management system for a local library, where we undertook activities like requirement elicitation, preparing Data Flow and Entity-Relationship diagrams.",
        "Delivered a solution for a POC involving Automatic Financial Document Classifier using Natural Language Processing and Support Vector Machines with 96% accuracy on the company’s data.",
      ],
      tools: "Python, Scikit-learn, NLTK",
      period: "June 2017 - July 2017",
      location: "Ahmedabad, India",
      link: "https://www.cignex.com",
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
                <div class="role brown-text text-darken-2">${exp.role}</div>
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
