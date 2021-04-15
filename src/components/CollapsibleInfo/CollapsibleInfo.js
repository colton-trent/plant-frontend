const CollapsibleInfo = (props) => {
    return (
        <div>
            <p>Are you offering this plant?
           {props.props.sharing ? ' Yes' : ' No'}</p>
            <p>{props.props.amount}</p>
            <div className="plantLinks">
                <a href={`/edit/${props.props._id}`}>Edit</a>
                <a href="#">View Journal</a>
            </div>
        </div>
    )
};

export default CollapsibleInfo;