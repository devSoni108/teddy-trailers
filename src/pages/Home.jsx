import Trailer from '../components/Trailer.jsx';
import Review from '../components/Review.jsx';

import image1 from '../assets/mobile-kitchen-trailer.jpg';
import image2 from '../assets/round-logo.png';
import image3 from '../assets/mobile-stage.jpg';
import image4 from '../assets/mobile-kitchen.jpg';
import image5 from '../assets/mobile-salon.jpg';
import image6 from '../assets/food-trailer.jpg';
import image7 from '../assets/stage.jpg';

export default function Home() {
    return (
        <div className="home">
            <div className="hero">
                <h1>Teddy Trailers</h1>
                <h2>Southern Africas Leading<br/>Trailer Supplier</h2>
                <div className="hero__divider">
                    <div></div>
                </div>
                <div className='scroll'>
                    <div className="heroImg" style={{backgroundImage: `url(${image1})`, backgroundAttachment: 'fixed'}}> 
                    <img className='heroImg__image' src={image2}/>
                    </div>
                </div>
                <a href="/trailers"><p>Discover Our Trailers</p></a>
            </div>
            <div className="home__catchphrase">
                <div className="home__catchphrase-title">
                    <h2>Taking you anywhere you can imagine</h2>
                    <h3 >We offer nationwide delivery</h3>
                </div>
            </div>
            <div className="home__trailers">
                <Trailer
                    imageUrl={image3}
                    imageAlt="mobile stage" 
                    title="Mobile Stage"
                    subtitle="Take your show on the road with a portable stage."
                    linkText="View Trailers"
                    linkUrl="/trailers"
                />
                <Trailer 
                    imageUrl={image4}
                    imageAlt="mobile kitchen" 
                    title="Mobile Kitchen"
                    subtitle="Start that food truck business you’ve been dreaming about."
                    linkText="View Trailers"
                    linkUrl="/trailers"
                />
                <Trailer 
                    imageUrl={image5}
                    imageAlt="mobile salon" 
                    title="Mobile Salon"
                    subtitle="Rapidly expand your barber shop and reach new clients."
                    linkText="View Trailers"
                    linkUrl="/trailers"
                />
            </div>
            <div className="home__about">
                <div className="home__about--image">
                    <img src={image6} />
                </div>
                <div className="home__about--text">
                    <h2>We build more than trailers</h2>
                    <p>Since 2011, Teddy Trailers has been pioneering the mobile trailer business space in Southern Africa. From the start, we have been committed to offering the most comprehensive trailer & mobile business, made from durable, locally sourced materials.</p>
                </div>
            </div>
            <div className="home__cta">
                <div className="home__cta--text">
                    <h2>Trailers made for any event</h2>
                    <p>We supply a comprehensive range of trailers from mobile kitchens to mobile toilets. All trailers are registered with the South African traffic department and have passed roadworthy test.<br /><br />Each project brings unique demands, and we’re always ready to take on any challenge. Contact us for a tailor made solution.</p>
                    <a href="/Contact">Contact Us</a>
                </div>
                <div className="home__cta--image">
                    <img src={image7} />
                </div>
            </div>
            <div className="home__review">
                <h2>FEEL THE MAGIC</h2>
                <div className="home__review--cutomers">
                    <Review 
                        span= "★★★★★"
                        review="I'm living my dream!! Teddy Trailers helped me become a business owner."
                        customer="Sianna O."
                    />
                    <Review 
                        review="There’s no better time to start than right now! Thank you Teddy Trailers."
                        customer="Floyd B."
                    />
                    <Review 
                        review="Teddy Trailers impressed me with their exceptional service and high-quality trailers."
                        customer="Xolisi S."
                    />
                </div>
            </div>
        </div>
    )
}