// Dados para os cards
const cardData = [
  {
    title: "Aurora NFT",
    description: "A stunning view of the northern lights.",
    image: "https://via.placeholder.com/300x200?text=Aurora",
    author: "Author 1",
  },
  {
    title: "Sunset Bliss",
    description: "A peaceful sunset over the mountains.",
    image: "https://via.placeholder.com/300x200?text=Sunset",
    author: "Author 2",
  },
  {
    title: "Cosmic Waves",
    description: "Abstract waves in a cosmic ocean.",
    image: "https://via.placeholder.com/300x200?text=Cosmic+Waves",
    author: "Author 3",
  },
  {
    title: "Mystic Forest",
    description: "A foggy walk through an enchanted forest.",
    image: "https://via.placeholder.com/300x200?text=Mystic+Forest",
    author: "Author 4",
  },
  {
    title: "Desert Dreams",
    description: "Golden sands and endless skies.",
    image: "https://via.placeholder.com/300x200?text=Desert+Dreams",
    author: "Author 5",
  },
  {
    title: "City Lights",
    description: "The hustle and bustle of urban life.",
    image: "https://via.placeholder.com/300x200?text=City+Lights",
    author: "Author 6",
  },
  {
    title: "Ocean Calm",
    description: "Gentle waves at dusk.",
    image: "https://via.placeholder.com/300x200?text=Ocean+Calm",
    author: "Author 7",
  },
  {
    title: "Galactic Horizon",
    description: "A futuristic view of a galaxy.",
    image: "https://via.placeholder.com/300x200?text=Galactic+Horizon",
    author: "Author 8",
  },
  {
    title: "Hidden Waterfall",
    description: "A serene waterfall tucked away in the jungle.",
    image: "https://via.placeholder.com/300x200?text=Hidden+Waterfall",
    author: "Author 9",
  },
];

// Selecionando o container
const cardListContainer = document.getElementById("cardList");

// Gerar os cards dinamicamente
cardData.forEach((card) => {
  const cardElement = document.createElement("div");
  cardElement.className = "card";

  cardElement.innerHTML = `
    <img src="${card.image}" alt="${card.title}">
    <h3>${card.title}</h3>
    <p>${card.description}</p>
    <span>by ${card.author}</span>
  `;

  cardListContainer.appendChild(cardElement);
});
