import Header from '../../components/Header/Header';
import './EditPage.css'

const EditPage = (props) =>  {
    return (
        <div className="editForm">
            <form>
                <label>
                    Plant Name:
                    <input name="name" value={props.name} onChange={props.handleChange} />
                </label><br/>
                <label>
                    Acquired on: 
                    <input type="date" value={props.acquired} onChange={props.handleChange} />
                </label><br/>
                <label>
                    Sharing? <select name="sharing" value={props.sharing}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </label><br/>
                <label>How many do you own?
                    <input type="number" value={props.amount}>
                    </input>
                </label><br/>
                <label>
                    Add an optional Imgur link of your plant:
                    <input name="imageUrl" value={props.imageUrl}></input>
                </label><br/>
                <button>Update Info</button>
            </form>
        </div>
    )
};

export default EditPage;