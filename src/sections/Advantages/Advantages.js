import './Advantages.scss';

const Advantages = ({prop})=>{
    return (
        <div className="advantages-wrapper">
            <div className="small-circle left"></div>
            <div className="big-circle left"></div>
            <div className="bg-dotted left"></div>
            <div className="small-circle right"></div>
            <div className="big-circle right"></div>
            <div className="bg-dotted right"></div>
            <div className="quirky-text"></div>
            <div className="top-section">
                <div className="image-wrapper"></div>
                <div className="details-wrapper">
                    <div className="title">Develop Without Limits</div>
                    <div className="info">Commerce is developer friendly, too. Built with a REST API, Commerce is scalable and can integrate with virtually any service. Design a complex store from scratch, extend a store for a client, or simply add a single product to a WordPress site—your store, your way.</div>
                    <div className="btn">Read the Documentation</div>
                </div>
            </div>
            <div className="bottom-section">
                <div className="details-wrapper">
                    <div className="title">Know our Global Community</div>
                    <div className="info">Commerce is one of the fastest-growing eCommerce communities. We’re proud that the helpfulness of the community and a wealth of online resources are frequently cited as reasons our users love it. There are 80+ meetups worldwide!</div>
                    <div className="btn">Read the Documentation</div>
                </div>
                <div className="image-wrapper"></div>
            </div>
        </div>
    )
}

export default Advantages;