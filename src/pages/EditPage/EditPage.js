const EditPage = (props) =>  {
    return (
        <div className="editForm">
            <form>
                <label>
                    Plant Name:
                    <input name="name" value={props.name} onChange={props.handleChange} />
                </label>
            </form>
        </div>
    )
};

export default EditPage;