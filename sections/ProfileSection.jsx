import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import {
	SlideFade,
    Box,
	Heading,
	Avatar,
	Link,
	Flex,
	LightMode,
	ButtonGroup,
	Button,
    useColorModeValue,
    Divider
} from '@chakra-ui/react';
import NextLink from 'next/link';

import Paragraph from '../components/Paragraph';
import SpotifySection from './SpotifySection';

const ProfileSection = ({ song }) => {
    const highlightedTextColor = useColorModeValue("green.500", "green.400");

    return (
        <SlideFade in offsetX={80}>
            <Box>
                <Flex alignItems="center" justifyContent="space-between">
                    <Heading
                        as="h1"
                        fontSize={{ base: '28px', md: '40px', lg: '48px' }}
                        mb={3}
                    >
                        Hey, I am Harsh Tuwar! <span className="waving-hand">👋</span>
                    </Heading>
                    <Flex alignItems={"flex-end"}>
                        <Avatar
                            name="Harsh Tuwar"
                            src="/profile_picture.jpeg"
                            mb={5}
                            size='lg'
                        />
                    </Flex>
                </Flex>
                <Paragraph fontSize="2xl" lineHeight={1.6}>
                    Software Developer from Toronto, Canada 🇨🇦
                </Paragraph>
                <Paragraph fontSize="2xl" lineHeight={1.6}>
                    Focused on {" "}
                    <Link color={highlightedTextColor} href="#" fontWeight="500">
                        Web
                    </Link>{" & "}
                    <Link color={highlightedTextColor} href="#" fontWeight="500">
                        Hybrid Mobile App Development
                    </Link>
                    {" "} and Passionate about Blockchain🧊, Machine Learning🤖 as well as the IoT Technologies 🔥
                </Paragraph>

                <Box mt={5}>
                    <LightMode>
                        <ButtonGroup>
                            <NextLink href='/contact' style={{ textDecoration: 'none' }}>
                                <Button
                                    colorScheme="green"
                                    size="sm"
                                    margin="5px"
                                    leftIcon={<BiPhoneCall color='white'/>}
                                >
                                    Contact Me
                                </Button>
                            </NextLink>
                        </ButtonGroup>
                    </LightMode>
                </Box>
                <Divider my={7} />
                <SpotifySection song={song}/>
            </Box>
        </SlideFade >
    )
}

export default ProfileSection;
