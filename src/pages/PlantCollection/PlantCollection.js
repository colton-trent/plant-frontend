import Collapsible from 'react-collapsible';
import Header from '../../components/Header/Header';
import CollapsibleInfo from '../../components/CollapsibleInfo/CollapsibleInfo';
import AddPlantForm from '../../components/AddPlantForm/AddPlantForm'

const PlantCollection = (props) => {
    return (
        <div>
            <h1>Plant Inventory</h1>
            {props.state.plants.map((p, idx) => (
            <article key={p.name}>
                <Collapsible trigger={p.name}>
                <CollapsibleInfo props={p}/>
                <a href="http://localhost:3000" className="deleteButton" onClick={() => props.deletePlant(p._id)}>Delete</a>
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