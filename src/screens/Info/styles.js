import styled from "styled-components";
import { black, color, grayFont, white } from '../../globals';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${white};
    align-items: center;
`;

/** ------------------------------------------------------------- */

export const Img = styled.Image`
    width: 150px;
    height: 150px;
    border-radius: 75px;
    margin-top: 50px;
`;
export const Name = styled.Text`
    color: ${color};
    font-weight: 500;
    font-size: 22px;
    margin-top: 30px;
`;
export const InfoRow = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
`;
export const InfoTextRow = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 0 30px;
`;
export const InfoDefaultText = styled.Text`
    color: ${grayFont};
    margin-left: 10px;
    font-size: 16px;
`;

/** ------------------------------------------------------------- */

export const ServicesInfoArea = styled.View``;
export const ServicesItem = styled.View``;
export const IconArea = styled.View``;
export const IconCirclePlaceholder = styled.View``;
export const ServicesItemColumn = styled.View``;
export const TopText = styled.Text``; 
export const BottomText = styled.Text``; 

/** ------------------------------------------------------------- */

export const LocationArea = styled.View``;
export const LocationTitle = styled.Text``;
export const LocationPlaceholder = styled.View``;

/** ------------------------------------------------------------- */

export const ButtonArea = styled.View``;
export const Button = styled.TouchableOpacity``;
export const ButtonText = styled.Text``;
export const MessageButton = styled.View``;