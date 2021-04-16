//components
import Header from './components/Header/Header';
import PlantCollection from './pages/PlantCollection/PlantCollection';
import EditPage from './pages/EditPage/EditPage';

import { Route, Switch } from 'react-router-dom';
import {useEffect, useState} from 'react';
import './App.css';
import './styles.css';
const BASE_URL = 'https://ctrent-plant-app-backend.herokuapp.com/api/plants';


export default function App() {
  const [state, setState] = useState({
    plants: [{}],
    newPlant: {
      name: '',
      acquired: '',
      sharing: false,
      imageUrl: '',
      amount: 1,
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

  async function deletePlant(id) {
    const plants = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    }).then(res => res.json());
    setState(prevState => ({
      ...prevState,
      plants,
    }));
  };

  async function addPlant(e) {
    e.preventDefault();
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
        amount: 1,
      },
    }));
  };

  function editPlantInfo(id) {
    console.log(id)
  }

  function handleChange(e) {
    setState((prevState) => ({
      ...prevState,
      newPlant: {
        ...prevState.newPlant,
        [e.target.name]: e.target.value
      }
    }))
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={() => 
          <PlantCollection 
          state = {state}
          deletePlant = {deletePlant}
          addPlant = {addPlant}
          handleChange = {handleChange}
          />
        }/>
      <Route exact path="/edit" render = { (props) => 
        <EditPage
        state={state}
        handleChange = {handleChange}
        editPlantInfo = {editPlantInfo}/>
      }/>
      </Switch>
    </div>
  );
};