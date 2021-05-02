import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background-color: #F9F9F9;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 4px;
`;

export const ModalBackground = styled.View`
  background-color: rgba(0, 0, 0, 0.3);
  flex: 1;
`

export const ModalContainer = styled.View`
  margin: auto;
  padding: 20px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.10);
  border-radius: 4px;
`

export const Header = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0,0.04);
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
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

export const PostTitle = styled.Text`
  color: #696969;
  font-size: 18px;
  padding: 15px 15px;
`

export const PostBody = styled.Text`
  color: #909090;
  padding: 0px 15px;
`

export const ModalButtons = styled.View`
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
  padding: 10px 0;
`

export const CloseModal = styled.TouchableOpacity`
  width: 120px;
  height: 40px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: #E5E5E5;
`
export const DeletePost = styled.TouchableOpacity`
  width: 120px;
  height: 40px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: #CA3256;
`

export const DeletePostText = styled.Text`
  color: #fff;
`