import { render } from '@czechitas/render';
import { SeznamReceptu } from '../components/SeznamReceptu';
import '../global.css';
import './index.css';
import { FormularPridani } from '../components/FormularPridani';

const apiBasePath = 'http://localhost:4000/api';
const receptyResponse = await fetch(apiBasePath + '/recepty');
const recepty = (await receptyResponse.json()).result;

document.querySelector('#root').innerHTML = render(
  <>
    <div className="container">
      <header>
        <h1>Recepty jako od maminky</h1>
        <p className="note">(nebo od ChatGPT…)</p>
      </header>
      <main>
        <SeznamReceptu recepty={recepty} />
      </main>
    </div>
    <aside>
      <FormularPridani />
    </aside>
    <footer>© Czechitas, Digitální akademie: Web</footer>
  </>,
);

const handlePridat = async (event) => {
  event.preventDefault();

  const response = await fetch(apiBasePath + '/recepty', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nazev: document.querySelector('#nazev').value,
      porce: document.querySelector('#porce').valueAsNumber,
      doba: document.querySelector('#doba').valueAsNumber,
      ingredience: document.querySelector('#ingredience').value.split('\n'),
      postup: document.querySelector('#postup').value,
      obrazek: document.querySelector('#obrazek').value,
    }),
  });

  if (response.ok) {
    window.location.reload();
  }
};

const handleSmazat = async (event) => {
  event.preventDefault();

  const id = event.target.querySelector('.recept-id').value;
  const response = await fetch(`${apiBasePath}/recepty/${id}`, {
    method: 'DELETE',
  });
  if (response.ok) {
    window.location.reload();
  }
};

document
  .querySelector('#formular-pridani')
  .addEventListener('submit', handlePridat);
document
  .querySelectorAll('.formular-smazani')
  .forEach((formular) => formular.addEventListener('submit', handleSmazat));
