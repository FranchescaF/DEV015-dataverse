export const filterData = (data, filterBy, value) => {
  if (value === "all") {
    return data; // Devuelve todos los datos si el valor es "all"
  }
  return data.filter(item => {
    if (filterBy === "gender") {
      return item.facts[filterBy].includes(value); // Filtra por género
    }
    if (filterBy === "year") {
      return item.facts.year === parseInt(value); // Filtra por año
    }
    if (filterBy === "chapters") {
      return item.facts.chapters === parseInt(value); // Filtra por cápitulos
    }
    return false;
  });
};

export const sortData = (data, sortBy, sortOrder) => {
  const dataCopy = data.map((obj) => obj);
  if (sortOrder === "asc") {
    return dataCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  } else {
    return dataCopy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
  }
}

export const computeStats = (data) => {
  const totalChapters = data.reduce((sum, item) => sum + item.facts.chapters, 0);
  const average = (totalChapters / data.length).toFixed(2);
  return Math.floor(average);
};

export const metricsData = (data) => {
  const dataCopy = data.map((obj) => obj);
  return dataCopy.reduce((topObjects, currentObject) => {
    return [...topObjects, currentObject].sort(
      (a, b) =>
        parseFloat(b.facts["percentageOfUsers"]) -
        parseFloat(a.facts["percentageOfUsers"])
    ).slice(0, 3);
  }, []);


}
