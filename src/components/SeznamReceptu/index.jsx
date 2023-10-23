import { KartaReceptu } from "../KartaReceptu";
import "./index.css"

export const SeznamReceptu = ({ recepty }) => {
  return (
    <div className="seznam-receptu">
      {recepty.map((recept) => (
        <KartaReceptu
          key={recept.id}
          id={recept.id}
          nazev={recept.nazev}
          obrazek={recept.obrazek}
          doba={recept.doba}
          porce={recept.porce}
        />
      ))}
    </div>
  );
};
