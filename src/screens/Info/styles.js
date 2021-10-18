import styled from "styled-components";
import { background, black, color, grayFont, grayish, selectColor, white } from '../../globals';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${white};
    align-items: center;
    padding: 0 30px;
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

export const ServicesInfoArea = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 40px;
`;
export const ServicesItem = styled.View`
    flex-direction: row;
`;
export const IconArea = styled.View`
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: 1px solid ${grayFont};
    border-radius: 5px;
`;
export const IconCirclePlaceholder = styled.View`
    background-color: ${background};
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border-radius: 15px;
`;
export const ServicesItemColumn = styled.View`
    margin-left: 15px;
`;
export const TopText = styled.Text`
    color: ${grayFont};
`; 
export const BottomText = styled.Text`
    color: ${color};
    font-weight: 500;
    font-size: 17px;
    margin-top: 5px;
`; 

/** ------------------------------------------------------------- */

export const LocationArea = styled.View`
    width: 100%;
    margin-top: 30px;
`;
export const LocationTitle = styled.Text`
    color: ${color};
    font-weight: 500;
    font-size: 20px;
`;
export const LocationPlaceholder = styled.View`
    background-color: ${grayish};
    height: 220px;
    border-radius: 15px;
    margin-top: 20px;
`;

/** ------------------------------------------------------------- */

export const ButtonArea = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
`;
export const Button = styled.TouchableOpacity`
    flex: 1;
    background-color: ${color};
    align-items: center;
    justify-content: center;
    height: 52px;
    border-radius: 26px;
`;
export const ButtonText = styled.Text`
    font-size: 18px;
`;
export const MessageButton = styled.View`
    background-color: ${grayish};
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    border-radius: 26px;
    margin-left: 15px;
`;