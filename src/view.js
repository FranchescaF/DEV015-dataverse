export const renderItems = (data) => {
  const ul = document.createElement("ul");

  data.forEach(item => {
      const li = document.createElement("li");

      li.innerHTML = `
          <ul itemscope itemtype="http://schema.org/TVSeries">
              <h2 itemprop="name">${item.name}</h2>    
              <img src="${item.imageUrl}" alt="${item.name}" itemprop="image" />
              <dd itemprop="description">${item.shortDescription}</dd>
              <div><strong>Género:</strong> <span itemprop="genre">${item.facts.gender}</span></div>
              <div><strong>Año:</strong> <span itemprop="datePublished">${item.facts.year}</span></div>
              <div><strong>Número de capítulos:</strong> <span itemprop="numberOfEpisodes">${item.facts.chapters}</span></div>
          </ul>
      `;

      ul.appendChild(li);
  });

  return ul;
};
