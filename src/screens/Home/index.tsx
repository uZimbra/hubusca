import React, { useState, useEffect } from 'react';
import { Container, Logo, PostsContainer, SearchBar, SearchInput } from './styles';
import logo from '../../../assets/logo.png'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FlatList } from 'react-native';
import api from '../../services/api';
import Post from '../../components/Post';

type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<PostType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('posts');

      setPosts(response.data)
      setFilteredPosts(response.data)
    }
    fetchData()
  }, [])

  function handleSearchBar(value) {
    const filteredData = posts.filter(post => post.body.toLocaleLowerCase().match(value.toLocaleLowerCase()));
    setFilteredPosts(filteredData);
  }

  return (
    <Container>
      <Logo resizeMode="contain" source={logo} />
      <SearchBar>
        <SearchInput placeholder="Search in posts" onChangeText={handleSearchBar} />
        <TouchableOpacity>
          <MaterialIcons name="search" size={24} color="#00000050" />
        </TouchableOpacity>
      </SearchBar>
      <PostsContainer>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item => String(item.id))}
          data={filteredPosts}
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
    </Container>
  )
}

export default Home;