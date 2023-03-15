import TrailerCard from '../components/TrailerCard.jsx';

import image10 from '../assets/mobile-salon.jpg';
import image2 from '../assets/stage.jpg';
import image3 from '../assets/food-truck.jpg';
import image1 from '../assets/food-trailer-lrg.jpg'
import image4 from '../assets/mobile-kitchen.jpg'
import bar from '../assets/mobile-bar.jpg'
import butcher from '../assets/mobile-butcher.jpg'
import multipurpose from '../assets/multipurpose-trailer.jpg'
import bowser from '../assets/bowser.jpg'
import toilet from '../assets/mobile-toilet.jpg'
import freezer from '../assets/mobile-freezer.jpg'
import shop from '../assets/mobile-shop.jpg'
import stage from '../assets/mobile-stage-large.jpg'


export default function Trailers() {
    return (
        <div className="trailers">
            <div className="trailers__header">
                <h1>Our Range of Trailers</h1>
                <h2>Choose from an impressive selction of certified mobile trailers and support equipment</h2>
                <div className="trailers__divider">
                    <div></div>
                </div>
            </div>

            <div className="trailers__card1">
                <TrailerCard
                    imageUrl={image4}
                    imageAlt="mobile stage" 
                    title="Mobile Kitchen"
                    subtitle="3m x 1.8m x 2m"
                    list={['Item 1 ', 'Item 2 ', 'Item 3 ', 'Item 4 ', 'Item 5 ', 'Item 6 ', 'Item 7 ', 'Item 8 ', 'Item 9 ', 'Item 10']}
                />
                <TrailerCard 
                    imageUrl={image3}
                    imageAlt="food truck" 
                    title="Food Truck"
                    subtitle="5m x 1.8m x 2m"
                    list={['Item 1 ', 'Item 2 ', 'Item 3 ', 'Item 4 ', 'Item 5 ', 'Item 6 ', 'Item 7 ', 'Item 8 ', 'Item 9 ', 'Item 10']}
                />
                <TrailerCard 
                    imageUrl={image1}
                    imageAlt="mobile trailer kitchen" 
                    title="Mobile Kitchen"
                    subtitle="4.4m x 1.8m x 2m"
                    list={['Item 1 ', 'Item 2 ', 'Item 3 ', 'Item 4 ', 'Item 5 ', 'Item 6 ', 'Item 7 ', 'Item 8 ', 'Item 9 ', 'Item 10']}
                />
            </div>
            <div className="trailers__header--card2">
                <h2>Taking you Anywhere<br />you can Imagine.</h2>
                <h3>We supply trailers for all events and venues. Our customers range from mobile kitchen and food truck vendors to mobile stages and portable toilets.</h3>
            </div>
            <div className="trailers__card2">
                <TrailerCard
                    imageUrl={bar}
                    imageAlt="mobile bar" 
                    title="Mobile Bar"
                    subtitle="3m x 1.8m x 2m"
                    list={['Item 1 ', 'Item 2 ', 'Item 3 ', 'Item 4 ', 'Item 5 ', 'Item 6 ', 'Item 7 ', 'Item 8 ', 'Item 9 ', 'Item 10']}
                />
                <TrailerCard 
                    imageUrl={butcher}
                    imageAlt="mobile butcher" 
                    title="Mobile Butcher"
                    subtitle="5m x 1.8m x 2m"
                    list={['Item 1 ', 'Item 2 ', 'Item 3 ', 'Item 4 ', 'Item 5 ', 'Item 6 ', 'Item 7 ', 'Item 8 ', 'Item 9 ', 'Item 10']}
                />
                <TrailerCard 
                    imageUrl={multipurpose}
                    imageAlt="multipurpose trailer" 
                    title="Multipurpose Trailer"
                    subtitle="4.4m x 1.8m x 2m"
                    list={['Item 1 ', 'Item 2 ', 'Item 3 ', 'Item 4 ', 'Item 5 ', 'Item 6 ', 'Item 7 ', 'Item 8 ', 'Item 9 ', 'Item 10']}
                />
            </div>
            <div className="trailers__card3">
                <TrailerCard
                    imageUrl={image10}
                    imageAlt="mobile salon" 
                    title="Mobile Salon"
                    subtitle="3m x 1.8m x 2m"
                    list={['Item 1 ', 'Item 2 ', 'Item 3 ', 'Item 4 ', 'Item 5 ', 'Item 6 ', 'Item 7 ', 'Item 8 ', 'Item 9 ', 'Item 10']}
                />
                <TrailerCard 
                    imageUrl={bowser}
                    imageAlt="bowser" 
                    title="Bowser"
                    subtitle="5m x 1.8m x 2m"
                    list={['Item 1 ', 'Item 2 ', 'Item 3 ', 'Item 4 ', 'Item 5 ', 'Item 6 ', 'Item 7 ', 'Item 8 ', 'Item 9 ', 'Item 10']}
                />
                <TrailerCard 
                    imageUrl={toilet}
                    imageAlt="portable toilet" 
                    title="Portable Toilet"
                    subtitle="3m x 1.2m x 2m"
                    list={['Item 1 ', 'Item 2 ', 'Item 3 ', 'Item 4 ', 'Item 5 ', 'Item 6 ', 'Item 7 ', 'Item 8 ', 'Item 9 ', 'Item 10']}
                />
            </div>
            <div className="trailers__card4">
                <TrailerCard
                    imageUrl={freezer}
                    imageAlt="mobile freezer" 
                    title="Mobile Freezer"
                    subtitle="2.4m x 1.6m x 1.8m"
                    list={['Item 1 ', 'Item 2 ', 'Item 3 ', 'Item 4 ', 'Item 5 ', 'Item 6 ', 'Item 7 ', 'Item 8 ', 'Item 9 ', 'Item 10']}
                />
                <TrailerCard 
                    imageUrl={shop}
                    imageAlt="shop" 
                    title="Mobile Shop"
                    subtitle="5m x 1.8m x 2m"
                    list={['Item 1 ', 'Item 2 ', 'Item 3 ', 'Item 4 ', 'Item 5 ', 'Item 6 ', 'Item 7 ', 'Item 8 ', 'Item 9 ', 'Item 10']}
                />
                <TrailerCard 
                    imageUrl={stage}
                    imageAlt="portable stage" 
                    title="Portable Stage"
                    subtitle="4.4m x 1.8m x 2m"
                    list={['Item 1 ', 'Item 2 ', 'Item 3 ', 'Item 4 ', 'Item 5 ', 'Item 6 ', 'Item 7 ', 'Item 8 ', 'Item 9 ', 'Item 10']}
                />
            </div>
            <div className='trailers__cta'>
                <h2>The best time to start is right now.</h2>
            </div>
        </div>
    )
}