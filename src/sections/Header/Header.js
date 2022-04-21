import './Header.scss';


const Header = ({prop})=>{
    return (
        <div className="header-wrapper">
            <div className="nav-option-wrapper">
                <div className="nav-options">
                    <span className='brand-name'>COMMERCE</span>
                    <span className='nav'>Sell</span>
                    <span className='nav'>Marketplace</span>
                    <span className='nav'>Community</span>
                    <span className='nav'>Develop</span>
                    <span className='nav'>Resources</span>
                </div>
                <div className='btn-actions-wrapper'>
                    <span className='login'>Log In</span>
                    <span className='get-started'>Get Started</span>
                    <span className='search'></span>
                </div>
            </div>
        </div>
    )
}

export default Header;