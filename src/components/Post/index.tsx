import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Modal, Text } from 'react-native';
import userIcon from '../../../assets/user-icon.png';
import { usePosts } from '../../hooks/posts';
import { useUsers } from '../../hooks/users';
import api from '../../services/api';
import { CloseModal, Container, DeletePost, DeletePostText, Header, HeaderText, ImageContainer, ModalBackground, ModalButtons, ModalContainer, PostBody, PostTitle, UserImage, UserInfo } from './styles';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Post: React.FC<Post> = ({ userId, id, title, body }: Post ) => {
  const navigation = useNavigation();
  const { getUser } = useUsers();
  const { deletePost } = usePosts();
  const [modalVisibility, setModalVisibility] = useState(false);

  const user = getUser(userId);

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
        onRequestClose={() => setModalVisibility(!modalVisibility)}
      >
        <ModalBackground>
        <ModalContainer>
        <Container modal>
          <Header>
            <ImageContainer>
              <UserImage resizeMode="contain" source={userIcon}/>
            </ImageContainer>
            <UserInfo>
              <HeaderText 
                primary
                onPress={() => {
                  setModalVisibility(!modalVisibility)
                  navigation.navigate({
                    name: 'Profile',
                    params: { userId }
                  })}
                }
              >
                { user && user.username }
              </HeaderText>
              <HeaderText 
                secondary 
                onPress={() => {
                  setModalVisibility(!modalVisibility)
                  navigation.navigate({
                    name: 'Profile',
                    params: { userId }
                  })}
                }
              >
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
      </ModalBackground>
      </Modal>
      <Container>
        <Header>
          <ImageContainer>
            <UserImage resizeMode="contain" source={userIcon}/>
          </ImageContainer>
          <UserInfo>
              <HeaderText primary onPress={() => navigation.navigate({
                  name: 'Profile',
                  params: { userId }
                })}
              >
                { user && user.username }
              </HeaderText>
              <HeaderText secondary onPress={() => navigation.navigate({
                  name: 'Profile',
                  params: { userId }
                })}
              >
                { user && user.name }
              </HeaderText>
          </UserInfo>
        </Header>
          <PostTitle onPress={() => setModalVisibility(!modalVisibility)}>
            { title }
          </PostTitle>
          <PostBody onPress={() => setModalVisibility(!modalVisibility)}>
            { body }
          </PostBody>
      </Container>
    </>
  )
}

export default Post;