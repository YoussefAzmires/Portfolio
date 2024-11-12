document.addEventListener("DOMContentLoaded", () => {
  const heroImage = document.querySelector(".hero-image");
  const heroText = document.querySelector(".hero-text");
  const aboutButton = document.querySelector("#aboutbutton");
  const projectButton = document.querySelector("#projectsbutton");
  const cards = document.querySelectorAll('.card');

  const handleAboutButton = (entry) => {
      if(entry[0].isIntersecting){
          setTimeout(() => {
            aboutButton.classList.add("visible");
          }, 2000);
      }
  }
  const handleProjectButton = (entry) => {
    if(entry[0].isIntersecting){
        setTimeout(() => {
          projectButton.classList.add("visible");
        }, 2000);
    }
}
  const handleHeroIntersection = (entries) => {
    if (entries[0].isIntersecting) {
      heroImage.classList.add("visible"); // Remove the dot before 'visible'
    }
  };

  const handleHeroTextIntersection = (entries) => {
    if (entries[0].isIntersecting) {
      setTimeout(() => {
        heroText.classList.add("visible");
        observer.unobserve(heroText);
      }, 1500);
    }
  };
  const handleCardIntersection = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible"); // Ensure this line is present
        }
    });
};

  const options = {
    threshold : 1
  }
  // Start observing the card
  const cardObserver = new IntersectionObserver(handleCardIntersection, options);
  cards.forEach((card) => {
    cardObserver.observe(card);
});

  // Start observing the project button
  const projectButtonObserver = new IntersectionObserver(handleProjectButton);
  projectButtonObserver.observe(projectButton);

  // Start observing the about button
  const aboutButtonObserver = new IntersectionObserver(handleAboutButton);
  aboutButtonObserver.observe(aboutButton);
  // Start observing the hero text
  const textobserver = new IntersectionObserver(handleHeroTextIntersection);
  textobserver.observe(heroText);

  // Start observing the hero image
  const imageobserver = new IntersectionObserver(handleHeroIntersection);
  imageobserver.observe(heroImage); // Start observing the hero image
});
