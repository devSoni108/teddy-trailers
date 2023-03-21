import { Link } from 'react-router-dom';
import './TrailerCard.css'

function TrailerCard(props) {
    const { imageUrl, imageAlt, title, subtitle, list } = props;

    return (
        <div className="TrailerCard">
            <img src={imageUrl} alt={imageAlt} />
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <div className="TrailerCard__list">
                <li>{list}</li>
            </div>
           <button><Link to="/contact">Contact Us</Link></button>
        </div>
    )
}

export default TrailerCard;