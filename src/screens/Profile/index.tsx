import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React, { ReactElement, useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import UserIcon from '../../../assets/user-icon.png';
import Post from '../../components/Post';
import { usePosts } from '../../hooks/pots';
import { useUsers } from '../../hooks/users';
import { BackArrow, Container, NewPostButton, PostsContainer, PostsCounter, ScreenBackground, UserAvatar, UserContainer, UserEmail, UserInfo, UserName, UserUsername } from './styles';
interface Params extends ReactElement {
  route: {
    params: {
      userId: number;
    }
  }
}

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Profile: React.FC<Params> = ({ route }: Params) => {
  const navigation = useNavigation();
  const { users } = useUsers();
  const { posts } = usePosts();
  const user = route.params.userId;

  const [userPosts, setUserPosts] = useState<Posts[]>([]);

  useEffect(() => {
    const filteredPosts = posts.filter(post => post.userId === user);

    setUserPosts(filteredPosts);
  }, [posts])

  return (
    <ScreenBackground>
      <Container>
        <UserContainer>
          <BackArrow onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="#696969" />
          </BackArrow>
          <UserAvatar resizeMode='contain' source={UserIcon} />
          <UserUsername>{ users[user].username }</UserUsername>
          <UserName>{ users[user].name }</UserName>
          <UserEmail>Email: { users[user].email }</UserEmail>
          <UserInfo>Phone: { users[user].phone }</UserInfo>
          <UserInfo>Website: { users[user].website }</UserInfo>
          <UserInfo Address>Address: {`${users[user].address.street}, ${users[user].address.suite} - ${users[user].address.city}, ${users[user].address.zipcode}`}</UserInfo>
        </UserContainer>
        <PostsContainer>
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(item => String(item.id))}
            data={userPosts}
            renderItem={({item}) => 
              <Post
                userId={item.userId}
                id={item.id}
                title={item.title}
                body={item.body}
              />
            }
          />
        </PostsContainer>
        <PostsCounter>Number of posts: {userPosts.length}</PostsCounter>
        <NewPostButton>
          <AntDesign name="plus" size={24} color="white" />
        </NewPostButton>
      </Container>
    </ScreenBackground>
  );
}

export default Profile;