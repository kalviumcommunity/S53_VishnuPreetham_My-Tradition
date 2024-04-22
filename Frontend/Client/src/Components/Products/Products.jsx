import React, { useState } from 'react';
import { Box, VStack, Drawer, DrawerContent, IconButton, useDisclosure, DrawerOverlay, useColorModeValue } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import "./Product.css"
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Navbar from "./../Mainpages/Navbar"
import axios from "axios"


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
                            <label><input style={{ accentColor: "#A21434" }} type="radio" name="category" value="Haldi" /> Haldi</label><br />
                            <label><input style={{ accentColor: "#A21434" }} type="radio" name="category" value="Wedding" /> Wedding</label><br />
                            <label><input style={{ accentColor: "#A21434" }} type="radio" name="category" value="Engagement" /> Engagement</label><br />
                            <label><input style={{ accentColor: "#A21434" }} type="radio" name="category" value="Party" /> Party</label><br />
                            <label><input style={{ accentColor: "#A21434" }} type="radio" name="category" value="Festival" /> Festival</label><br />
                        </div>
                        <p> Choose your Tradition</p>
                        <div className="states">
                            <label>
                                <input type="checkbox" value="Andhra Pradesh" />
                                Andhra Pradesh
                            </label><br />
                            <label>
                                <input type="checkbox" value="Telangana" />
                                Telangana
                            </label><br />
                            <label>
                                <input type="checkbox" value="Tamil Nadu" />
                                Tamil Nadu
                            </label><br />
                            <label>
                                <input type="checkbox" value="Karnataka" />
                                Karnataka
                            </label><br />
                            <label>
                                <input type="checkbox" value="Pujabi" />
                                Pujabi
                            </label><br />

                            <label>
                                <input type="checkbox" value="Kashmiri" />
                                Kashmiri
                            </label><br /><label>
                                <input type="checkbox" value="Maharastra" />
                                Maharastra
                            </label><br /><label>
                                <input type="checkbox" value="Kerala" />
                                Kerala
                            </label><br />
                            <label>
                                <input type="checkbox" value="Bengali" />
                                Bengali
                            </label><br />
                            <label>
                                <input type="checkbox" value="Odissa" />
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
    const [products, setproducts] = useState([]);
    const fetchData = () => {
        axios.get("https://s53-vishnupreetham-my-tradition.onrender.com/Bengali").then((res) => {
            // console.log(res.data)
            setproducts(res.data)
        }).catch((err) => { console.log(err) })
    }
    fetchData();
    return (
        <>
            <div className='products'>
                {products.map((product, i) => (
                    <div className='product-card' key={i}>
                        <img src={product.img} alt={product.product_details.description} className='product-image' />
                        <div className='product-details'>
                            <p className='product-description'>{product.product_details.description ? product.product_details.description.substring(0, 50).concat('...') : ''}</p>
                            <p className='product-price'>Price: ₹{product.price}</p>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
        </>
    )
}
