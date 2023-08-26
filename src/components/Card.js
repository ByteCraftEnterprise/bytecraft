import '../styles/card.css'

const Card = (props) => {
    return (

        <div className="main-card">
            <div className='card'>
                <img src={props.item.logo} className="logo" alt="Icon"></img>
                <h4>{props.item.title}</h4>
                <br></br>
                <p>{props.item.description1}</p>
                <br></br>
                <p>{props.item.description2}</p>
            </div>
        </div>

    );
};

export default Card;