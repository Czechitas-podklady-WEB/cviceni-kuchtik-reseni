import { formatTrvaniDlouhy } from "../../lib/format";

export const DetailReceptu = ({
  id,
  nazev,
  obrazek,
  porce,
  doba,
  ingredience,
  postup,
}) => {
    console.log(id, nazev, ingredience)
  return (
    <div>
      <div>
        <img src={obrazek} alt={`Ilustrační obrázek ${nazev}`} width="300" />
      </div>
      <h1>{nazev}</h1>
      <div>Počet porcí: {porce}</div>
      <div>Doba přípravy: {formatTrvaniDlouhy(doba)}</div>
      <h2>Ingredience</h2>
      <ul>
        {
            ingredience.map((item, index) => <li key={index}>{item}</li>)
        }
      </ul>
      <h2>Postup</h2>
      {
        postup.split("\n").map((odstavec, index) => <p key={index}>{odstavec}</p>)
      }

    </div>
  );
};
