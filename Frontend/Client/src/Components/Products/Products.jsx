import React, { useContext, useState } from 'react';
import { Box, VStack, Drawer, DrawerContent, IconButton, useDisclosure, DrawerOverlay, useColorModeValue } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import "./Product.css"
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Navbar from "./../Mainpages/Navbar"
import axios from "axios"
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { Heart } from 'iconsax-react';
import { AppContext } from '../../Context/ParentContext';
// import { setCookie } from './Cookie';
import { setModel, setUidCookie } from './Cookie.js';
import cookies from "js-cookie";
import {useNavigate} from "react-router-dom"
// import { useNavigate } from 'react-router-dom';


export default function ProductPage() {

    const { isOpen, onClose, onOpen, isclose } = useDisclosure();
    return (
        <>
            <Navbar></Navbar>
            <Box as="section" bg={useColorModeValue('gray.50', 'gray.700')} minH="100vh">
                <SidebarContent display={{ base: 'none', md: 'unset' }} marginTop={"21vh"} />
                <Drawer isOpen={isOpen} onClose={onClose} placement="left">
                    <DrawerOverlay />
                    <DrawerContent bg={useColorModeValue('none')} w={60} >
                        <SidebarContent borderRight="none" onClose={onClose} />
                    </DrawerContent>
                </Drawer>
                <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
                    <IconButton
                        marginTop={"16vh"}
                        aria-label="Menu"
                        display={{ base: 'inline-flex', md: 'none' }}
                        onClick={onOpen}
                        icon={<FiMenu />}
                        size="md"
                        bg="wheat"
                    />
                    <Box as="main" minH="30rem" h={"100%"} minHeight={"100vh"} w={"100%"}>
                        <Products />
                    </Box>
                </Box>
            </Box>
        </>

    );
}
const SidebarContent = ({ ...props }) => {
    const [range, setRange] = useState([500, 40000])
    const sliderStyles = {
        trackStyle: [{ backgroundColor: '#A21434' }],
        railStyle: { backgroundColor: '#A21434' },
        handleStyle: {
            borderColor: '#A21434',
            backgroundColor: 'wheat',
        },

    };

    const handleSliderChange = (value) => {
        setRange(value);
    };
    const changeModel = (event) => {
        const currentModel = event.target.value;
        // setModel(currentModel); 
        setModel(currentModel);
        // console.log(model);
    }
    // console.log(model)
    return (
        <Box
            as="nav"
            pos="fixed"
            top="0"
            left="0"
            zIndex="sticky"
            h="full"
            overflowX="hidden"
            overflowY="auto"
            bg={useColorModeValue('wheat')}
            borderColor={useColorModeValue()}
            borderRightWidth="1px"
            color="#A21324"
            {...props}
        >
            <VStack h="full" w="full" alignItems="flex-start" justifyContent="space-between">
                <div className='Productspage'>
                    {/* <HambergerMenu className='menu' size="32" color="#F8EAD1" onClick={openMenu} /> */}
                    <div className={"sidebar"}>
                        <p> Choose your Fest </p>
                        <div className="prodctscatogory">
                            <label><input style={{ accentColor: "#A21434" }} type="radio" name="category" value="Haldi" onChange={changeModel} /> Haldi</label><br />
                            <label><input style={{ accentColor: "#A21434" }} type="radio" name="category" value="WeddingModern" onChange={changeModel} /> Wedding</label><br />
                            <label><input style={{ accentColor: "#A21434" }} type="radio" name="category" value="Kurtha" onChange={changeModel} /> Engagement</label><br />
                            <label><input style={{ accentColor: "#A21434" }} type="radio" name="category" value="Croptop" onChange={changeModel} /> Party</label><br />
                            <label><input style={{ accentColor: "#A21434" }} type="radio" name="category" value="Festival" onChange={changeModel} /> Festival</label><br />
                        </div>
                        <p> Choose your Tradition</p>
                        <div className="states">
                            <label>
                                <input type="radio" name="category" value="AndhraPradesh" onChange={changeModel} />
                                Andhra Pradesh
                            </label><br />
                            <label>
                                <input type="radio" name="category" value="TeluguWedding" onChange={changeModel} />
                                Telangana
                            </label><br />
                            <label>
                                <input type="radio" name="category" value="TamilNadu" onChange={changeModel} />
                                Tamil Nadu
                            </label><br />
                            <label>
                                <input type="radio" name="category" value="Karnataka" onChange={changeModel} />
                                Karnataka
                            </label><br />
                            <label>
                                <input type="radio" name="category" value="Punjabi" onChange={changeModel} />
                                Pujabi
                            </label><br />
                            {/* <label htmlFor=""></label> */}
                            <label>
                                <input type="radio" name="category" value="Kashmiri" onChange={changeModel} />
                                Kashmiri
                            </label><br /><label>
                                <input type="radio" name="category" value="Maharastra" onChange={changeModel} />
                                Maharastra
                            </label><br /><label>
                                <input type="radio" name="category" value="Kerala" onChange={changeModel} />
                                Kerala
                            </label><br />
                            <label>
                                <input type="radio" name="category" value="Bengali" onChange={changeModel} />
                                Bengali
                            </label><br />
                            <label>
                                <input type="radio" name="category" value="Odissa" onChange={changeModel} />
                                Odissa
                            </label><br />
                        </div>
                        <p> Choose your Price Range</p>
                        <div className="price" style={{ paddingLeft: "20px" }}>
                            <div className="slider-container" style={{ margin: "auto" }} >
                                <Slider
                                    min={500}
                                    max={40000}
                                    range
                                    value={range}
                                    onChange={handleSliderChange}
                                    {...sliderStyles}
                                    style={{ marginTop: "20px", width: "80%" }}
                                />
                                <div>
                                    Range: ₹{range[0]} - ₹{range[1]}
                                </div>
                            </div>
                        </div>

                    </div >
                </div >
            </VStack>
        </Box >
    )
}
const Products = () => {
    const navigate=useNavigate();
    const Model = cookies.get("model")
    const [products, setproducts] = useState([]);
    const { user } = useContext(AppContext);
    // const [product,setProduct]=useState({})
    const setProductUid = (productUid) => {
        // console.log(productUid)
        setUidCookie(productUid)
        const puid = cookies.get("productId");
        navigate('/fullproduct')
        // console.log("puid",puid);
    }
    const [added, setAdded] = useState(false)
    const handleWishlist = async (product) => {
        try {
            const userRef = doc(db, 'users', user.uid);
            if (added) {
                await updateDoc(userRef, {
                    wishlist: arrayRemove(product),
                });
            } else {
                await updateDoc(userRef, {
                    wishlist: arrayUnion(product),
                });
                console.log("SuccessFully Added")
            }
        } catch (error) {
            console.error("Error handling wishlist:", error);
        }
    }
    // const getFullProduct=(id,model)=>{
    //     setCookie(id,model)
    // }
    const fetchData = () => {
        axios.get(`http://localhost:3000/getProducts/${Model}`).then((res) => {
            // console.log(res.data)
            setproducts(res.data)
        }).catch((err) => { console.log(err) })
    }
    fetchData();
    return (
        <>
            <div className='products'>
                {products.map((product, i) => (
                    <div className='product-card' key={i} onClick={() => { setProductUid(product._id) }}>
                        <Heart onClick={() => { handleWishlist(product) }} className='Heart' size="32" color="#ebc5a1" />

                        <img src={product.img} alt={product.product_details.description} className='product-image' />
                        <div className='product-details' >
                            <p className='product-description'>{product.product_details.description ? product.product_details.description.substring(0, 50).concat('...') : ''}</p>
                            <p className='product-price'>Price: ₹{product.price}</p>
                            <button >Get Full Product</button>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
        </>
    )
}