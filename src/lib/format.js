export const formatTrvaniDlouhy = (doba) => {
  const hodiny = Math.floor(doba / 60);
  const minuty = doba % 60;
  let vysledek = "";

  if (hodiny > 0) {
    if (hodiny === 1) {
      vysledek += `${hodiny} hodina`;
    } else if (hodiny >= 2 && hodiny <= 4) {
      vysledek += `${hodiny} hodiny`;
    } else {
      vysledek += `${hodiny} hodin`;
    }
    if (minuty > 0) {
      vysledek += " ";
    }
  }

  if (minuty === 1) {
    vysledek += `${minuty} minuta`;
  } else if (minuty >= 2 && minuty <= 4) {
    vysledek += `${minuty} minuty`;
  } else {
    vysledek += `${minuty} minut`;
  }

  return vysledek;
};

export const formatTrvaniKratky = (doba) => {
  const hodiny = Math.floor(doba / 60);
  const minuty = doba % 60;
  if (hodiny === 0) {
    return `${minuty} min`;
  }
  return `${hodiny}:${String(minuty).padStart("0", 2)}`;
};
