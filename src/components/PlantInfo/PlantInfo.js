import {Link} from 'react-router-dom';
import './PlantInfo.css'

const PlantInfo = (props) => {
    return (
        <div>
            <p>Are you offering this plant?<br />
           {props.props.sharing ? ' Yes' : ' No'}</p>
            <p>{props.props.amount}</p>
            <div className="plantLinks">
                <Link to={`/edit`}
                plantData={props.props}className="PlantLink">Edit</Link>
                <div>View Journal</div>
            </div>
        </div>
    )
};

export default PlantInfo;