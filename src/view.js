export const renderItems = (data) => {
  const ulElement = document.createElement("ul");

  data.forEach(item => {
    const liElement = document.createElement("li");
    liElement.classList.add("card");
    liElement.setAttribute("itemscope", "");
    liElement.setAttribute("itemtype", "https://schema.org/CreativeWork");
    liElement.setAttribute("data-id", item.id);

    liElement.innerHTML = `
      <div class="card">
        <h2 class="card__title" itemprop="name">${item.name}</h2>
        <img class="card_image" src="${item.imageUrl}" alt="${item.name}" itemprop="image" />
        <p class="card__description" itemprop="description">${item.shortDescription}</p>
        <div class="card__list">
          <p class="card__gender"><strong>Género:</strong> <span itemprop="gender">${item.facts.gender}</span></div>
          <p class="card__year"><strong>Año:</strong> <span itemprop="datePublished">${item.facts.year}</span></div>
          <p class="card__chapters"><strong>Número de capítulos:</strong> <span itemprop="numberOfEpisodes">${item.facts.chapters}</span></div>
        </div>
      </div>
    `;

    ulElement.appendChild(liElement);
  });

  return ulElement;
};
