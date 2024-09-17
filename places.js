const places = [
  {
    name: "North America",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31557312.05096427!2d-113.642578125!3d54.5260!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d6b8b8b8b8%3A0x8c8b8b8b8b8b8b8b!2sNorth%20America!5e0!3m2!1sen!2sca!4v1633046400000!5m2!1sen!2sca",
  },
  {
    name: "Europe",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31557312.05096427!2d10.4515!3d51.1657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d6b8b8b8b8%3A0x8c8b8b8b8b8b8b8b!2sEurope!5e0!3m2!1sen!2sca!4v1633046400000!5m2!1sen!2sca",
  },
  {
    name: "Middle East",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31557312.05096427!2d47.9783!3d29.3759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c8b8b8b8b8b%3A0x8c8b8b8b8b8b8b8b!2sMiddle%20East!5e0!3m2!1sen!2sca!4v1633046400000!5m2!1sen!2sca",
  },
  {
    name: "India",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31557312.05096427!2d78.9629!3d20.5937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d6b8b8b8b8%3A0x8c8b8b8b8b8b8b8b!2sIndia!5e0!3m2!1sen!2sca!4v1633046400000!5m2!1sen!2sca",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const placesContainer = document.getElementById("places-container");

  places.forEach((place) => {
    const placeCard = document.createElement("div");
    placeCard.className = "place-card";

    placeCard.innerHTML = `
            <h4>${place.name}</h4>
            <iframe
                src="${place.mapUrl}"
                width="600"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
            ></iframe>
        `;

    placesContainer.appendChild(placeCard);
  });
});
