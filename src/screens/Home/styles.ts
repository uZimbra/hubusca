import styled, { css } from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
	margin: 0 20px;
	margin-top: ${ Constants.statusBarHeight}px;
	background: #f0f0f5;
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
  width: 97%;
  height: 80%;
`


