export const FormularPridani = () => {
  return (
    <form id="formular-pridani">
      <h2>Přidání receptu</h2>
      <div>
        <label htmlFor="nazev">Název</label>
        <input type="text" id="nazev" required />
      </div>
      <div>
        <label htmlFor="porce">Počet porcí</label>
        <input type="number" id="porce" defaultValue="4" min={1} required />
      </div>
      <div>
        <label htmlFor="doba">Doba přípravy (v minutách)</label>
        <input
          type="number"
          id="doba"
          defaultValue="60"
          min={0}
          step={10}
          required
        />
      </div>
      <div>
        <label htmlFor="ingredience">Ingredience</label>
        <textarea
          id="ingredience"
          placeholder="Seznam ingrediencí, každá ingredience na jednom řádku…"
          required
        ></textarea>
      </div>
      <div>
        <label htmlFor="postup">Postup</label>
        <textarea id="postup" required></textarea>
      </div>
      <div>
        <label htmlFor="obrazek">Adresa obrázku</label>
        <input type="obrazek" id="obrazek" required />
      </div>
      <div>
        <button>Přidat</button>
      </div>
    </form>
  );
};
