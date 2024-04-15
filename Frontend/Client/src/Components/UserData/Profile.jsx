import React, { useState } from 'react';
import { Box, Flex, Icon, Text, Link, Image, Button, Heading, Stack, VStack, Drawer, Menu, MenuButton, MenuList, MenuItem, DrawerContent, IconButton, useDisclosure, DrawerOverlay, useColorModeValue, Avatar } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import logo from "../../Assets/Logo.png"
import { Logout } from 'iconsax-react';
import { ShoppingCart } from 'iconsax-react';
import { ProfileCircle } from 'iconsax-react';
import { Heart } from 'iconsax-react';
import { TruckTick } from 'iconsax-react';
import myorder from "../../Assets/MyOrder.png"

export default function Index() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [currentPage, setCurrentPage] = useState('main');

  const handleNavItemClicked = (page) => {
    setCurrentPage(page);
  };

  return (
    <Box as="section" bg={useColorModeValue('gray.50', 'gray.700')} minH="100vh">
      <SidebarContent display={{ base: 'none', md: 'unset' }} handleNavItemClicked={handleNavItemClicked} />
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" handleNavItemClicked={handleNavItemClicked} />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          w="full"
          px="4"
          d={{ base: 'flex', md: 'none' }}
          borderBottomWidth="1px"
          borderColor={useColorModeValue('inherit')}
          bg={useColorModeValue('#A21434', 'gray.800')}
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
          />

          <Flex align="center" h={20} w={20}>
            <img src={logo} alt="" />
          </Flex>
        </Flex>

        <Box as="main" p={14} minH="30rem" bg={useColorModeValue('wheat')} h={"90vh"}>
          {currentPage === 'main' && <MainContent />}
          {currentPage === 'cart' && <CartContent />}
          {currentPage === 'orders' && <MyOrders />}
          {currentPage === 'wishlist' && <MyWhishlist />}
          {currentPage === 'track' && <TrackOrder />}
        </Box>
      </Box>
    </Box>
  );
}

const SidebarContent = ({ handleNavItemClicked, ...props }) => (
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
    borderColor={useColorModeValue('inherit', 'gray.700')}
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
          <NavItem onClick={() => handleNavItemClicked('main')} icon={ProfileCircle}>My Profile</NavItem>
          <NavItem onClick={() => handleNavItemClicked('wishlist')} icon={Heart}>My Wishlist</NavItem>
          <NavItem onClick={() => handleNavItemClicked('cart')} icon={ShoppingCart}>My Cart</NavItem>
          <NavItem onClick={() => handleNavItemClicked('orders')} icon={myorder}>My Orders</NavItem>
          <NavItem onClick={() => handleNavItemClicked('track')} icon={TruckTick}>Track Order</NavItem>
          <NavItem icon={Logout}>Logout</NavItem>
        </Flex>
      </Box>

      <Flex px="4" py="5" mt={10} justifyContent="center" alignItems="center">
        <Menu>
          <Avatar
            size={'sm'}
            name="Lord vishnu"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5pORzbYUlLTJFow2_lGPgbmR1i8Q2BKenLECxW_pKjg&s"
          />          
        </Menu>
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

const MainContent = () => (
  <Stack
    direction={{ base: 'column', sm: 'row' }}
    alignItems="center"
    justifyContent="center"
  >
    <h1>My Profile</h1>
  </Stack>
);

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
      This is My Whishlist page
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
