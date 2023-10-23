import { render } from "@czechitas/render";
import { DetailReceptu } from "../components/DetailReceptu";
import "../global.css";
import "./recept.css";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const receptResponse = await fetch(`http://localhost:4000/api/recepty/${id}`);
const recept = (await receptResponse.json()).result;
console.log(recept)

document.querySelector("#root").innerHTML = render(
  <>
  <DetailReceptu
    nazev={recept.nazev}
    obrazek={recept.obrazek}
    porce={recept.porce}
    doba={recept.doba}
    ingredience={recept.ingredience}
    postup={recept.postup}
  />
  <div><a href="/">Zpět na seznam receptů</a></div>
  </>
);
