import './Testimonials.scss';


const Testimonials = ({prop})=>{
    return (
        <div className="testimonials-wrapper">
            <div className="title-wrapper">
                <span className="title">Trusted by Agencies & Store Owners</span>
            </div>
            <div className="testimonial">
                <div className="bg-dotted--left"></div>
                <div className="bg-dotted--right"></div>
                <div className="cards-wrapper stacked-first">
                    <div className="label">
                        No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, Commerce doesn't charge you a portion of your profits as your business grows!
                    </div>
                </div>
                <div className="cards-wrapper stacked-second"></div>
                <div className="cards-wrapper stacked-third"></div>
            </div>
            <div className="image-top-left"></div>
            <div className="image-center-left"></div>
            <div className="image-bottom-left"></div>
            <div className="image-top-right"></div>
            <div className="image-center-right"></div>
            <div className="image-bottom-right"></div>
        </div>
    )
}

export default Testimonials;