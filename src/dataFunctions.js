// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterData = (data,filterBy,value) => {
  if (value === "all"){
    return data; // devuelve todos los daatos
  }
  return data.filter(item => {
    if (filterBy ==="gender"){
      return item.facts.gender.includes(value);
    }
    return false;
  });

  };