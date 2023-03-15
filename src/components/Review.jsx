import './Review.css'

function Review(props) {
    const { review, customer } = props;

    return (
        <div className="review">
            <span>★★★★★</span>
            <p>"{review}"</p>
            <h6>{customer}</h6>
        </div>
    )
}

export default Review;