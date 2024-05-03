import React, { useState,Fragment, useContext }  from 'react';
import { Box, Flex, Icon, Text, Link, Image, Button, Heading, Stack, VStack, Drawer, Menu, MenuButton, MenuList, MenuItem, DrawerContent, IconButton, useDisclosure, DrawerOverlay, useColorModeValue, Avatar, Container, HStack, Tooltip, chakra, Divider ,Tag,FormControl,FormLabel,Input,Textarea} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import logo from "../../Assets/Logo.png"
import logoon from "../../Assets/LogoOn.png"
import { Logout } from 'iconsax-react';
import { ShoppingCart } from 'iconsax-react';
import { ProfileCircle } from 'iconsax-react';
import { Heart } from 'iconsax-react';
import { TruckTick } from 'iconsax-react';
import myorder from "../../Assets/MyOrder.png"
import "../../App.css"
import { Edit } from 'iconsax-react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Context/ParentContext';



export default function Index() {
  const {setUser , setSignin}=useContext(AppContext)
  const navigate=useNavigate()
  const { isOpen, onClose, onOpen,isclose } = useDisclosure();
  const [currentPage, setCurrentPage] = useState('main');
  const handleNavItemClicked = (page) => {
    setCurrentPage(page);
    onClose();
    
  };
  const handleSignOut = async () => {
    try {
      // alert(`${user} hello`)
      // alert(`hii ${user}`)
      // console.log("hii")
      alert("hello")
        setSignin(false)
        await signOut(auth)
        console.log("logout successful")
        // Navigate('/login')
        navigate("/")
        setUser({})
    } catch (error) {
        console.log(error);
        }
    };

  

  return (
    <Box as="section" bg={useColorModeValue('gray.50', 'gray.700')} minH="100vh">
      <SidebarContent display={{ base: 'none', md: 'unset' }} handleNavItemClicked={handleNavItemClicked} handleSignOut={handleSignOut}/>
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent bg={useColorModeValue('none')} w={60}>
          <SidebarContent borderRight="none" onClose={onClose} handleNavItemClicked={handleNavItemClicked} handleSignOut={handleSignOut}/>
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease" >
        <Flex
          as="header"
          align="center"
          w="full"
          px="4"
          d={{ base: 'flex', md: 'none' }}
          borderBottomWidth="1px"
          borderColor={useColorModeValue('inherit')}
          bg={useColorModeValue('#A21434')}
          justifyContent={{ base: 'space-between', md: 'flex-end' }}
          boxShadow="lg"
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{ base: 'inline-flex', md: 'none' }}
            onClick={onOpen}
            icon={<FiMenu />}
            size="md"
            bg="wheat"
          />
          <Flex align="center" h={20} w={20}>
            <img src={logoon} alt="" />
          </Flex>
        </Flex>
        <Box as="main"  minH="30rem" bg={useColorModeValue('wheat')} h={"100%"} minHeight={"100vh"} w={"100%"}>
          {currentPage === 'main' && <UserCardContainer />}
          {currentPage === 'cart' && <CartContent />}
          {currentPage === 'orders' && <MyOrders />}
          {currentPage === 'wishlist' && <MyWhishlist />}
          {currentPage === 'track' && <TrackOrder />}
        </Box>
      </Box>
    </Box>
  );
}
const SidebarContent = ({ handleNavItemClicked,handleSignOut, ...props }) => (
  
  <Box
    as="nav"
    pos="fixed"
    top="0"
    left="0"
    zIndex="sticky"
    h="full"
    overflowX="hidden"
    overflowY="auto"
    bg={useColorModeValue('#A21434')}
    borderColor={useColorModeValue()}
    borderRightWidth="1px"
    w="60"
    color="wheat"
    {...props}
  >
    <VStack h="full" w="full" alignItems="flex-start" justifyContent="space-between">
      <Box w="full">
        <Flex px="4" py="5" align="center">
          <img src={logo} alt="" />
        </Flex>
        <Flex
          direction="column"
          as="nav"
          fontSize="md"
          color="wheat"
          aria-label="Main Navigation"
        >
          <NavItem onClick={() => {handleNavItemClicked('main');
          onClose={onClose}}} icon={ProfileCircle}>My Profile</NavItem>
          <NavItem onClick={() => {handleNavItemClicked('wishlist') ;onClose()}} icon={Heart}>My Wishlist</NavItem>
          <NavItem onClick={() => {handleNavItemClicked('cart');onClose()}} icon={ShoppingCart}>My Cart</NavItem>
          <NavItem onClick={() => {handleNavItemClicked('orders');onClose()}} icon={myorder}>My Orders</NavItem>
          <NavItem onClick={() => {handleNavItemClicked('track');onClose()}} icon={TruckTick}>Track Order</NavItem>
          <NavItem icon={Logout} onClick={()=>{handleSignOut()}}>Logout</NavItem>
        </Flex>
      </Box>

      <Flex px="4" py="5" mt={10} justifyContent="center" alignItems="center">
        <Avatar
          size={'sm'}
          name="Lord vishnu"
        // src={user.photoURL} 
          
        />
      </Flex>
    </VStack>
  </Box>
);

const NavItem = ({ icon, children, onClick }) => {
  const color = useColorModeValue('gray.600', 'gray.300');

  return (
    <Flex
      align="center"
      px="4"
      py="3"
      cursor="pointer"
      role="group"
      fontWeight="semibold"
      transition=".15s ease"
      color={useColorModeValue('inherit', 'gray.400')}
      _hover={{
        bg: useColorModeValue('#A21434.100'),
        color: useColorModeValue('#A21434.900')
      }}
      onClick={onClick}
    >
      {icon && (
        <Icon
          mx="2"
          boxSize="6"
          color={"#F5DEB3"}
          _groupHover={{
            color: "#F5deb3"
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  );
};
const UserCardContainer = () => {
  const{user} =useContext(AppContext);

  return (
    <>
    <div className='stack'>
      <div className="profile">
        <img  src={user.photoURL} alt="" />
      </div>
      <div className="details">
        <h1>Profile Details</h1>
        <p>{user.displayName}</p>
        <p>{user.email}</p>
      </div>
      <div className="details">
        <h1>Contact Details</h1>
        <p><strong>Gender</strong>&nbsp;&nbsp;&nbsp;-Not Added-</p>
        <p><strong>Phone:</strong>&nbsp;&nbsp;&nbsp;9988776655</p>

      </div>
    </div>
    <div className='stack2'>
<h1>Address</h1>
<p>Add Address</p>

    </div>
    <div className="billadd">
    <div className="billing-address">
        <h1>Default Billing Address</h1>
        <p>You have not set a default billing address.</p>
        <p className="edit-address" style={{display:"flex", justifyContent:"space-between",width:"60%", alignItems:"center"}}>Edit Address   <Edit size="20" color="black"/></p>
    </div>
    <div className="shipping-address">
        <h1>Default Shipping Address</h1>
        <p>You have not set a default shipping address.</p>
        <p className="edit-address" style={{display:"flex", justifyContent:"space-between",width:"60%", alignItems:"center"}}>Edit Address <Edit size="20" color="black"/></p>
    </div>
</div>

    </>
  );
};








const CartContent = () => (
  <Stack
    direction={{ base: 'column', sm: 'row' }}
    alignItems="center"
    justifyContent="center">
    <Text>
      This is Cart page
    </Text>
  </Stack>
);

const TrackOrder = () => (
  <Stack
    direction={{ base: 'column', sm: 'row' }}
    alignItems="center"
    justifyContent="center">
    <Text>
      This is Track Order page
    </Text>
  </Stack>
);

const MyWhishlist = () => (
  <Stack
    direction={{ base: 'column', sm: 'row' }}
    alignItems="center"
    justifyContent="center">
    <Text>
      This is My Wishlist page
    </Text>
  </Stack>
);

const MyOrders = () => (
  <Stack
    direction={{ base: 'column', sm: 'row' }}
    alignItems="center"
    justifyContent="center">
    <Text>
      This is My Orders page
    </Text>
  </Stack>
);
const Index2 = () => {
  const companies = [
    {
      title: 'Google',
      alt: 'company image',
      role: 'Senior Software Engineer',
      skills: ['ruby', 'rails', 'typescript', 'javascript', 'react', 'aws'],
      period: '2019 - Present',
      logo: 'https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80'
    }
  ];
  return (
    <Container maxW="4xl" p={{ base: 5, md: 12 }}>
      <VStack spacing={4} marginBottom={6} align="left" mx={[0, 0, 6]}>
        
          <Box
            
            px={4}
            py={5}
            borderWidth="1px"
            _hover={{ shadow: 'lg' }}
            bg={useColorModeValue('white', 'gray.800')}
            position="relative"
            rounded="md"
          >
            <Flex justifyContent={["center", "space-between"]} alignItems="center" p={"10px"}>

            <Heading>Addresses</Heading>
            <Link>Manage Addresses</Link>
            </Flex>
          </Box>
        
      </VStack>
    </Container>
  );
};

const Tags = ({ skills, ...props }) => {
  return (
    <Stack spacing={1} mt={3} isInline alignItems="center" flexWrap="wrap" {...props}>
      {skills.map((skill) => (
        <Tag key={skill} m="2px" size="sm">
          {skill}
        </Tag>
      ))}
    </Stack>
  );
};

import { GoLocation } from 'react-icons/go';
import { BsPhone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';


// const contactOptions = [
//   {
//     label: 'Address',
//     value: 'A108 Adam Street, NY 535022, USA',
//     icon: GoLocation
//   },
//   {
//     label: 'PHONE NUMBER',
//     value: '+1 5589 55488 55',
//     icon: BsPhone
//   },
//   {
//     label: 'EMAIL',
//     value: 'info@example.com',
//     icon: HiOutlineMail
//   }
// ];

const Contact = () => {
  return (
    <Container maxW="7xl" py={10} px={{ base: 5, md: 8 }} bg={"wheat"}>
      <Stack spacing={10}>
        <Flex align="center" justifyContent="center" direction="column">
          <Heading fontSize="4xl" mb={2}>
            Contact Us
          </Heading>
          <Text fontSize="md" textAlign="center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          </Text>
        </Flex>
        <Stack
          spacing={{ base: 6, md: 0 }}
          direction={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
        >
          {contactOptions.map((option, index) => (
            <Fragment key={index}>
              <Stack
                spacing={3}
                direction="column"
                justifyContent="center"
                alignItems="center"
                px={3}
              >
                <Icon as={option.icon} w={10} h={10} color="green.400" />
                <Text fontSize="lg" fontWeight="semibold">
                  {option.label}
                </Text>
                <Text fontSize="md" textAlign="center">
                  {option.value}
                </Text>
              </Stack>
              {contactOptions.length - 1 !== index && (
                <Flex d={{ base: 'none', md: 'flex' }}>
                  <Divider orientation="vertical" />
                </Flex>
              )}
            </Fragment>
          ))}
        </Stack>
        <VStack
          as="form"
          spacing={8}
          w="100%"
          bg={useColorModeValue('white', 'gray.700')}
          rounded="lg"
          boxShadow="lg"
          p={{ base: 5, sm: 10 }}
        >
          <VStack spacing={4} w="100%" >
            <Stack w="100%" spacing={3} direction={{ base: 'column', md: 'row' }}>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder="Name" rounded="md" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="test@test.com" rounded="md" />
              </FormControl>
            </Stack>
            <FormControl id="subject">
              <FormLabel>Subject</FormLabel>
              <Input type="text" placeholder="Are you available for freelance work?" rounded="md" />
            </FormControl>
            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <Textarea size="lg" placeholder="Enter your message" rounded="md" />
            </FormControl>
          </VStack>
          <VStack w="100%">
            <Button
              bg="green.300"
              color="white"
              _hover={{
                bg: 'green.500'
              }}
              rounded="md"
              w={{ base: '100%', md: 'max-content' }}
            >
              Send Message
            </Button>
          </VStack>
        </VStack>
      </Stack>
    </Container>
  );
};