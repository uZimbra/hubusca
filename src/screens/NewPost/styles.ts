import styled, { css } from 'styled-components/native';
import Constants from 'expo-constants';

export const ScreenBackground = styled.View`
  flex: 1;
	background: #fff;
`

export const BackArrow = styled.TouchableOpacity`
  position: absolute;
  top: 50px;
  left: 20px;
`

export const Container = styled.View`
  flex: 1;
	margin: ${Constants.statusBarHeight}px 20px;
	padding-bottom: 5px;
  align-items: center;
`

export const Header = styled.View`
  margin-top: 20%;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0,0.04);
  flex-direction: row;
  align-items: center;
  padding-bottom: 15px;
`

export const ImageContainer = styled.View`
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.02);
  border-radius: 50px;
`

export const UserImage = styled.Image`
  width: 40px;
  height: 40px;
`

export const UserInfo = styled.View`
  margin: 0 10px;
`

export const HeaderText = styled.Text`
  width: 100%;
  ${props => props.primary && css`
    font-size: 16px;
    color: #696969;
  `}

  ${props => props.secondary && css`
    font-size: 10px;
    color: #909090;
  `}
`

export const TitleContainer = styled.View`
  width: 100%;
  margin-top: 20px;
`

export const Text = styled.Text`
  color: #696969;
`
export const TitleInput = styled.TextInput`
  margin: 3px 0;
  border: 1px solid rgba(0, 0, 0, 0.05);

  padding-left: 15px;

  height: 40px;
  border-radius: 4px;
  background-color: #F6F6F6;
`

export const BodyContainer = styled.View`
  margin: 0;
  padding: 0;
  width: 100%;
  margin-top: 20px;
`

export const BodyInput = styled.TextInput`
  margin: 0;
  padding: 0;
  margin: 3px 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  height: 250px;
  padding: 15px;
  background-color: #F6F6F6;
`

export const SubmitButton = styled.TouchableOpacity`
  margin: 20px;
  background-color: #316379;
  width: 120px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`
export const ButtonText = styled.Text`
  color: #fff;
  font-size: 14px;

`