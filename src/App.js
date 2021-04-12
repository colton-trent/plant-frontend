import {useEffect, useState} from 'react';
import './App.css';

export default function App() {
  const [state, setState] = useState({
    plants: [{ 
      name: 'Pink Blush Aloe',
      sharing: true,
    }],
    newPlant: {
      name:"",
      sharing: false,
    },
  });

  async function getAppData() {
    const BASE_URL = 'http://localhost3001/api/plants';

    const plants = await fetch(BASE_URL).then(res => res.json());
    setState((prevState) => ({
      ...prevState,
      plants,
    }));
  };

  useEffect(() => {
    getAppData();
    setState(prevState => ({
      ...prevState,
    }))
  }, []);

  async function addPlant(e) {
    e.preventDefault();
    const BASE_URL = 'http://localhost:3001/api/plants';
    const plant = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json'
      },
      body: JSON.stringify(state.newPlant)
    }).then(res => res.json());

    setState((prevState) => ({
      plants: [...prevState.plants, plant],
      newPlant: {
        name: '',
        acquired: '',
        sharing: false,
        imageUrl: '',
      },
    }));
  };

  function handleChange(e) {
    setState((prevState => ({
      ...prevState,
      newPlant: {
        ...prevState.newPlant,
        [e.target.name]: e.target.value
      }
    })))
  };

  return (
    <div className="App">
      <h1>Plant Inventory</h1>
      {state.plants.map((p) => (
        <article key={p.name}>
          <div>{p.name}</div> <div>{p.sharing}</div>
        </article>
      ))}
      <div className="newPlantForm">
        <form onSubmit={addPlant}>
          <label>
            <span>Plant Name</span>
            <input name="plant" value={state.newPlant.name} onChange={handleChange} />
            <button>Add Plant</button>
          </label>
        </form>
      </div>
    </div>
  );
};
