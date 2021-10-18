import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

import BarberImg from '../../assets/images/barber.png';

import { background } from '../../globals';
import {
    Container,

    Img,

    Content,
    ContentRow,
    IconArea,
    ContentColumn,
    TopText,
    BottomText,
    Button,
    ButtonText
} from './styles';

export default function Home () {
    return(
        <Container>
            <Img source={BarberImg} />

            <Content>
                <ContentRow>
                    <IconArea>
                        <MaterialIcons name="location-pin" color={background} size={30} />
                    </IconArea>

                    <ContentColumn>
                        <TopText>Address</TopText>
                        <BottomText>Rua Manoela Sampaio - 66</BottomText>
                    </ContentColumn>
                </ContentRow>

                <ContentRow>
                    <IconArea>
                        <FontAwesome5 name="calendar-alt" color={background} size={30} />
                    </IconArea>

                    <ContentColumn>
                        <TopText>Ranger date</TopText>
                        <BottomText>Segunda - Sexta</BottomText>
                    </ContentColumn>
                </ContentRow>

                <ContentRow>
                    <IconArea>
                        <AntDesign name="clockcircle" color={background} size={30} />
                    </IconArea>

                    <ContentColumn>
                        <TopText>Ranger time</TopText>
                        <BottomText>08 AM - 18 PM</BottomText>
                    </ContentColumn>
                </ContentRow>

                <Button>
                    <ButtonText>Details</ButtonText>
                </Button>
            </Content>
        </Container>
    )
}