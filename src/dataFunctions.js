// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterData = (data, filterBy, value) => {
  if (value === "all") {
    return data; // Devuelve todos los datos si el valor es "all"
  }


  return data.filter(item => {
    if (filterBy === "gender") {
      return item.facts[filterBy].includes(value);
      //return item.facts.gender.includes(value); // Filtra por género
    }

    if (filterBy === "year") {
      return item.facts.year === parseInt(value); // Filtra por año
    }
    if (filterBy === "chapters") {
      return item.facts.chapters === parseInt(value); // Filtra por número de episodios
    }
    return false;
  });
};


export const sortData = (data,sortBy,sortOrder) => {
  const sortedData = [...data].sort((a,b) => {
        if (sortOrder === "asc") {
            return a[sortBy].localeCompare(b[sortBy]);
        } else {
            return b[sortBy].localeCompare(a[sortBy]);
        }
  });
  return sortedData;

};
