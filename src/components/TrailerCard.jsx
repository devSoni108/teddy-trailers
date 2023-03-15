import './TrailerCard.css'

function TrailerCard(props) {
    const { imageUrl, imageAlt, title, subtitle, list, button } = props;

    return (
        <div className="TrailerCard">
            <img src={imageUrl} alt={imageAlt} />
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <div className="TrailerCard__list">
                <li>{list}</li>
            </div>
            <button>Contact Us</button>
        </div>
    )
}

export default TrailerCard;