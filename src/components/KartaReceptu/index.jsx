import { formatTrvaniKratky } from "../../lib/format";
import { Icon } from "../Icon";
import "./index.css";

const formatPorce = (porce) => {
  if (porce <= 4) {
    return `${porce} porce`;
  }
  return `${porce} porcí`;
};

export const KartaReceptu = ({ id, nazev, doba, porce, obrazek }) => {
  return (
    <article className="recept">
      <div>
        <img src={obrazek} className="recept--ilustracni-obrazek" />
      </div>
      <h2>{nazev}</h2>
      <div className="recept--udaje">
        <span>
          <Icon type="doba" /> {formatTrvaniKratky(doba)}
        </span>
        <span>
          {formatPorce(porce)}
          {" "}
          {new Array(porce).fill(0).map((x, index) => (
            <Icon type="porce" key={index} />
          ))}
        </span>
      </div>
      <div className="recept--tlacitka">
        <form className="formular-smazani">
          <input type="hidden" className="recept-id" value={id} />
          <button className="btn btn-secondary">Smazat</button>
        </form>
        <a href={`/recept.html?id=${id}`} className="btn btn-primary">Zobrazit</a>
      </div>
    </article>
  );
};
