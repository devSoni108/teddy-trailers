import TrailerCard from '../components/TrailerCard.jsx';

import image10 from '../assets/mobile-salon.jpg';
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
                    imageAlt="mobile kitchen trailer south africa" 
                    title="Mobile Kitchen"
                    subtitle="3m x 1.8m x 2m"
                    list={['-Single Axle ', '-Griller ', '-Chip Cutter ', '-Deep Fryer ', '-2 Plate Gast Stove ', '-2 Chaffing Dishes ', '-Sink and Cabinet ', '-Spice Rack ', '-20L Water dispenser ', '-1 Interior Bulkhead Light ', '-1 Double Plug ', '-Fridge Space ', '-Kitchen Counter ', '-Lockable Gas Cage']}
                />
                
                <TrailerCard 
                    imageUrl={image3}
                    imageAlt="food truck" 
                    title="Food Truck"
                    subtitle="5m x 1.8m x 2m"
                    list={['-Double Axle ', '-3 x Griller ', '-Chip Cutter ', '-2 x Deep Fryer ', '-3 Plate Gas Stove ', '-4 Chaffing Dishes ', '-Big Sink with Drying Area ', '-Cabinet Under Sink ', '-Spice Rack ', '-2 x 20L Water Dispenser ', '-2 Interior Bulkhead Lights ', '-2 Plug Points (double plug) ', '-Aluminium Kitchen Counter Top ', '-Lockable Gas Cage']}
                />
                <TrailerCard 
                    imageUrl={image1}
                    imageAlt="mobile trailer kitchen" 
                    title="Mobile Kitchen"
                    subtitle="4.4m x 1.8m x 2m"
                    list={['-Double Axle ', '-3 x Griller ', '-Chip Cutter ', '-2 x Deep Fryer ', '-3 Plate Gas Stove ', '-8 Chaffing Dishes ', '-Big Sink with Drying Area ', '-Cabinet Under Sink ', '-Spice Rack ', '-2 x 20L Water Dispenser ', '-2 x Interior Bulkhead Light ', '-2 x Plug Points ', '-Fridge Space ', '-Aluminium Kitchen Counter ', '-Lockable Gas Cage']}
                />
            </div>
            <div className="trailers__header--card2">
                <h2>Taking you Anywhere<br />you can Imagine.</h2>
                <h3>We supply trailers for all events and venues. Our customers range from mobile kitchen and food truck vendors to mobile stages and portable toilets.</h3>
            </div>
            <div className="trailers__card2">
                <TrailerCard
                    imageUrl={bar}
                    imageAlt="mobile trailer bar" 
                    title="Mobile Bar"
                    subtitle="3m x 1.8m x 2m"
                    list={['Bring the bar to you with this fully equipped mobile bar. Provide customers with personalised bar experiences with these awesome trailer bars.']}
                />
                <TrailerCard 
                    imageUrl={butcher}
                    imageAlt="mobile trailer butcher" 
                    title="Mobile Butcher"
                    subtitle="5m x 1.8m x 2m"
                    list={['Take your butcher shop to new locations with a mobile butcher shop. Reach a wider customer base and expand your business with a butchery on a trailer.']}
                />
                <TrailerCard 
                    imageUrl={multipurpose}
                    imageAlt="multipurpose trailer" 
                    title="Multipurpose Trailer"
                    subtitle="4.4m x 1.8m x 2m"
                    list={['This incredibly useful and versatile trailer is ideal for the home owner, businessperson or family. No fuss, easy to maintain trailer with endless use cases.']}
                />
            </div>
            <div className="trailers__card3">
                <TrailerCard
                    imageUrl={image10}
                    imageAlt="mobile trailer salon" 
                    title="Mobile Salon"
                    subtitle="3m x 1.8m x 2m"
                    list={['Do business where your customers are with a mobile salon. Have easy access to your busy clients and help your business rapidly scale while maximizing profits. Get a salon on wheels today.']}
                />
                <TrailerCard 
                    imageUrl={bowser}
                    imageAlt="bowser trailer" 
                    title="Bowser"
                    subtitle="5m x 1.8m x 2m"
                    list={['This Bowser trailer can carry fitted tanks with either Water, Diesel or Petrol. This is mostly used in the agricultural industry to carry water. We also have Diesel and Paraffin trailers with pumps.']}
                />
                <TrailerCard 
                    imageUrl={toilet}
                    imageAlt="portable toilet" 
                    title="Portable Toilet"
                    subtitle="3m x 1.2m x 2m"
                    list={['This is a durable and convenient solution for your function. Double door toilets perfect during events. This is a must for functions, parties and outdoor events of all sizes. Flushing toilets with 240L waste tank and 120L fresh water tank.']}
                />
            </div>
            <div className="trailers__card4">
                <TrailerCard
                    imageUrl={freezer}
                    imageAlt="mobile freezer" 
                    title="Mobile Freezer"
                    subtitle="2.4m x 1.6m x 1.8m"
                    list={['Maintaining products at the optimum temperature is essential in the food and medicine industries. Our freezers have a large storage capacity and can be tailored to your industry needs, size and requirements.']}
                />
                <TrailerCard 
                    imageUrl={shop}
                    imageAlt="shop" 
                    title="Mobile Shop"
                    subtitle="5m x 1.8m x 2m"
                    list={['Take your store on the road with you. Be it an event, trade show, or marketing tour, We will custom design your mobile performance space to meet your needs.']}
                />
                <TrailerCard 
                    imageUrl={stage}
                    imageAlt="portable stage" 
                    title="Portable Stage"
                    subtitle="4.4m x 1.8m x 2m"
                    list={['Take your show on the road with a mobile stage. These trailers are ideal for exhibitions, campaign speeches, mobile theaters, music tours and much more.']}
                />
            </div>
            <div className='trailers__cta'>
                <h2>The best time to start is right now.</h2>
            </div>
        </div>
    )
}