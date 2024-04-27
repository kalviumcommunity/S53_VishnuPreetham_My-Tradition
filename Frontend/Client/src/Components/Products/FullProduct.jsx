import React, { useState } from 'react';
import { TwitterShareButton, FacebookShareButton, TwitterIcon, FacebookIcon, WhatsappShareButton, WhatsappIcon } from 'react-share';
import './Product.css';
import { Send } from 'iconsax-react';
import Navbar from '../Mainpages/Navbar';
import { ArrowDown2,Heart } from 'iconsax-react';

const FullProduct = () => {
    const [isSharing, setIsSharing] = useState(false);
    const urlToShare = "https://example.com";
    const titleToShare = "Check out this amazing content!";
    const Product =
    {
        "product_details": {
            "description": "Punjabi Red and Gold Bridal Lehenga",
            "top_type": "Lehenga",
            "top_style": "Bridal",
            "top_pattern": "Solid",
            "sleeve_detail": null,
            "fit": null,
            "fabric": "Silk"
        },
        "img": "https://i.pinimg.com/736x/4b/d0/02/4bd0026afd5df63cc27aed8bcf52ca69.jpg",
        "img2": "https://i.pinimg.com/564x/2c/d3/1b/2cd31b4aa7fa3f5dc7eb10954f6d1ab0.jpg ",
        "img3": " https://i.pinimg.com/564x/93/e0/00/93e000d03b8dc6b5fdb83df11e00a3c9.jpg",
        "img4": " https://i.pinimg.com/564x/68/b3/98/68b3980062b246203de1b3c17a66cfee.jpg",
        "price": "15000",
        "Description": "Punjabi Red and Gold Bridal Lehenga",
        "Aboutproduct": "Make a statement on your wedding day with this stunning Punjabi Red and Gold Bridal Lehenga. The intricate embroidery and rich colors exude elegance and tradition.",
        "color": "Red and Gold"
    }
    const toggleShare = () => {
        setIsSharing(!isSharing);
    };
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };
    return (
        <div>
            <Navbar />
            <div className="singleproduct">
                <div className="productimg">
                    <div className="Similarproducts">
                        <img src={Product.img2} alt="" />
                        <img src={Product.img3} alt="" />
                        <img src={Product.img4} alt="" />
                    </div>
                    <div className="mainimg">

                        <img src={Product.img} alt="" />
                    </div>
                </div>
                <div className="productdescription">
                    <div className="share_addToCart">
                        <button className={`share-toggle ${isSharing ? 'open' : ''}`} onClick={toggleShare}>
                            <Send size="32" color="#FF8A65" />
                        </button>
                        <Heart size={"32"} color="#FF8A65"/>
                        <div className={`share-buttons-container ${isSharing ? 'show' : ''}`}>
                            <ul>
                                <li className='Icons'>
                                    <TwitterShareButton
                                        url={urlToShare}
                                        title={titleToShare}
                                        className="share-button"
                                    >
                                        <TwitterIcon size={32} />
                                    </TwitterShareButton>
                                </li>
                                <li className='Icons'>
                                    <FacebookShareButton
                                        url={urlToShare}
                                        quote={titleToShare}
                                        className="share-button"
                                    >
                                        <FacebookIcon size={32} />
                                    </FacebookShareButton>
                                </li>
                                <li className='Icons'>
                                    <WhatsappShareButton
                                        url={urlToShare}
                                        quote={titleToShare}
                                        className="share-button"
                                    >
                                        <WhatsappIcon size={32} />
                                    </WhatsappShareButton>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="productdetails">
                        <h2>{Product.product_details.description}</h2>
                        <p className='AboutProduct'>{Product.Aboutproduct}</p>
                        <div className="Price">
                            <p className='price'>₹ Price-{Product.price}</p>
                            <p className='offer'>20% OFF&nbsp;<strong> ₹ {Product.price - (Product.price * 20 / 100)}</strong> </p>
                        </div>
                        <button className="AddtoCart">Add To Cart</button>
                        <button className="Buynow">Buy Now</button>
                        <p className='NoExchangeandNoReturn'>No Exchange <br /> No Return </p>
                    </div>
                </div>
            </div>
            <div className={`particularProduct ${showDetails ? 'show' : ''}`}>
                <div className="dropdown-btn" onClick={toggleDetails}><p>Product Details </p>
                    <ArrowDown2 className={`ArrowDown ${showDetails ? 'show' : ''}`} size="32" color="#FF8A65" /></div>
                <div className="dropdown-content">
                    <h2>Description: Punjabi Red and Gold Bridal Lehenga</h2>
                    <p>Top Type: Lehenga</p>
                    <p>Top Style: Bridal</p>
                    <p>Top Pattern: Solid</p>
                    <p>Fabric: Silk</p>
                </div>
            </div>
        </div>
    );
};

export default FullProduct;
