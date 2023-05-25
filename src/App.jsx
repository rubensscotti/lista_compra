import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    item: "",
    itemsList: [] // Novo estado para armazenar os itens da lista
  });

  const enviaForm = event => {
    event.preventDefault();

    // Adicionar o item atual à lista de itens
    setFormData(prevState => ({
      ...prevState,
      itemsList: [...prevState.itemsList, prevState.item],
      item: "" // Limpar o campo de item após adicionar à lista
    }));
  };

  return (
    <div className="App">
      <header>
        <h2>Lista de Compras:</h2>
      </header>
      <div className="lista-compras-container">
        <ul className="lista-items">
          {formData.itemsList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <form className="form-add-item" action="#" method="post" onSubmit={enviaForm}>
        <fieldset>
          <div className="form-group mb-3">
            <label htmlFor="item">Adicionar Novo Item na Lista:</label>
            <input
              type="text"
              className="form-control"
              id="item"
              value={formData.item}
              onChange={event => setFormData({ ...formData, item: event.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Adicionar
          </button>
        </fieldset>


      </form>
    </div>
  );
}

export default App;
