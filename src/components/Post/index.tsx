import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Modal, Text } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import userIcon from '../../../assets/user-icon.png';
import { usePosts } from '../../hooks/pots';
import { useUsers } from '../../hooks/users';
import api from '../../services/api';
import { CloseModal, Container, DeletePost, Header, HeaderText, DeletePostText, ImageContainer, ModalButtons, ModalContainer, PostBody, PostTitle, UserImage, UserInfo } from './styles';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}



const Post: React.FC<Post> = ({ userId, id, title, body }: Post ) => {
  const navigation = useNavigation();
  const { users } = useUsers();
  const { deletePost } = usePosts();
  const [modalVisibility, setModalVisibility] = useState(false);


  async function handleDeletePress(event) {
    const response = await api.delete(`posts/${id}`);

    if (response.status === 200) {
      deletePost(id);
    }
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
                { users && users[userId].username }
              </HeaderText>
              <HeaderText secondary onPress={() => {
                setModalVisibility(!modalVisibility)
                navigation.navigate('Profile')
              }}>
                { users && users[userId].name }
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
            <ShimmerPlaceholder visible={!!users}>
              <HeaderText primary onPress={() => navigation.navigate('Profile')}>
                { users && users[userId].username }
              </HeaderText>
            </ShimmerPlaceholder >
            <ShimmerPlaceholder visible={!!users}>
              <HeaderText secondary onPress={() => navigation.navigate('Profile')}>
                { users && users[userId].name }
              </HeaderText>
            </ShimmerPlaceholder >
          </UserInfo>
        </Header>
        <ShimmerPlaceholder visible={!!users}>
          <PostTitle onPress={() => setModalVisibility(!modalVisibility)}>
            { title }
          </PostTitle>
        </ShimmerPlaceholder >
        <ShimmerPlaceholder visible={!!users}>
          <PostBody onPress={() => setModalVisibility(!modalVisibility)}>
            { body }
          </PostBody>
        </ShimmerPlaceholder >
      </Container>
    </>
  )
}

export default Post;