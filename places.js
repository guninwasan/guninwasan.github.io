document.addEventListener("DOMContentLoaded", () => {
  const placesContainer = document.getElementById("places-container");

  if (!placesContainer) {
    console.error("places-container element not found");
    return;
  }

  const mapUrl =
    "https://www.google.com/maps/d/u/0/embed?mid=1UGy2Fxgzte4wfqTzY_1RCgCtuP0jdBE";

  const placeCard = document.createElement("div");
  placeCard.className = "place-card";

  placeCard.innerHTML = `
    <iframe
      src="${mapUrl}"
      class="responsive-iframe"
      allowfullscreen=""
    ></iframe>
  `;

  placesContainer.appendChild(placeCard);
});
