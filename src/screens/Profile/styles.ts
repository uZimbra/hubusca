import styled, { css } from 'styled-components/native';
import Constants from 'expo-constants';

export const ScreenBackground = styled.View`
  flex: 1;
	background: #f0f0f5;
  position: relative;
`

export const Container = styled.View`
  flex: 1;
	padding-bottom: 5px;
  align-items: center;
`

export const BackArrow = styled.TouchableOpacity`
  position: absolute;
  top: 50px;
  left: 20px;
`

export const UserContainer = styled.View`
  padding: 64px 0;
  width: 100%;
  height: 45%;
  align-items: center;
  border-radius: 4px;
  background-color: #Fff;
`

export const UserAvatar = styled.Image`
  margin: 12px 0;
  width: 60px;
  height: 60px;
`

export const UserUsername = styled.Text`
  color: #696969;
  font-weight: bold;
`

export const UserName = styled.Text`
  color: #909090;
  font-size: 15px;
`

export const UserEmail = styled.Text`
  margin-top: 15px;
  color: #909090;
  font-size: 14px;
`
export const UserInfo = styled.Text`
  color: #909090;
  font-size: 14px;
  margin-top: 2px;

  ${props => props.Address && css`
    font-size: 10px;
  `}
` 

export const PostsContainer = styled.View`
  width: 95%;
  height: 50%;
  margin-top: 15px;
  border-radius: 4px;
`

export const PostsCounter = styled.Text`
  color: #909090;
  font-size: 12px;
  margin-top: 5px;
`

export const NewPostButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  position: absolute;
  background-color: #316379;
  bottom: 20px;
  right: 20px;
  align-items: center;
  justify-content: center;
`