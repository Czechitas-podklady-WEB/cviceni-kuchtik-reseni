import { formatTrvaniDlouhy } from '../../lib/format';
import './index.css';

export const DetailReceptu = ({
  id,
  nazev,
  obrazek,
  porce,
  doba,
  ingredience,
  postup,
}) => {
  console.log(id, nazev, ingredience);
  return (
    <div className="recept">
      <div className="recept__obrazek">
        <img
          src={obrazek}
          alt={`Ilustrační obrázek ${nazev}`}
          max-width="960"
          className="recept__image"
        />
      </div>
      <div className="recept__popis">
        <h1 className="recept__nadpis">{nazev}</h1>
        <div>Počet porcí: {porce}</div>
        <div>Doba přípravy: {formatTrvaniDlouhy(doba)}</div>
        <h2>Ingredience</h2>
        <ul className="recept__ingredience">
          {ingredience.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h2>Postup</h2>
        {postup.split('\n').map((odstavec, index) => (
          <p className="recept__postup" key={index}>
            {odstavec}
          </p>
        ))}
      </div>
    </div>
  );
};
