import React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  Table,
  Tbody,
  Tr,
  Td,
  useColorModeValue,
} from "@chakra-ui/react";
// import { SearchIcon, CheckIcon } from '@chakra-ui/icons'
import Navbar from "../Mainpages/Navbar";

export default function OrderConfirmation() {
  const [status, setStatus] = useState(1); 

  const updateOrderStatus = (newStatus) => {
    setStatus(newStatus);
  };
  const isCompleted = (step) => status >= step;
  return (
    <>
      <Box minHeight="100vh" bg={"wheat"}>
        <Navbar />
        <Box as="header" color="white" py={4} marginTop={"9%"}></Box>

        <Container maxW="container.xl" mt={8}>
          <Heading as="h2" size="xl" mb={4}>
            Thank you for your order #391169070825
          </Heading>
          <Button variant="link" mb={4}>
            Continue Shopping
          </Button>

          <Box
            borderWidth={1}
            borderRadius="lg"
            borderColor={"#A21434"}
            p={6}
            mb={8}
          >
            <Flex align="center" mb={4}>
              <Text>Please Check Your Order here</Text>
            </Flex>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <Box>
                <Text fontWeight="semibold">Order placed</Text>
                <Text>Value shipping</Text>
                <Text>Arrives by Tue, May 10</Text>
                <Text>Sold by MyTradition.com</Text>
                <Text>Order #391169070825</Text>
              </Box>
              <Box>
                <Text fontWeight="semibold">Shipping address</Text>
                <Text>John Newman</Text>
                <Text>2125 Chestnut Street</Text>
                <Text>San Francisco, CA 94123</Text>
                <Text>test-order@baymarc.com</Text>
              </Box>
            </Grid>
            <Flex align="center" mt={4}>
              <Box display="flex" alignItems="center">
                <Box
                  w={4}
                  h={4}
                  borderRadius="full"
                  bg={isCompleted(1) ? "green.500" : "gray.300"}
                  mr={2}
                />
                <Text fontSize="sm" color="gray.600">
                  Order placed
                </Text>
                <Box
                  flex={1}
                  borderTop="1px"
                  borderColor={isCompleted(2) ? "green.500" : "gray.300"}
                  mx={2}
                />
                <Box
                  w={4}
                  h={4}
                  borderRadius="full"
                  bg={isCompleted(2) ? "green.500" : "gray.300"}
                  mx={2}
                />
                <Text fontSize="sm" color="gray.600">
                  Processing
                </Text>
                <Box
                  flex={1}
                  borderTop="1px"
                  borderColor={isCompleted(3) ? "green.500" : "gray.300"}
                  mx={2}
                />
                <Box
                  w={4}
                  h={4}
                  borderRadius="full"
                  bg={isCompleted(3) ? "green.500" : "gray.300"}
                  mx={2}
                />
                <Text fontSize="sm" color="gray.600">
                  Shipped
                </Text>
                <Box
                  flex={1}
                  borderTop="1px"
                  borderColor={isCompleted(4) ? "green.500" : "gray.300"}
                  mx={2}
                />

                {/* Step 4: Delivered */}
                <Box
                  w={4}
                  h={4}
                  borderRadius="full"
                  bg={isCompleted(4) ? "green.500" : "gray.300"}
                  ml={2}
                />
                <Text fontSize="sm" color="gray.600">
                  Delivered
                </Text>
              </Box>
            </Flex>
          </Box>

          <Grid templateColumns="2fr 1fr" gap={8}>
            <Box>
              <Heading as="h3" size="lg" mb={4}>
                Order summary
              </Heading>
              <Table variant="simple">
                <Tbody>
                  <Tr>
                    <Td>Subtotal (1 item)</Td>
                    <Td isNumeric>$4.43</Td>
                  </Tr>
                  <Tr>
                    <Td>Value shipping</Td>
                    <Td isNumeric>$4.97</Td>
                  </Tr>
                  <Tr>
                    <Td>Est. tax</Td>
                    <Td isNumeric>$0.39</Td>
                  </Tr>
                  <Tr fontWeight="bold">
                    <Td>Total</Td>
                    <Td isNumeric>$9.79</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
            <Box>
              <Heading as="h3" size="lg" mb={4}>
                Payment type
              </Heading>
              <Text>Ending in 8903</Text>
              <Heading as="h3" size="lg" mt={6} mb={4}>
                Billing address
              </Heading>
              <Text>John Newman</Text>
              <Text>2125 Chestnut Street</Text>
              <Text>San Francisco, CA 94123</Text>
              <Text>test-order@baymarc.com</Text>
            </Box>
          </Grid>

          <Box
            borderWidth={1}
            borderRadius="lg"
            p={6}
            mt={8}
            bg="yellow.50"
            borderColor="yellow.200"
          >
            <Flex justify="space-between" align="center">
              <Box>
                <Heading as="h3" size="lg">
                  Get $10 Cash Back & 10% cash back
                </Heading>
                <Text>on your next Walmart purchase!</Text>
              </Box>
              <Button colorScheme="blue">Click Here</Button>
            </Flex>
          </Box>
        </Container>
      </Box>
    </>
  );
}
