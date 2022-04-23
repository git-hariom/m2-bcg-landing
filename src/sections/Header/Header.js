import './Header.scss';
import {useState} from 'react';

const Header = ({prop})=>{

    const [toggleHemberger, setToggleHemberger] = useState(false);
    
    const renderConditionalHeader = () =>{
        if(!toggleHemberger && window.screen.width<=425){
            return (
                <div className="mobile-view-header">
                    <div className="hemberger" onClick={()=>setToggleHemberger((prev)=>{return !prev})}></div>
                    <span className='brand-name'>COMMERCE</span>
                </div>
            )
        }else{
            return (
                <div className="header-wrapper">
                    <div className="nav-option-wrapper">
                        <div className="close" onClick={()=>setToggleHemberger((prev)=>{return !prev})}></div>
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
    }
    return (
       <div className="header-parent">
        {
            renderConditionalHeader()
        }
       </div>   
    )
}

export default Header;