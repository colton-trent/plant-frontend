import Collapsible from 'react-collapsible';

import {useEffect, useState} from 'react';
import './App.css';
const BASE_URL = 'http://localhost:3001/api/plants';

export default function App() {
  const [state, setState] = useState({
    plants: [{}],
    newPlant: {
      name:"",
      sharing: false,
    },
  });

  async function getAppData() {
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
    const plants = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json'
      },
      body: JSON.stringify(state.newPlant)
    }).then(res => res.json());
    
    setState((prevState) => ({
      ...prevState,
      plants,
      newPlant: {
        name: '',
        acquired: '',
        sharing: false,
        imageUrl: '',
      },
    }));
  };
  
  function handleChange(e) {
    setState((prevState) => ({
      ...prevState,
      newPlant: {
        ...prevState.newPlant,
        [e.target.name]: e.target.value
      }
    }))
  };
  
  async function deletePlant(id) {
    const plants = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    }).then((res) => res.json());

    setState(prevState => ({
      ...prevState,
      plants,
    }))
  };

  return (
    <div className="App">
      <h1>Plant Inventory</h1>
      {state.plants.map((p, idx) => (
        <article key={p.name}>
          <Collapsible trigger={p.name}>
           {p.sharing ? 'Yes' : 'No'}
           <a href="#">View Journal</a>
           <div onClick={() => deletePlant(p._id)}>{"Delete"}</div>
           </Collapsible>
        </article>
      ))}
      <div className="newPlantForm">
        <form onSubmit={addPlant}>
          <label>
            <span>Plant Name</span>
            <input name="name" value={state.newPlant.name}  onChange={handleChange} />
          </label>
          <label>Are you sharing this plant?
            <select name="sharing" value={state.newPlant.sharing} onChange={handleChange}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </label>
          <button>Add Plant</button>
        </form>
      </div>
    </div>
  );
};
