import './Trailer.css'

function Trailer(props) {
    const { title, subtitle, linkText, linkUrl, imageUrl, imageAlt } = props;
  
    return (
        <div className="Trailer">
            <img src={imageUrl} alt={imageAlt} style={{ border: "5px solid white" }} />
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
        </div>
    );
  }
  
  export default Trailer;