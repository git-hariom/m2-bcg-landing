import "./Features.scss";

const Features = ({ prop }) => {
  return (
    <div className="features-wrapper">
      <div className="title-wrapper">
        <span>Your eCommerce made simple</span>
      </div>
      <div className="image-gallery-wrapper">
        <div className="section1">
          <div className="payment-image-wrapper"></div>
          <div className="gpay-image-wrapper"></div>
          <div className="images-wrapper"></div>
          <div className="title">
            <span>All You Need to Start</span>
          </div>
          <div className="sub-title">
            <span>
              Add Commerce plugin to any WordPress site and set up a new store
              in minutes.
            </span>
          </div>
          <div className="redirection-link">
            <span>Ecommerce for Wordpress ›</span>
          </div>
        </div>
        <div className="section2">
          <div className="square-image-wrapper"></div>
          <div className="facebook-image-wrapper"></div>
          <div className="chimp-image-wrapper"></div>
          <div className="jetpack-image-wrapper"></div>
          <div className="google-ads-image-wrapper"></div>
          <div className="images-wrapper"></div>
          <div className="title">
            <span>Customize and Extend</span>
          </div>
          <div className="sub-title">
            <span>
            From subscriptions to gym classes to luxury cars, Commerce is fully customizable.
            </span>
          </div>
          <div className="redirection-link">
            <span>Browse Extensions ›</span>
          </div>
        </div>
        <div className="section3">
        <div className="laptop-image-wrapper"></div>
        <div className="people-image-wrapper"></div>
        <div className="group-image-wrapper"></div>
          <div className="images-wrapper"></div>
          <div className="title">
            <span>Active Community</span>
          </div>
          <div className="sub-title">
            <span>
            Commerce is one of the fastest-growing eCommerce communities. 
            </span>
          </div>
          <div className="redirection-link">
            <span>Check our Forums ›</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
