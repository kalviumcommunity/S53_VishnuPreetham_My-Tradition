import React from 'react';
import { Box, Button, Container, Heading, Text, HStack, Icon, VStack } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LaunchingPage = () => {
    const navigate = useNavigate();
    return (
        <Box
            minH="100vh"
            bgImage="url('https://t3.ftcdn.net/jpg/03/64/51/04/360_F_364510436_CQK8xG8LxZWptWulXXhG1WSdKkmEfrsi.jpg')"
            bgPosition="center"
            bgSize="cover"
            bgRepeat="no-repeat"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Container maxW="container.md" textAlign="center">
                <VStack spacing={8}>
                    <Text
                        color="rgb(139, 69, 69)"
                        fontSize="lg"
                        fontWeight="medium"
                        letterSpacing="wide"
                        mb={4}
                    >
                        My Tradition
                    </Text>

                    <Heading
                        as="h1"
                        fontSize={{ base: "4xl", md: "6xl" }}
                        fontWeight="light"
                        color="rgb(139, 69, 69)"
                        lineHeight="1.2"
                        letterSpacing="wide"
                        mb={4}
                    >
                        Launching soon!
                    </Heading>

                    <Text
                        color="rgb(139, 69, 69)"
                        fontSize={{ base: "lg", md: "xl" }}
                        maxW="md"
                        mb={8}
                    >
                        We are currently making some improvements to our website!
                    </Text>

                    <Button
                        bg="white"
                        color="rgb(139, 69, 69)"
                        size="lg"
                        px={8}
                        rounded="full"
                        fontSize="md"
                        fontWeight="medium"
                        _hover={{
                            bg: "gray.100"
                        }}
                        onClick={() => { navigate("/") }}
                    >
                        HOME
                    </Button>

                    <HStack spacing={6} mt={12}>
                        {[FaFacebookF, FaInstagram, FaTwitter].map((SocialIcon, index) => (
                            <Box
                                key={index}
                                as="a"
                                href="#"
                                color="rgb(139, 69, 69)"
                                _hover={{
                                    color: "rgb(169, 99, 99)"
                                }}
                            >
                                <Icon as={SocialIcon} w={6} h={6} />
                            </Box>
                        ))}
                    </HStack>
                </VStack>
            </Container>
        </Box>
    );
}

export default LaunchingPage;

