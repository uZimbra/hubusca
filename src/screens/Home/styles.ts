import styled, { css } from 'styled-components/native';
import Constants from 'expo-constants';

export const ScreenBackground = styled.View`
  flex: 1;
	background: #f0f0f5;
`

export const Container = styled.View`
  flex: 1;
	margin: ${Constants.statusBarHeight}px 20px;
	padding-bottom: 5px;
  align-items: center;
`;

export const Logo = styled.Image`
	width: 100px;
	max-height: 50px;
  margin-top: 18px;
`;

export const SearchBar = styled.View`
  width: 95%;
  height: 40px;
  margin: 18px 0;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0.10);
  padding: 0 15px;
  flex-direction: row;
  align-items: center;
`

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: '#00000025'
})`
  width: 95%;
  color: rgba(0, 0, 0, 0.50);
`

export const PostsContainer = styled.View`
  width: 95%;
  height: 75%;
  border-radius: 5px;
`

export const NumberOfPostsContainer = styled.View`
  padding: 10px 10px;

  width: 100%;
  align-items: flex-end;
`

export const NumberOfPostsText = styled.Text`
  color: #909090;
  font-size: 12px;
`