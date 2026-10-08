const leafContainer = document.getElementById("leaves");
const leafColors = ["#af4f2b", "#d9982d", "#7e913f", "#8b4b2d", "#c96c31"];

if (leafContainer) {
  for (let i = 0; i < 24; i++) {
    const leaf = document.createElement("span");
    leaf.className = "leaf";
    leaf.style.left = `${Math.random() * 100}%`;
    leaf.style.background = leafColors[Math.floor(Math.random() * leafColors.length)];
    leaf.style.animationDuration = `${8 + Math.random() * 10}s`;
    leaf.style.animationDelay = `${Math.random() * -18}s`;
    leaf.style.width = `${12 + Math.random() * 16}px`;
    leaf.style.height = `${9 + Math.random() * 12}px`;
    leafContainer.appendChild(leaf);
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const quoteForm = document.getElementById("quoteForm");

if (quoteForm) {
  const servicePrices = {
    leafPickup: 99,
    fallCleanup: 149,
    mulch: 179,
    porchDisplay: 129,
    winterPrep:
  };

  const yardMultipliers = {
    small: 1,
    medium: 1.35,
    large: 1.75,
    xlarge: 2.
  };

  const serviceInput = document.getElementById("service");
  const yardInput = document.getElementById("yardSize");
  const totalOutput = document.getElementById("quoteTotal");
  const serviceOutput =.getElementById("summaryService");
  const yardOutput = document.getElementById("summaryYard");
  const extrasOutput = document.getElementById("summaryExtras");

  function updateQuote() {
    service = serviceInput.value;
    const yard = yardInput.value;
    const selectedService = serviceInput.options[serviceInput.selectedIndex].text;
    const selectedYardText = yardInput.options[yardInput.selectedIndex].text;

    let total =Prices[service] || 0;
    total = total * (yardMultipliers[yard] || 1);

    let = 0;
    document.querySelectorAll('input[name="extras"]:checked').forEach((item) => {
      extras += Number(item.value);
    });

    total +=;

    serviceOutput.textContent = service ? selectedServiceText : "Not selected";
    yardOutput.textContent = yard ? selectedYardText : "Not selected";
    extrasOutput.textContent = `$${extras}`;
    totalOutput.textContent = `$${Math.round(total)}`;
  }

  quoteForm.addEventListener("input", updateQuote);
  quoteForm.addEventListener("change", updateQuote);

  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    document.getElementById("quoteSuccess").classList.add("show");
  });

  updateQuote();
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    document.getElementById("contactSuccess").classList.add("show");
    contactForm.reset();
  });
}
