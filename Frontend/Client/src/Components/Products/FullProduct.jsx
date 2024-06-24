import React, { useEffect, useState } from 'react';
import { TwitterShareButton, FacebookShareButton, TwitterIcon, FacebookIcon, WhatsappShareButton, WhatsappIcon } from 'react-share';
import './Product.css';
import { Send } from 'iconsax-react';
import Navbar from '../Mainpages/Navbar';
import { ArrowDown2,Heart } from 'iconsax-react';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import cookies from 'js-cookie'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const FullProduct = () => {
    const productId=cookies.get("productId");
    const [product,setProduct]=useState({});
    const [isSharing, setIsSharing] = useState(false);
    const urlToShare = "https://example.com";
    const titleToShare = "Check out this amazing content!";
    const getProduct=async()=>{
        try {
            const model=cookies.get("model");
            const products=await axios.get(`https://s53-vishnupreetham-my-tradition.onrender.com/getOneProduct/${model}/${productId}`)
            setProduct(products.data)
            // console.log(products.data.product_details.description)
            console.log(product.product_details.description);
        } catch (error) {
            console.log(error);
        }
    }
    const navigate=useNavigate();
    useEffect(()=>{
        getProduct()
    })
    const handleCart = async (product) => {
        try {
            const userRef = doc(db, 'users', user.uid);
            if (added) {
                await updateDoc(userRef, {
                    AddToCart: arrayRemove(product),
                });
            } else {
                await updateDoc(userRef, {
                    AddToCart: arrayUnion(product),
                });
                console.log("SuccessFully Added")
            }
        } catch (error) {
            console.error("Error handling wishlist:", error);
        }
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
                        {/* <img src={Product.img2} alt="" />
                        <img src={Product.img3} alt="" />
                        <img src={Product.img4} alt="" /> */}
                    </div>
                    <div className="mainimg">
                        <img src={product.img} alt="" />
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
                        {/* <h2>{product.product_details.description}</h2> */}
                        <p className='AboutProduct'>{product.Aboutproduct}</p>
                        <div className="Price">
                            <p className='price'>₹ Price-{product.price}</p>
                            <p className='offer'>20% OFF&nbsp;<strong> ₹ {product.price - (product.price * 20 / 100)}</strong> </p>
                        </div>
                        <button className="AddtoCart">Add To Cart</button>
                        <button className="Buynow" onClick={()=>{navigate('/payment')}}>Buy Now</button>
                        <p className='NoExchangeandNoReturn'>No Exchange <br /> No Return </p>
                    </div>
                </div>
            </div>
            <div className={`particularProduct ${showDetails ? 'show' : ''}`}>
                <div className="dropdown-btn" onClick={toggleDetails}><p>Product Details </p>
                    <ArrowDown2 className={`ArrowDown ${showDetails ? 'show' : ''}`} size="32" color="#FF8A65" /></div>
                <div className="dropdown-content">
                 {/* <h2>{product.product_details.description}</h2> 
                    <p>{product.product_details.top_type}</p>
                    <p>{product.product_details.top_style}</p>
                    <p>{product.product_details.top_pattern}</p>
                    <p>{product.product_details.sleeve_detail}</p> */}
                </div>
            </div>
        </div>
    );
};

export default FullProduct;
