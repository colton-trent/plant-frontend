import Collapsible from 'react-collapsible';
import Header from '../../components/Header/Header';
import PlantInfo from '../../components/PlantInfo/PlantInfo';
import AddPlantForm from '../../components/AddPlantForm/AddPlantForm';
import './PlantCollection.css'


//collapsibles disrupt the live delete

const PlantCollection = (props) => {
    return (
        <div className="PlantInventory">
            <h2>Plant Inventory</h2>
            {props.state.plants.map((p, idx) => (
            <article key={p.name}>
                <hr className="topRule"/>
                <Collapsible trigger={p.name}>
                <PlantInfo props={p}/> 
                <a href="https://ctrent-plant-frontend.netlify.app
" className="deleteButton" onClick={() => props.deletePlant(p._id)}>Delete</a>
                </Collapsible>
            </article>
            ))}
            <AddPlantForm
            state = {props.state}
            addPlant = {props.addPlant}
            handleChange = {props.handleChange}
             />
        </div>
    );
};

export default PlantCollection;