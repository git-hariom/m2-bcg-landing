import './Branding.scss';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Branding = ({prop})=>{

    const [counter, setCounter] = useState(1);
    const introRef = useRef();
    useEffect(()=>{
        gsap.to(introRef.current, {opacity : 1, duration : 2});
    },[]);
    

    const handleMinus = ()=>{
        setCounter((prev)=>{
            if(prev === 0){
                return 0;
            }else{
                return --prev;
            }
        })
    }

    const handleAdd = ()=>{
        setCounter((prev)=>{
            if(prev === 10){
                return 10;
            }else{
                return ++prev;
            }
        })
    }

    return (
        <div className="branding-wrapper">
            <div className="left-section-wrapper">
                <div className="title" ref={introRef}>
                    <span>Lorem ipsum is placeholder text for previewing</span>
                </div>
                <div className="sub-title">
                    <span>
                        Commerce is a customizable, open-source eCommerce platform built on WordPress. 
                        Get started quickly and make your way.
                    </span>
                </div>
                <div className="btn-wrapper">
                    <span className="start-btn">Start a New Store</span>
                    <span className="or-label">or</span>
                    <span className="customize-label">Customize & Extend ›</span>
                </div>
            </div>
            <div className="right-section-wrapper">
                <div className="bg-dotted first"></div>
                <div className="bg-dotted second"></div>
                <div className="bg-dotted third"></div>
                <div className="add-cart-wrapper">
                    <div className="img-container"></div>
                    <div className="cart-container">
                        <div className="cart-contents">
                            <div className="title-wrapper">
                                <span className="title">SHOES</span>
                                <span className="sub-title">Dream Originals</span>
                            </div>
                            <div className="brand-name">
                                <span>Dream Originals OG Sneakers</span>
                            </div>
                            <div className="size-display-wrapper">
                                <div className="size-wrapper">7</div>
                                <div className="size-wrapper">7.5</div>
                                <div className="size-wrapper">8</div>
                                <div className="size-wrapper">8.5</div>
                                <div className="size-wrapper">9</div>
                            </div>
                            <div className="items-counter-wrapper">
                                <div className="purchase-amount-wrapper">
                                    <span className="amount">$344</span>
                                    <span className="discount">$44</span>
                                </div>
                                <div className="counter-wrapper">
                                    <div className="counter">
                                        <div className="minus" onClick={handleMinus}>-</div>
                                        <div className="value">{counter}</div>
                                        <div className="add" onClick={handleAdd}>+</div>
                                    </div>
                                </div>
                            </div>
                            <div className="add-to-cart-btn-wrapper">
                                    <button className="btn">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="cart-icon-wrapper">
                        <div className="cart-icon"></div>
                    </div>
                    <div className="sale-label-wrapper">
                       <span>SALE</span>
                    </div>
                    <div className="shield-icon-wrapper">
                        <div className="shield-icon"></div>
                    </div>
                </div>
                <div className="group-image"></div>
                <div className="stripe-wrapper"></div>
            </div>
        </div>
    )
}

export default Branding;