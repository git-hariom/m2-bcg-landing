import "./Footer.scss";

const Footer = ({ prop }) => {
  return (
    <div className="footer-wrapper">
      <div className="sec-get-started">
        <div className="label">
          <span>
            Commerce - the most customizable eCommerce platform for building
            your online business.
          </span>
        </div>
        <div className="btn-wrapper">
          <button className="btn">GET STARTED</button>
        </div>
      </div>
      <div className="sec-benefits">
        <div className="benefits">
          <div className="benefit-sec">
            <span className="icon-tick"></span>
            <span>30 day money back guarantee</span>
          </div>
          <div className="benefit-sec">
            <span className="icon-ball"></span>
            <span>30 day money back guarantee</span>
          </div>
          <div className="benefit-sec">
            <span className="icon-lock"></span>
            <span>30 day money back guarantee</span>
          </div>
        </div>
        <div className="label">COMMERCE</div>
        <div className="sm-circle"></div>
      </div>
      <div className="ruler"></div>
      <div className="sec-navs">
        <div className="navs">
          <div className="nav-section">
            <div className="header">WHO WE ARE</div>
            <div className="nav">About</div>
            <div className="nav">Team</div>
            <div className="nav">Work With Us</div>
          </div>
          <div className="nav-section">
            <div className="header">COMMERCE</div>
            <div className="nav">Features</div>
            <div className="nav">Payments</div>
            <div className="nav">Marketing</div>
            <div className="nav">Shipping</div>
            <div className="nav">Extension Store</div>
            <div className="nav">eCommerce blog</div>
            <div className="nav">Development blog</div>
            <div className="nav">Ideas board</div>
            <div className="nav">Mobile App</div>
            <div className="nav">Community</div>
            <div className="nav">Style Guide</div>
            <div className="nav">Email Newsletter</div>
          </div>
          <div className="nav-section">
            <div className="header">OTHER PRODUCTS</div>
            <div className="nav">Storefront</div>
            <div className="nav">Slider</div>
            <div className="nav">Majax</div>
            <div className="nav">Majax Extensions</div>
          </div>
          <div className="nav-section">
            <div className="header">SUPPORT</div>
            <div className="nav">Documentation</div>
            <div className="nav">Customizations</div>
            <div className="nav">Support Policy</div>
            <div className="nav">Contact</div>
            <div className="nav">COVID-19 Resources</div>
            <div className="nav">Privacy Notice for</div>
            <div className="nav">California Users</div>
          </div>
          <div className="nav-section">
            <div className="header">WE RECOMMEND</div>
            <div className="nav">Experts</div>
            <div className="nav">Hosting Solutions</div>
            <div className="nav">Pre-sales FAQ</div>
            <div className="nav">Success Stories</div>
            <div className="nav">Design Feedback Group</div>
          </div>
        </div>
      </div>
      <div className="sec-social">
          <div className="icon-links">
              <span className="twitter"></span>
              <span className="facebook"></span>
              <span className="network"></span>
              <span className="instagram"></span>
          </div>
          <div className="copyright">COPYRIGHT COMMERCE 2020 - <u>TERMS & CONDITIONS</u>&nbsp;&nbsp;&nbsp;<u>PRIVACY POLICY</u></div>
      </div>
    </div>
  );
};

export default Footer;
