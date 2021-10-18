import React from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AntDesign from 'react-native-vector-icons/AntDesign';        // clock
import Ionicons from 'react-native-vector-icons/Ionicons';        // clipboard
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';        // attach-money

import BarberLocation from '../../assets/images/barber-location.jpg';

import { background, selectColor } from "../../globals";
import {
    Container,

    Img,
    Name,
    InfoRow,
    InfoTextRow,
    InfoDefaultText,

    ServicesInfoArea,
    ServicesItem,
    IconArea,
    IconCirclePlaceholder,
    ServicesItemColumn,
    TopText,
    BottomText,

    LocationArea,
    LocationTitle,
    LocationPlaceholder,
    ButtonArea,
    Button,
    ButtonText,
    MessageButton,
} from './styles';

export default function Info () {
    const navigation = useNavigation();

    return(
        <Container>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            <Img source={BarberLocation} />

            <Name>Barber Shop</Name>

            <InfoRow>
                <InfoTextRow>
                    <AntDesign name="clockcircleo" color="#aaa" size={20} />
                    <InfoDefaultText>08 am - 18 pm</InfoDefaultText>
                </InfoTextRow>

                <InfoTextRow>
                    <AntDesign name="star" color="gold" size={20} />
                    <InfoDefaultText>4.5</InfoDefaultText>
                </InfoTextRow>
            </InfoRow>

            <ServicesInfoArea>
                <ServicesItem>
                    <IconArea>
                        <Ionicons name="list-circle" color={background} size={30} />
                    </IconArea>

                    <ServicesItemColumn>
                        <TopText>Services</TopText>
                        <BottomText>15+ services</BottomText>
                    </ServicesItemColumn>
                </ServicesItem>

                <ServicesItem>
                    <IconArea>
                        <IconCirclePlaceholder>
                            <MaterialIcons name="attach-money" color='#fff' size={20} />
                        </IconCirclePlaceholder>
                    </IconArea>

                    <ServicesItemColumn>
                        <TopText>Start from</TopText>
                        <BottomText>R$ 20.00</BottomText>
                    </ServicesItemColumn>
                </ServicesItem>
            </ServicesInfoArea>

            <LocationArea>
                <LocationTitle>Location</LocationTitle>
                <LocationPlaceholder />
            </LocationArea>

            <ButtonArea>
                <Button onPress={() => navigation.navigate('appointment')}>
                    <ButtonText>See calendar</ButtonText>
                </Button>

                <MessageButton>
                    <MaterialIcons name="message" color={selectColor} size={25} />
                </MessageButton>
            </ButtonArea>
        </Container>
    )
}