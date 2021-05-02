import React, { ReactElement, useState } from 'react';
import { Container, Text, Header, HeaderText, ImageContainer, ScreenBackground, TitleContainer, UserImage, UserInfo, TitleInput, BodyContainer, BodyInput, SubmitButton, ButtonText } from './styles';
import { AntDesign } from '@expo/vector-icons';

import UserIcon from '../../../assets/user-icon.png';
import { useUsers } from '../../hooks/users';
import { usePosts } from '../../hooks/posts';
import { useNavigation } from '@react-navigation/core';
import { BackArrow } from '../Profile/styles';
import api from '../../services/api';

interface Params extends ReactElement {
  route: {
    params: {
      userId: number;
    }
  }
}

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const NewPost: React.FC<Params> = ({ route }: Params) => {
  const navigation = useNavigation();
  const userId = route.params.userId;

  const { getUser } = useUsers();
  const { addPost } = usePosts();

  const user = getUser(userId);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  async function handleSubmitPress() {
    const response = await api.post('posts', { userId, title, body });

    const post = response.data;

    addPost({ userId: Number(post.userId), id: Number(post.id), title: String(post.title), body: String(post.body)})

    navigation.goBack();
  }

  return (
    <ScreenBackground>
      <BackArrow onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="#696969" />
      </BackArrow>
      <Container>
        <Header>
          <ImageContainer>
            <UserImage resizeMode="contain" source={UserIcon} />
          </ImageContainer>
          <UserInfo>
            <HeaderText primary>{ user && user.username }</HeaderText>
            <HeaderText secondary>{ user && user.name }</HeaderText>
          </UserInfo>
        </Header>
        <TitleContainer>
          <Text>Title</Text>
          <TitleInput 
            placeholder='Your post title' 
            value={title} 
            onChangeText={setTitle} 
          />
        </TitleContainer>
        <BodyContainer>
          <Text>Body</Text>
          <BodyInput 
            multiline
            numberOfLines={12}
            textAlignVertical = "top"
            placeholder='Your post content here'
            value={body} 
            onChangeText={setBody} 
          />
        </BodyContainer>
        <SubmitButton onPress={handleSubmitPress}>
          <ButtonText>Submit</ButtonText>
        </SubmitButton>
      </Container>
    </ScreenBackground>
  )
}

export default NewPost;