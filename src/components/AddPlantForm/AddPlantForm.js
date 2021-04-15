import './AddPlantForm.css';

const AddPlantForm = (props) => {
    return (
        <div className="newPlantForm">
            <hr className="bottomRule"/>
            <form onSubmit={props.addPlant}>
                <label>
                    <span>Plant Name</span>
                    <input name="name" value={props.state.newPlant.name}  onChange={props.handleChange} />
                </label>
                <label>Are you sharing this plant?
                    <select name="sharing" value={props.state.newPlant.sharing} onChange={props.handleChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </label>
                <button>Add Plant</button>
            </form>
        </div>
    )
};

export default AddPlantForm;