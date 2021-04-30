import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Modal, Text } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import userIcon from '../../../assets/user-icon.png';
import api from '../../services/api';
import { CloseModal, Container, DeletePost, Header, HeaderText, DeletePostText, ImageContainer, ModalButtons, ModalContainer, PostBody, PostTitle, UserImage, UserInfo } from './styles';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  }
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}

const Post: React.FC<Post> = ({ userId, id, title, body }: Post ) => {
  const navigation = useNavigation();
  const [user, setUser] = useState<User>();
  const [modalVisibility, setModalVisibility] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`users/${userId}`);

      setUser(response.data)
    }

    fetchData()
  }, []);

  async function handleDeletePress(event) {
    await api.delete(`posts/${id}`);
  }

  return (
    <>
      <Modal
        visible={modalVisibility} 
        animationType="fade"
        transparent
      >
        <ModalContainer>
        <Container modal>
          <Header>
            <ImageContainer>
              <UserImage resizeMode="contain" source={userIcon}/>
            </ImageContainer>
            <UserInfo>
              <HeaderText primary onPress={() => {
                setModalVisibility(!modalVisibility)
                navigation.navigate('Profile')
              }}>
                { user && user.username }
              </HeaderText>
              <HeaderText secondary onPress={() => {
                setModalVisibility(!modalVisibility)
                navigation.navigate('Profile')
              }}>
                { user && user.name }
              </HeaderText>
            </UserInfo>
          </Header>
          <PostTitle>
            { title }
          </PostTitle>
          <PostBody>
            { body }
          </PostBody>
        </Container>
        <ModalButtons>
          <CloseModal
            onPress={() => setModalVisibility(!modalVisibility)}
          >
            <Text>Close</Text>
          </CloseModal>
          <DeletePost onPress={handleDeletePress}>
            <DeletePostText>Delete Post</DeletePostText>
          </DeletePost>
        </ModalButtons>
      </ModalContainer>
      </Modal>
      <Container>
        <Header>
          <ImageContainer>
            <UserImage resizeMode="contain" source={userIcon}/>
          </ImageContainer>
          <UserInfo>
            <ShimmerPlaceholder visible={!!user}>
              <HeaderText primary onPress={() => navigation.navigate('Profile')}>
                { user && user.username }
              </HeaderText>
            </ShimmerPlaceholder >
            <ShimmerPlaceholder visible={!!user}>
              <HeaderText secondary onPress={() => navigation.navigate('Profile')}>
                { user && user.name }
              </HeaderText>
            </ShimmerPlaceholder >
          </UserInfo>
        </Header>
        <ShimmerPlaceholder visible={!!user}>
          <PostTitle onPress={() => setModalVisibility(!modalVisibility)}>
            { title }
          </PostTitle>
        </ShimmerPlaceholder >
        <ShimmerPlaceholder visible={!!user}>
          <PostBody onPress={() => setModalVisibility(!modalVisibility)}>
            { body }
          </PostBody>
        </ShimmerPlaceholder >
      </Container>
    </>
  )
}

export default Post;