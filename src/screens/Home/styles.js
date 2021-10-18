import styled from "styled-components";
import { background, white, grayFont, grayish, color } from '../../globals';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${background};
    align-items: center;
    justify-content: center;
`;

export const Img = styled.Image`
    margin-bottom: 300px;
`;

export const Content = styled.View`
    flex: 1;
    background-color: ${white};
    justify-content: space-around;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 450px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    padding: 30px 20px;
`;
export const ContentRow = styled.View`
    flex-direction: row;
    border-bottom-color: ${grayish};
    border-bottom-width: 1px;
    padding-bottom: 20px;
`;
export const IconArea = styled.View`
    align-items: center;
    justify-content: center;
    border: 1px solid ${grayFont};
    width: 60px;
    height: 60px;
    border-radius: 10px;
`;
export const ContentColumn = styled.View`
    justify-content: center;
    margin-left: 15px;
`;
export const TopText = styled.Text`
    color: ${grayFont};
`;
export const BottomText = styled.Text`
    color: ${color};
    font-size: 16px;
    margin-top: 3px;
    font-weight: bold;
`;
export const Button = styled.TouchableOpacity`
    background-color: ${color};
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 52px;
    border-radius: 26px;
    margin-top: 20px;
`;
export const ButtonText = styled.Text`
    color: ${white};
    font-size: 18px;
`;