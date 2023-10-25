import React from 'react';
import './index.css';

export const FormularPridani = () => {
  return (
    <form id="formular-pridani" className="formular">
      <h2 className="formular__nadpis">Přidání receptu</h2>
      <div className="formular__polozka">
        <label htmlFor="nazev" className="formular__label">
          Název
        </label>
        <input type="text" id="nazev" required className="formular__input" />
      </div>
      <div className="formular__polozka">
        <label htmlFor="porce" className="formular__label">
          Počet porcí
        </label>
        <input
          type="number"
          id="porce"
          defaultValue="4"
          min={1}
          required
          className="formular__input"
        />
      </div>
      <div className="formular__polozka">
        <label htmlFor="doba" className="formular__label">
          Doba přípravy (v minutách)
        </label>
        <input
          type="number"
          id="doba"
          defaultValue="60"
          min={0}
          step={10}
          required
          className="formular__input"
        />
      </div>
      <div className="formular__polozka">
        <label htmlFor="ingredience" className="formular__label">
          Ingredience
        </label>
        <textarea
          id="ingredience"
          placeholder="Seznam ingrediencí, každá ingredience na jednom řádku…"
          required
          className="formular__input formular__textarea"
        ></textarea>
      </div>
      <div className="formular__polozka">
        <label htmlFor="postup" className="formular__label">
          Postup
        </label>
        <textarea
          id="postup"
          required
          className="formular__input formular__textarea"
        ></textarea>
      </div>
      <div className="formular__polozka">
        <label htmlFor="obrazek" className="formular__label">
          Adresa obrázku
        </label>
        <input
          type="obrazek"
          id="obrazek"
          required
          className="formular__input"
        />
      </div>
      <div className="formular__button--div">
        <button className="formular__button">Přidat</button>
      </div>
    </form>
  );
};
